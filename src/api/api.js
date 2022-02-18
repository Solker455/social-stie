import axios from "axios";

export function getPvpStats(token, pvpLadder) {
    const url = `https://test.flcd.ru/api/documentation`;
    return axios.get(url)
}

export function getPveStats(token, fraction, raid) {
    const url = `https://test.flcd.ru/api/documentation`;
    return axios.get(url)
}