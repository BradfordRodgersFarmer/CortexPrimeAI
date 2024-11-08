import {Ai} from "../vendor/@cloudflare/ai";
import {basePrompt} from "./rules.js";
import {tools} from "./tools";
const generateInitalSetp = async (app) => {

	app.post('/magicalArrivalGenerateScene' , async (c) => {
		const { missionId, playerName, bookTitle } = await c.req.json();
		if(!missionId && !playerName){
			c.json({error: "missing required fields"});
			return;
		}
		const ai = new Ai(c.env.AI);
		const messages = [
			{ role: "system", content: basePrompt },
			{ role: "user", content: `my Character name is  ${playerName} with a book titled ${bookTitle} explain to me the scened and what the village and my house looks like ` },
		];
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages
			});
		const { results } = await c.env.DB.prepare("INSERT INTO Book ( playerName,  bookTitle) VALUES ( ?, ?) RETURNING *").bind(playerName, bookTitle).run();
		const record = results.length ? results[0] : null;
		if (!record) {
			return c.text("Failed to create note", 500);
		}
		const { id } = record;
		await c.env.DB.prepare("INSERT INTO Page ( bookId, page ) VALUES ( ?, ?) RETURNING *").bind(id, response.response).run();
		return  c.json({
			description: response.response,
			missionId: id.toString(),
		});
	});
}
export const magicalArrivalGenerateAction = async (app) => {
	app.post('/magicalArrivalGenerateAction' , async (c) => {
		const { missionId, action ,cardPulled } = await c.req.json();
		if(!missionId && !action){
			c.json({error: "missing required fields"});
			return;
		}
		const ai = new Ai(c.env.AI);
		const data = await c.env.DB.prepare("SELECT * FROM Page WHERE bookId = ? order by id desc limit 10").bind(missionId).run();
		if (!data) {
			c.json({ error: "mission not found" });
			return;
		}
		const bookSoFar =  "This is the [...story] that has been told so far keep track of all character interactions that have been done up to this point:" + data.results.reverse().join(' ');
		const messages = [
			{ role: "system", content: basePrompt },
			{ role: "user", content: bookSoFar },
			{ role: "user", content: `the card that pulled was ${cardPulled} and  am doing: ${action}` },
		];
		const {response , tool_calls} = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
					messages,
					tools,
					seed: parseInt(missionId)
			});

		const { results } = await c.env.DB.prepare("INSERT INTO Page ( bookId, page ) VALUES ( ?, ?) RETURNING *").bind(missionId, response).run();
		const record = results.length ? results[0] : null;
		if (!record) {
			return c.text("Failed to create note", 500);
		}

		return  c.json({
			description: response,
		});

	});
}

const magicalArrivalFindStory = async (app) => {
	app.post('/magicalArrivalFindStory' , async (c) => {
			const { missionId } = await c.req.json();
			if(!missionId){
				c.json({error: "missing required fields"});
				return;
			}
			const data = await c.env.DB.prepare("SELECT * FROM Page WHERE bookId = ? order by id asc").bind(missionId).run();
			if (!data) {
				c.json({ error: "mission not found" });
				return;
			}
			const bookData = await c.env.DB.prepare("SELECT * FROM Book WHERE id = ?").bind(missionId).run();
			return c.json( {pages:data.results, bookInfo: bookData.results[0]});
	});
}
export const generateMagicalArrivalUrls = (app) => {
	generateInitalSetp(app);
	magicalArrivalGenerateAction(app);
	magicalArrivalFindStory(app);
}
