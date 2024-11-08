export const baseCortexPrimeInfo = {
		title: 'Cortex Prime',
		description: 'Cortex Prime is a modular tabletop roleplaying game system. ' +
				'It enables you to play one game with a variety of genres and settings. ' +
				'It is a toolkit game, with rules that you can adapt to your own settings and stories.',
		url: 'https://cortexrpg.com/',
		image: 'https://cortexrpg.com/wp-content/uploads/2020/07/cortex-prime-logo.png',
		rules: 'When you make a roll, you roll a number of dice equal to the relevant' +
				' trait or skill. You keep the highest two dice and add them together. ' +
				'If you roll a 1 on any die, you get a Plot Point. You can spend Plot ' +
				'Points to add extra dice to your roll, or to activate special abilities. ' +
				'You can also spend Plot Points to create [...story] details, or to introduce ' +
				'complications. The GM can also give you Plot Points when you roll a 1, ' +
				'or when you accept a complication. The GM can spend Plot Points to ' +
				'introduce complications, or to activate special abilities',
		diceDistribution: 'The dice are d4, d6, d8,  and d10 and d12. The dice are ' +
				'used to represent the character\'s traits and skills. The dice are ' +
				'rolled to determine the outcome of the character\'s actions.',
};

export const aboutLeverage = {
		title: 'Leverage',
		description: 'You know the following about the game: Leverage is a tabletop roleplaying game based on the television show of the same name. ' +
				'It is a game of heists and cons, where the players take on the roles of a team of criminals ' +
				'who work together to take down corrupt corporations, evil ceos, and  other powerful entities.',

}

export const generateBasicInfoForPrompt = () => {
		return `You know the following about ${baseCortexPrimeInfo.title} is a modular tabletop roleplaying game system. ` +
				`It enables you to play one game with a variety of genres and settings. ` +
				`It is a toolkit game, with rules that you can adapt to your own settings and stories. ` +
				`When you make a roll, you roll a number of dice equal to the relevant ` +
				`trait or skill. You keep the highest two dice and add them together. ` +
				`If you roll a 1 on any die, you get a Plot Point. You can spend Plot ` +
				`Points to add extra dice to your roll, or to activate special abilities. ` +
				`You can also spend Plot Points to create story details, or to introduce ` +
				`complications. The GM can also give you Plot Points when you roll a 1, ` +
				`or when you accept a complication. The GM can spend Plot Points to ` +
				`introduce complications, or to activate special abilities. ` +
				`The dice are d4, d6, d8,  and d10 and d12. The dice are ` +
				`used to represent the character's traits and skills. The dice are ` +
				`rolled to determine the outcome of the character's actions. `;
};
