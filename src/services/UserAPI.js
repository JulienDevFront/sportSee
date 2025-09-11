import { fetchJson } from "./fetchJson.js";

export default class UserAPI {
	/** in the provider of context
	 * export const DATA_MODE = [
	 *		{ name: "HTTP", baseURL: "http://localhost:3000"}, 
	 *		{ name: "MOCK", baseURL: "http://localhost:5173"},
	 * ];
	 */
	constructor(mode) {
		this.mode = mode;
	}

	async getMainData(userId) {
		if (this.mode.name === "MOCK") {
			const reponse = await fetchJson(`${this.mode.baseURL}/__mocks__/USER_MAIN_DATA.json`);
			return reponse.find((user) => user.id === Number(userId)) || null;
		}
		if (this.mode.name === "HTTP") {
			const reponse = await fetchJson(`${this.mode.baseURL}/user/${userId}`);
			return reponse.data;
		}
	}

	async getUserAverageSession(userId) {
		if (this.mode.name === "MOCK") {
			const reponse = await fetchJson(`${this.mode.baseURL}/__mocks__/USER_AVERAGE_SESSIONS.json`);
			return reponse.find((user) => user.userId === Number(userId)) || null
		}
		if (this.mode.name === "HTTP") {
			const reponse = await fetchJson(`${this.mode.baseURL}/user/${userId}/average-sessions`);
			return reponse.data;
		}
	}

	async getUserActivity(userId) {
		if (this.mode.name === "MOCK") {
			const reponse = await fetchJson(`${this.mode.baseURL}/__mocks__/USER_ACTIVITY.json`);
			return reponse.find((user) => user.userId === Number(userId)) || null
		}
		if (this.mode.name === "HTTP") {
			const reponse = await fetchJson(`${this.mode.baseURL}/user/${userId}/activity`);
			return reponse.data;
		}
	}

	async getUserPerformance(userId) {
		if (this.mode.name === "MOCK") {
			const reponse = await fetchJson(`${this.mode.baseURL}/__mocks__/USER_PERFORMANCE.json`);
			return reponse.find((user) => user.userId === Number(userId)) || null
		}
		if (this.mode.name === "HTTP") {
			const reponse = await fetchJson(`${this.mode.baseURL}/user/${userId}/performance`);
			return reponse.data;
		}
	}
}
