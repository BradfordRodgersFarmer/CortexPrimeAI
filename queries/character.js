const baseUrl = 'https://cortex-prime.bchaos-bchaos.workers.dev';
const baseHeader = {
    method: "POST",
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
};

export const createCharacter = async (npcjob, alignment) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ npcjob, alignment });
    const response = await fetch(`${baseUrl}/generateNpc`, headers);
    return response.json();
}

export const createScene = async (location) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ location });
    const response = await fetch(`${baseUrl}/generateScene`, headers);
    return response.json();
}

export const createEpisode = async (episode) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ episode });
    const response = await fetch(`${baseUrl}/generateEpisode`, headers);
    return response.json();
}