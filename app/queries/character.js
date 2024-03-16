// the function that hits the https://cortex-prime.bchaos-bchaos.workers.dev/generateNpc endpoint with the npcjob and alignment in the body,
// will get a name of the npc as a response` }
//

const baseUrl = 'https://cortex-prime.bchaos-bchaos.workers.dev';
export const createCharacter = async (npcjob, alignment) => {
    const response = await fetch(`${baseUrl}/generateNpc`, {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ npcjob, alignment })
    });
    return response.json();
}

export const createScene = async (location) => {
    const response = await fetch(`${baseUrl}/generateScene`, {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ location })
    });
    return response.json();
}

export const createEpisode = async (episode) => {
    const response = await fetch(`${baseUrl}/generateEpisode`, {
        method: 'POST',
        headers: {
            Accept: 'application.json',
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ episode })
    });
    return response.json();
}