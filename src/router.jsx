import "./assets/styles/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// - - -
import AppContentPage from "./pages/AppContentPage.jsx";
import HomePage from "./pages/HomePage.jsx";

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AppContentPage>
      <HomePage />
    </AppContentPage>
  </StrictMode>
);
