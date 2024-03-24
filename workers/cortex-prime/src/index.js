import { Ai } from './vendor/@cloudflare/ai.js';
import { Hono } from "hono";
import { cors } from 'hono/cors';
import { baseCortexPrimeInfo, aboutLeverage, generateBasicInfoForPrompt } from './configs/cortexPrimeInfo.js';
import { randomizeRoles, randomizeAttributes} from './utils/statsRandomizer.js';
const app = new Hono();


app.use(
		'/*',
		cors({
				origin: ['https://bradfordrodgersfarmer.us', 'http://localhost:3002', 'https://cortexprimeai.pages.dev'],
				allowMethods: ['POST', 'GET', 'OPTIONS'],
		})
);

app.get('/', (c) => {
		return c.json({
				title: baseCortexPrimeInfo.title,
				description: baseCortexPrimeInfo.description,
				url: baseCortexPrimeInfo.url,
				image: baseCortexPrimeInfo.image,
				rules: baseCortexPrimeInfo.rules,
				diceDistribution: baseCortexPrimeInfo.diceDistribution
		});
});

app.post('/generateEpisode', async (c) => {
		const { basicInfo } = await c.req.json()
		if(!basicInfo){
				c.json({error: "missing required fields"});
				return;
		}
		const ai = new Ai(c.env.AI);
		const messages = [
				{ role: "system", content: `You are creating an episode with the genre of Leverage for a ttrpg` },
				{ role: "system", content: `here is some addition info about the episode:  ${basicInfo}` },
				{ role: "user", content: `what is the name of the episode. what is the main conflict of the episode. what is the resolution of the episode. what is the twist of the episode.` },
		];
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages
				});

		// create a villain based off the response by making a call to the ai

		const villain = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a villain for the episode` },
								{ role: "user", content: `what is the name of the villain. what is the villain's motivation. what is the villain's plan. what is the villain's weakness.` },
						]
				});

		const mcguffin = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a mcguffin for the episode` },
								{ role: "user", content: `what is the name of the mcguffin. what is the mcguffin's history. what is the mcguffin's power. what is the mcguffin's weakness.` },
						]
				});

		const { results } = await c.env.DB.prepare("INSERT INTO GameNotes (villain, mcguffin, missionInfo) VALUES (?, ?, ?) RETURNING *").bind(villain.response, mcguffin.response, response.response).run();
		const record = results.length ? results[0] : null;
		if (!record) {
				return c.text("Failed to create note", 500);
		}
		const { id } = record;

		return  c.json({
				description: response.response,
				roles: randomizeRoles(),
				attributes: randomizeAttributes(),
				villain: villain.response,
				mcguffin: mcguffin.response,
				missionId: id.toString(),
		});
});

app.post('/generateScene') , async (c) => {
		const { missionId, location } = await c.req.json();

		if(!missionId){
				c.json({error: "missing required fields"});
				return;
		}
		const ai = new Ai(c.env.AI);
		const messages = [
				{ role: "system", content: `You are creating a scene for the episode` },
				{ role: "user", content: `what are some details about a scene in the following location ${location}` },
		];
		const response = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages
				});

		const { results } = await c.env.DB.prepare("INSERT INTO Scenes (sceneInfo, missionId) VALUES (?, ?) RETURNING *").bind(response.response, missionId).run();
		const record = results.length ? results[0] : null;
		if (!record) {
				return c.text("Failed to create note", 500);
		}
		const { id } = record;
		return  c.json({
				description: response.response,
				difficulty: 6,
				sceneId: id.toString(),
		});
}

app.post('/generateNpc', async (c) => {
		const { npcjob, alignment, missionId} = await c.req.json();
		if(!npcjob || !alignment){
				c.json({error: "missing required fields"});
				return;
		}

		const ai = new Ai(c.env.AI);
		const basicInfo = generateBasicInfoForPrompt();
		// grab the current mission info based off the id from the vector database
		const data = await c.env.DB.prepare("SELECT * FROM GameNotes WHERE id = ?").bind(missionId).run();
		if(!data){
				c.json({error: "mission not found"});
				return;
		}
		const missionInfo = data.results[0];


		const messages = [
				{ role: "system", content: missionInfo.missionInfo },
				{ role: "system", content: basicInfo },
				{ role: "system", content: `You are creating an NPC with the job of ${npcjob}` },
				{ role: "system", content: aboutLeverage.description},
				{ role: "system", content: `the npc want to ${alignment} the crew `},
		];
		messages.push({ role: "system", content: `the npc works for the villain ${missionInfo.villain}`});
		messages.push(
				{ role: "user", content: `what is the name of a npc has the job of ${npcjob}.` })
		// add the npc to the vector database

		const name = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages
				});
		const description = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a description for the npc` },
								{ role: "user", content: `what is the description of this npc` },
						]
				});
		const motivation = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a motivation for the npc` },
								{ role: "user", content: `what motivates this npc` },
						]
				});
		const job = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a job for the npc` },
								{ role: "user", content: `what is the job of this npc` },
						]
				});

		const specialItem = await ai.run('@cf/meta/llama-2-7b-chat-int8',
				{
						messages: [
								{ role: "system", content: `You are creating a special item for the npc` },
								{ role: "user", content: `what special item does this npc have on them that a player might be intrested in.` },
						]
				});

		const { results } = await c.env.DB.prepare("INSERT INTO NPCs (name, description, motivation, job, specialItem, missionId) VALUES (?, ?, ?, ?, ?,?) RETURNING *").bind(name, description, motivation, job, specialItem, missionId).run();
		return c.json({
				name: name.response,
				description: description.response,
				motivation: motivation.response,
				roles: randomizeRoles(),
				attributes: randomizeAttributes(),
				job: job.response,
				specialItem : job.specialItem,
				npcId: results[0].id,
		});

});

app.onError((err, c) => {
		return c.text(err)
});



export default app;
