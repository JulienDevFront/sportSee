import { Link } from "react-router";
import ButtonToggleMode from "../components/ButtonToogleMode";
import styles from "../assets/styles/pages/errorServerPage.module.scss";

export default function ErrorServerPage() {
	return (
		<div className={styles.errorServerPage}>
			<div>
				<h2>Error 500</h2>
				<p>
					server error, no data transmitted, please{" "}
					<strong>change mode</strong> and press the{" "}
					<strong>refresh data</strong> link.
				</p>
			</div>
			<div>
				<ButtonToggleMode />
				<Link to={"/user/12"}>refresh data</Link>
			</div>
		</div>
	);
}
