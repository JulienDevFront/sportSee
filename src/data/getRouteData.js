export const getMainData = async (id, routes) => {
    const res = await fetch(routes);
    if(res.ok !== true) return null;
    const data = await res.json();
    return data.find((itt) => itt.id === id) || null
};

export const getUserAverageSession = (userId, data) => {};

export const getUserActivity = (userId, data) => {};

export const getUserPerformance = (userId, data) => {};