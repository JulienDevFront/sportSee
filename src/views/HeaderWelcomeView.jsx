import styles from "../assets/styles/views/headerWelcomeView.module.scss";
import TitleWelcome from "../components/TitleWelcome";
import ButtonToggleMode from "../components/ButtonToogleMode.jsx";

export default function HeaderWelcomeView({ name }) {
	return (
		<header className={styles.headerWelcomeView}>
			<div>
				<TitleWelcome text="Bonjour" name={name} />
				<p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
			</div>
			<ButtonToggleMode />
		</header>
	);
}
