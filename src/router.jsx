import "./assets/styles/index.css";
import { StrictMode } from 'react';
import ReactDOM from "react-dom/client";
import { BrowserRouter, Routes, Route } from "react-router";
// - - -
import AppContent from "./app/AppContent.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import { ApiProvider } from "./context/ApiProvider.jsx";

const root = document.getElementById("root");

ReactDOM.createRoot(root).render(
  <StrictMode>
      <ApiProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={ <AppContent /> }>
              <Route path="user/:userId" element={ <DashboardPage /> }/>
            </Route>
          </Routes>
        </BrowserRouter>
      </ApiProvider>
  </StrictMode>
);
