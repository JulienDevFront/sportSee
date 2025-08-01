import styles from "../assets/styles/layouts/navHeader.module.scss";
import logo from "../assets/icons/iconSportSee.svg";
import ButtonLogo from "../components/ButtonLogo.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function NavHeader() {

    const routes = ["Accueil", "Profil", "Réglage", "Communauté"];

    return (
        <nav className={ styles.navHeader}>
            <ButtonLogo logo={ logo } alt="SportSee logo" text="SportSee"/>
            { routes.map((item, index) => <ButtonLink key={ index } text={ item } />) }
        </nav>
    );
};