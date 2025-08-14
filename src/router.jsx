import "./assets/styles/index.css";
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// - - -
import AppContent from "./app/AppContent.jsx";
import HomePage from "./pages/HomePage.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={ <AppContent /> }>
            <Route path="user/:userId" element={ <HomePage /> }/>
          </Route>
        </Routes>
      </BrowserRouter>
  </StrictMode>
);
