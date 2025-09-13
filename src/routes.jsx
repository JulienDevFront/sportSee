// _libs
import { createBrowserRouter } from "react-router";
// _pages_component
import AppPage from "./pages/AppPage.jsx";
import HomePage from "./pages/HomePage.jsx";
import DashboardPage from "./pages/DashboardPage.jsx";
import ErrorBoundaryPage from "./pages/ErrorBoundaryPage.jsx";
import ErrorServerPage from "./pages/ErrorServerPage.jsx"

export const routes = createBrowserRouter([
	{
		path: "/",
		Component: AppPage,
		ErrorBoundary: ErrorBoundaryPage,
		children: [
			{ index: true, Component: HomePage },
			{ path: "/error/500", Component: ErrorServerPage},
			{ path: "/user/:userId", Component: DashboardPage },
		],
	},
]);