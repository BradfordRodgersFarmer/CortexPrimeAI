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

export const findStory = async (missionId) => {
    const headers = baseHeader
    headers.body = JSON.stringify({ missionId });
    try{
        const response = await fetch(`${baseUrl}/magicalArrivalFindStory`, headers);

        return await response.json();
    }catch (e) {
        console.error(e);
    }
}