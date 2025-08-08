import "./assets/styles/index.css";
import { StrictMode, createContext } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { DATA_SOURCE, getBaseURL } from "./services/apiConfig.js";
// - - -
import AppContentPage from "./pages/AppContentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = document.getElementById("root");
const ContextURL = createContext(getBaseURL(DATA_SOURCE.MOCK));

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ContextURL value={ getBaseURL(DATA_SOURCE.MOCK) }>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<AppContentPage />}>
            <Route path="user/:userId" element={<HomePage />} />
            <Route path="user/:userId/activity" element={<HomePage />} />
            <Route path="user/:userId/average-sessions" element={<HomePage />} />
            <Route path="user/:userId/performance" element={<HomePage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ContextURL>
  </StrictMode>
);
