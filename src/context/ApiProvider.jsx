import { createContext, useState } from "react";

export const ApiContext = createContext();

export const DATA_MODE = [
    { name: "HTTP", baseURL: "http://localhost:3000"}, 
    { name: "MOCK", baseURL: "http://localhost:5173"},
];

export const ApiProvider = ({ children }) => {
    const [mode, setMode] = useState(DATA_MODE.find( item => item.name === "MOCK"));
    
    const handleMode = (e) => {
        setMode( mode => mode.name === "MOCK" 
            ? DATA_MODE.find(i => i.name === "HTTP")
            : DATA_MODE.find(i => i.name === "MOCK")
        )
    }
    
    console.log("Load App with mode :", mode);

    return (
        <ApiContext.Provider value={{ mode, handleMode }}>
            { children }
        </ApiContext.Provider>
    )
};