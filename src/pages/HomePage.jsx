import { Link } from "react-router";
import styles from "../assets/styles/pages/homePage.module.scss";
import ButtonToggleMode from "../components/ButtonToogleMode";

export default function HomePage() {
	return (
		<div className={styles.homePage}>
			<ButtonToggleMode />
			<Link to={"/user/12"}>Go to the dashboard</Link>
		</div>
	);
}
