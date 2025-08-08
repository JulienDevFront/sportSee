export const routes = (context) => {
    if(context === "MOCK") return "";
    if(context === "HTTP") return "http://localhost:3000";
    if(context !== "MOCK" || context !== "HTTP") return console.error("the context is not valid, select HTTP or MOCK");
    return null;
};