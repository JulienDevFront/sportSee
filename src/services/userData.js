import { fetchJson } from "./fetchJson.js";

export const getMainData = async (baseURL, userId) => {
    return fetchJson(`${baseURL}/user/${userId}`)
};

export const getUserAverageSession = async (baseURL, userId) => {
    return fetchJson(`${baseURL}/user/${userId}/average-sessions`)
};

export const getUserActivity = async (baseURL, userId) => {
    return fetchJson(`${baseURL}/user/${userId}/activity`)
};

export const getUserPerformance = async (baseURL, userId) => {
    return fetchJson(`${baseURL}/user/${userId}/performance`)
};