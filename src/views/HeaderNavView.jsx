import styles from "../assets/styles/views/headerNavView.module.scss";
import iconSportSee from "../assets/icons/iconSportSee.svg";
import ButtonLogo from "../components/ButtonLogo.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function HeaderNavView() {
	const routes = ["Accueil", "Profil", "Réglage", "Communauté"];
	
    return (
		<header className={styles.headerNavView}>
			<ButtonLogo
				path="#"
				img={iconSportSee}
				alt="Back Home !"
				text="SportSee"
			/>
			<nav>
				{routes.map((item, index) => (
					<ButtonLink key={index} path="#" text={item} />
				))}
			</nav>
		</header>
	);
}
