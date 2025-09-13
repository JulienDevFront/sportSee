import "./assets/styles/index.css";
import { StrictMode } from "react";
import ReactDOM from "react-dom/client";
import { RouterProvider } from "react-router";
// - - -
import { ApiProvider } from "./context/ApiProvider.jsx";
import { routes } from "./routes.jsx";

const root = document.getElementById("root");
ReactDOM.createRoot(root).render(
	<StrictMode>
		<ApiProvider>
			<RouterProvider router={routes} />
		</ApiProvider>
	</StrictMode>
);
