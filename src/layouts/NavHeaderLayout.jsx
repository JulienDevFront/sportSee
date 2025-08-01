import styles from "../assets/styles/layouts/navHeaderLayout.module.scss";
import logo from "../assets/icons/iconSportSee.svg";
import ButtonLogo from "../components/ButtonLogo.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function NavHeaderLayout() {

    const routes = ["Accueil", "Profil", "Réglage", "Communauté"];

    return (
        <nav className={ styles.navHeaderLayout}>
            <ButtonLogo logo={ logo } alt="SportSee logo" text="SportSee"/>
            { routes.map((item, index) => <ButtonLink key={ index } text={ item } />) }
        </nav>
    );
};