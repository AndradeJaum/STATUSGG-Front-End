
const apiKey = "api_key=RGAPI-87ff91a8-6f3c-42c7-b6ff-7c074f1dc8c6"


export async function searchByName(nickname) {
    const response = await fetch(`https://br1.api.riotgames.com/lol/summoner/v4/summoners/by-name/${nickname}?${apiKey}`);
    const summoner = await response.json();

    return summoner
}

export async function getMatchsByUserId(id) {
    const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/by-puuid/${id}/ids?start=0&count=20&${apiKey}`);
    const matchs = await response.json();

    return matchs
}

export async function getMatch(id) {
    const response = await fetch(`https://americas.api.riotgames.com/lol/match/v5/matches/${id}?${apiKey}`);
    const match = await response.json();
    
    return match
}

export async function getRankedMatchs(id) {
    const response = await fetch(`https://br1.api.riotgames.com/lol/league/v4/entries/by-summoner/${id}?api_key=RGAPI-87ff91a8-6f3c-42c7-b6ff-7c074f1dc8c6`);
    const rankedMatchs = await response.json();

    return rankedMatchs
}
