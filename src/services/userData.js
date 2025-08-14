import { fetchJson } from "./fetchJson.js";

export const getMainData = async (mode, userId) => {
  if (mode.name === "MOCK") {
    const data = await fetchJson(`${mode.baseURL}/__mocks__/USER_MAIN_DATA.json`);
    return data.find(user => user.id === Number(userId)) || null;
  };
  if (mode.name === "HTTP") return fetchJson(`${mode.baseURL}/user/${userId}`);
};

export const getUserAverageSession = async (mode, userId) => {
  if (mode.name === "MOCK") {
    const data = await fetchJson(`${mode.baseURL}/__mocks__/USER_AVERAGE_SESSIONS.json`);
    return data.find(user => user.userId === Number(userId)) || null;
  };
  if (mode.name === "HTTP") return fetchJson(`${baseURL}/user/${userId}/average-sessions`);
};

export const getUserActivity = async (mode, userId) => {
  if (mode.name === "MOCK") {
    const data = await fetchJson(`${mode.baseURL}/__mocks__/USER_ACTIVITY.json`);
    return data.find(user => user.userId === Number(userId)) || null;
  };
  if (mode.name === "HTTP") return fetchJson(`${baseURL}/user/${userId}/activity`);
};

export const getUserPerformance = async (mode, userId) => {
  if (mode.name === "MOCK") {
    const data = await fetchJson(`${mode.baseURL}/__mocks__/USER_PERFORMANCE.json`);
    return data.find(user => user.userId === Number(userId)) || null;
  };
  if (mode.name === "HTTP") return fetchJson(`${baseURL}/user/${userId}/performance`);
};