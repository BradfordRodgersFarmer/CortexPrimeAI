const randomizer = (attributes, diceValues, diceSelected) =>{
		const attributeValues = {};
		for (let i = 0; i < attributes.length; i++) {
				const attribute = attributes[i];
				const diceValue = diceValues[Math.floor(Math.random() * diceValues.length)];
				attributeValues[attribute] = diceValue;
				diceSelected[diceValue] += 1;
				if (diceSelected[diceValue] === 2) {
						diceValues.splice(diceValues.indexOf(diceValue), 1);
				}
		}
		return attributeValues;
}

export const randomizeAttributes = () => {
		const attributes = [
				'agility', 'alertness', 'intelligence', 'strength', 'vitality', 'willpower'
		];
		const diceValues = ['6', '8', '10'];
		const diceSelected = {
				6: 0,
				8: 0,
				10: 0
		}
		return randomizer(attributes, diceValues, diceSelected);
}

export const randomizeRoles = () => {
		const roles = ['grifter', 'hacker', 'hitter', 'mastermind', 'thief'];
		const diceValues = ['4', '6', '8', '10'];
		const diceSelected = {
				4: 0,
				6: 1,
				8: 1,
				10: 1
		}
		return randomizer(roles, diceValues, diceSelected);
}
