export const fetchJson = async (route) => {
	try {
		const res = await fetch(route);
		if (!res.ok) return null;
		return await res.json();
	} catch (error) {
		console.error(`Call from "${route}" status : Error \n${error}`);
		return null;
	} finally {
		console.log(`Promise ${route} done !`);
	}
};
