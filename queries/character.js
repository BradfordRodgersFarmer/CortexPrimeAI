const baseUrl = 'https://cortex-prime.bchaos-bchaos.workers.dev';
const baseHeader = {
    method: "POST",
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
};

export const createCharacter = async (npcjob, alignment, missionId) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ npcjob, alignment, missionId });
    const response = await fetch(`${baseUrl}/generateNpc`, headers);
    return await response.json();
}

export const createScene = async (location, missionId) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ location, missionId });
    const response = await fetch(`${baseUrl}/generateScene`, headers);
    return await response.json();
}

export const createEpisode = async (episode) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ basicInfo:episode });
    try{
        const response = await fetch(`${baseUrl}/generateEpisode`, headers);

        return await response.json();
    }catch (e) {
        console.error(e);
    }
}