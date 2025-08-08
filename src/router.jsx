import "./assets/styles/index.css";
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
// - - -
import { getMainData, getUserAverageSession, getUserActivity, getUserPerformance } from "./services/getRouteData.js";
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

getMainData(12, '/__mocks__/USER_MAIN_DATA.json').then((data) => console.log("USER_MAIN_DATA :", data));
getUserAverageSession(12, '/__mocks__/USER_AVERAGE_SESSIONS.json').then((data) => console.log("USER_AVERAGE_SESSIONS :", data));
getUserActivity(12, '/__mocks__/USER_ACTIVITY.json').then((data) => console.log("USER_ACTIVITY :", data));
getUserPerformance(12, '/__mocks__/USER_PERFORMANCE.json').then((data) => console.log("USER_PERFORMANCE :", data));
