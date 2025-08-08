import "./assets/styles/index.css";
import { createContext, StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { DATA_SOURCE, getBaseURL } from "./services/apiConfig.js";
// - - -
import AppContentPage from "./pages/AppContentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = createContext(getBaseURL(DATA_SOURCE.MOCK));
console.log(root);

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContentPage>
      <HomePage />
    </AppContentPage>
  </StrictMode>
);
