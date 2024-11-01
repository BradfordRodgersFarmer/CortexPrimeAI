import { Hono } from "hono";
import { cors } from 'hono/cors';
import { baseCortexPrimeInfo } from './configs/cortexPrimeInfo.js';
import { gerateLeverageUrls } from './leverage/leverage.js';
import {generateMagicalArrivalUrls} from "./magicalArrival/magicalArrival";
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

generateMagicalArrivalUrls(app);
gerateLeverageUrls(app);

app.onError((err, c) => {
		return c.text(err)
});
export default app;
