const baseUrl = 'https://cortex-prime.bchaos-bchaos.workers.dev';
const baseHeader = {
    method: "POST",
    headers: {
        "content-type": "application/json;charset=UTF-8",
    },
};

export const initalizeStory = async (playerName, bookTitle) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ playerName, bookTitle });
    const response = await fetch(`${baseUrl}/magicalArrivalGenerateScene`, headers);
    return await response.json();
}

export const takeAction = async (action, missionId, cardPulled) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ action, missionId, cardPulled });
    const response = await fetch(`${baseUrl}/magicalArrivalGenerateAction`, headers);
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