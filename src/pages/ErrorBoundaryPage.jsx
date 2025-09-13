import { Link, useRouteError } from "react-router";
import styles from "../assets/styles/pages/errorBoundaryPage.module.scss";

export default function ErrorBoundaryPage() {
	const error = useRouteError();
	return (
		<div className={styles.errorBoundaryPage}>
			<h1>{error.status || "Status unknown"}</h1>
			<p>
				{error.statusText ||
					error.message ||
					"An error of unknown type has occurred"}
			</p>
			<Link to="/">Back to home</Link>
		</div>
	);
}
