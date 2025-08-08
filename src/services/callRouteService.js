const callRouteService = async (route) => { 
    try {
        const res = await fetch(route);
        if(res.ok) console.log(`Call from "${route}" status : ${res.status}`);
        return await res.json();
    } catch(error) {
        console.error(`Call from "${route}" status : Error \n${error}`);
        return null;
    };
};