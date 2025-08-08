export const DATA_SOURCE = { 
    MOCK : "MOCK", 
    HTTP : "HTTP", 
};

export const getBaseURL = (SOURCE) => {
    if(SOURCE === "MOCK") return "";
    if(SOURCE === "HTTP") return "http://localhost:3000";
    console.error("the context is not valid, select HTTP or MOCK");
    return null;
};