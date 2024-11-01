import {Ai} from "../vendor/@cloudflare/ai";
import {basePrompt} from "./rules.js";
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
		const data = await c.env.DB.prepare("SELECT * FROM Page WHERE bookId = ? order by id asc").bind(missionId).run();
		if (!data) {
			c.json({ error: "mission not found" });
			return;
		}
		const bookSoFar = data.results.join(' ');
		const messages = [
			{ role: "system", content: basePrompt },
			{ role: "system", content: bookSoFar },
			{ role: "user", content: `the card that pulled was ${cardPulled} and  am doing: ${action}` },
		];
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages
			});
		const { results } = await c.env.DB.prepare("INSERT INTO Page ( bookId, page ) VALUES ( ?, ?) RETURNING *").bind(missionId, response.response).run();
		const record = results.length ? results[0] : null;
		if (!record) {
			return c.text("Failed to create note", 500);
		}
		return  c.json({
			description: response.response,
		});

	});
}

export const generateMagicalArrivalUrls = (app) => {
	generateInitalSetp(app);
	magicalArrivalGenerateAction(app);
}
