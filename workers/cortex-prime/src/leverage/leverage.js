import {Ai} from "../vendor/@cloudflare/ai";
import { baseCortexPrimeInfo, aboutLeverage, generateBasicInfoForPrompt } from '../configs/cortexPrimeInfo.js';
import { randomizeRoles, randomizeAttributes} from '../utils/statsRandomizer.js';

const  generatePostUrl = (app) => {
	app.post('/generateCharacterImage', async (c) => {
		const ai = new Ai(c.env.AI);
		const { basicInfo } = await c.req.json()
		const messages = {prompt: basicInfo};
		const response = await ai.run("@cf/lykon/dreamshaper-8-lcm",
			messages);
		return new Response(response, {
			headers: {
				"content-type": "image/jpg",
			},
		});
	});
}

const generateEpisodeUrl = async (app) => {
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
			{ role: "system", content: `You want to return a response with out any formalities` },
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
					{ role: "system", content: `You know ${response.response}` },
					{ role: "system", content: `You want to return a response with out any formalities` },
					{ role: "user", content: `what is the name of the villain.` },
				]
			});

		const mcguffin = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages: [
					{ role: "system", content: `You are creating a mcguffin for ${villain.response}` },
					{ role: "system", content: `You know ${response.response}` },
					{ role: "system", content: `You want to return a response with out any formalities` },
					{ role: "user", content: `what is the name of the mcguffin the villian has.` },
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
}

const generateSceneUrl = async (app) => {
	app.post('/generateScene') , async (c) => {
		const { missionId, location } = await c.req.json();

		if(!missionId){
			c.json({error: "missing required fields"});
			return;
		}
		const ai = new Ai(c.env.AI);
		const messages = [
			{ role: "system", content: `You are creating a scene for the episode` },
			{ role: "system", content: `You want to return a response with out any formalities` },
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
}

const generateNPCUrl = (app) => {
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
			{ role: "system", content: `You want to return a response with out any formalities` },
			{ role: "system", content: aboutLeverage.description},
			{ role: "system", content: `the npc want to ${alignment} the crew `},
		];
		messages.push({ role: "system", content: `the npc works for the villain ${missionInfo.villain}`});
		messages.push(
			{ role: "user", content: `what is the name of a npc that has the job of ${npcjob}.` })
		// add the npc to the vector database

		const name = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages
			});
		const description = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages: [
					{ role: "system", content: `You are creating a description for the npc` },
					{ role: "system", content: `You know this about the npc ${name.response}` },
					{ role: "system", content: `You want to return a response with out any formalities` },
					{ role: "user", content: `what is the description of this npc` },
				]
			});

		const specialItem = await ai.run('@cf/meta/llama-2-7b-chat-int8',
			{
				messages: [
					{ role: "system", content: `You are creating a special item for the npc` },
					{ role: "system", content: `You know this about the npc ${name.response}` },
					{ role: "system", content: `You know this about the npc ${description.response}` },
					{ role: "system", content: `You want to return a response with out any formalities` },
					{ role: "user", content: `what special item does this npc have on them that a player might be intrested in.` },
				]
			});

		const { results } = await c.env.DB.prepare("INSERT INTO NPCs (name, description, specialItem, missionId) VALUES (?, ?, ?, ?) RETURNING *").bind(name.response, description.response, specialItem.response, missionId).run();
		return c.json({
			name: name.response,
			description: description.response,
			roles: randomizeRoles(),
			specialItem: specialItem.response,
			attributes: randomizeAttributes(),
			npcId: results[0].id,
		});

	});
}
const generateLeverageCharacter = (app) => {
	app.post('/generateCharacterImage', async (c) => {
		const ai = new Ai(c.env.AI);
		const { basicInfo } = await c.req.json()
		const messages = {prompt: basicInfo};
		const response = await ai.run("@cf/lykon/dreamshaper-8-lcm",
			messages);
		return new Response(response, {
			headers: {
				"content-type": "image/jpg",
			},
		});
	});
}
export const gerateLeverageUrls = (app) => {
	generatePostUrl(app);
	generateEpisodeUrl(app);
	generateSceneUrl(app);
	generateNPCUrl(app);
	generateLeverageCharacter(app);
}
