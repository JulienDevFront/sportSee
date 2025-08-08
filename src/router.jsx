import "./assets/styles/index.css";
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
import { ContextURL } from "./context/ContextURL.jsx";
// - - -
import AppContentPage from "./pages/AppContentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
    <ContextURL value={ ContextURL }>
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
