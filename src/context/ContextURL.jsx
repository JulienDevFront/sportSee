import { createContext } from "react";
import { DATA_SOURCE, getBaseURL } from "../services/apiConfig.js";

export const ContextURL = createContext(getBaseURL(DATA_SOURCE.MOCK));