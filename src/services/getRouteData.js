import { callRouteService } from "./callRouteService.js";

export const getMainData = async (id, route) => {
    const data = await callRouteService(route);
    return data.find((itt) => itt.id === id) || null
};

export const getUserAverageSession = async (userId, route) => {
    const data = await callRouteService(route);
    return data.find((itt) => itt.userId === userId) || null
};

export const getUserActivity = async (userId, route) => {
    const data = await callRouteService(route);
    return data.find((itt) => itt.userId === userId) || null
};

export const getUserPerformance = async (userId, route) => {
    const data = await callRouteService(route);
    return data.find((itt) => itt.userId === userId) || null
};