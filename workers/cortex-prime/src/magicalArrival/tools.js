/// this is a list of tools for various user actions to help the ai with how to engage with the user
export const tools = [
	{
		type:"function",
		function: {
			name: "moving",
			description: " the player character wishes to move from one location to another ensure this should update the currect scent location",
			parameters: {
				type: "object",
				properties: {
					newLocation: {
						type: "string",
						description: "the desitnation the user wishes to go to",
					},
					currentLocation:{
						type: "string",
						description: "the starting destination the user is currently at",
					}
				},
				required: ["newLocation", "currentLocation"],
			},
		}
	},
	{
		type:"function",
		function: {
			name: "searching",
			description: "the player character wishes to search for an item to use",
			parameters: {
				type: "object",
				properties: {
					item: {
						type: "string",
						description: "the item the user wishes to search for",
					}
				},
				required: ["item"],
			},
		}
	},{
		type:"function",
		function: {
			name: "gathering",
			description: "the player character wishes to gather resources like herbs and minerals",
			parameters: {
				type: "object",
				properties: {
					resource: {
						type: "string",
						description: "the  resource the user wishes to find",
					}
				},
				required: ["resource"],
			},
		}
	}, {
		type: "function",
		function: {
			name: "talking",
			description: "the player character wishes engage in conversation with an NPC",
			parameters: {
				type: "object",
				properties: {
					npc: {
						type: "string",
						description: "the npc the user is talking to",
					}, feeling: {
						type: "string",
						description: "how the npc feels about this interaction",
					}
				},
				required: ["npc", "feeling"],
			}
		}
	},
	{
		type:"function",
		function: {
			name: "trading",
			description: "the player character wishes engage in trading with an NPC by giving them an item and recieveing one ",
			parameters: {
				type: "object",
				properties: {
					npc: {
						type: "string",
						description: "the npc the user is talking to",
					},feeling: {
						type: "string",
						description: "how the npc feels about this interaction",
					},itemGiven: {
						type: "string",
						description: "The item the player character is giving to the npc",
					},itemRecieved: {
						type: "string",
						description: "the item the player character is recieving from the npc",
					}
				},
				required: ["npc","feeling", "itemGiven", "itemRecieved"],
			},
		}
	},
	{
		type:"function",
		function: {
			name: "puzzling",
			description: "the player character wishes solve a puzzle that is presented to them ",
			parameters: {
				type: "object",
				properties: {
					puzzle: {
						type: "string",
						description: " the puzzle the user is working with ",
					},solution: {
						type: "string",
						description: "the solution to the puzzle ",
					}
				},
				required: ["puzzle","solution"],
			},
		}
	},
	{
		type:"function",
		function: {
			name: "crafting",
			description: "the player character wishes craft a new item",
			parameters: {
				type: "object",
				properties: {
					itemToMake: {
						type: "string",
						description: " the item the user wishes to make ",
					},materialsUsed: {
						type: "string",
						description: "the items used to make the item",
					}
				},
				required: ["itemToMake","materialsUsed"],
			},
		}
	},
	{
		type:"function",
		function: {
			name: "combat",
			description: "the player character wishes  fight an npc or monster",
			parameters: {
				type: "object",
				properties: {
					itemToMake: {
						type: "string",
						description: " the item the user wishes to make ",
					},materialsUsed: {
						type: "string",
						description: "the items used to make the item",
					}
				},
				required: ["itemToMake","materialsUsed"],
			},
		}
	},
	{
		type:"function",
		function: {
			name: "cooking",
			description: "the player character wishes to cook a meal using materials they have gathered",
			parameters: {
				type: "object",
				properties: {
					mealToMake: {
						type: "string",
						description: " the food the player character wishes to make ",
					},materialsUsed: {
						type: "string",
						description: "the items used to make the food",
					}
				},
				required: ["mealToMake","materialsUsed"],
			},
		}
	},

]
