import "./assets/styles/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// - - -
import { getMainData } from "./service/getRouteData.js";
// import USER_MAIN_DATA from "./__mocks__/USER_MAIN_DATA.json";
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

getMainData(12, '/__mocks__/USER_MAIN_DATA.json').then((data) => console.log(data));