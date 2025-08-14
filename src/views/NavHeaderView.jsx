import styles from "../assets/styles/views/navHeaderView.module.scss";
import iconSportSee from "../assets/icons/iconSportSee.svg";
import ButtonLogo from "../components/ButtonLogo.jsx";
import ButtonLink from "../components/ButtonLink.jsx";

export default function NavHeaderView() {

    const routes = ["Accueil", "Profil", "Réglage", "Communauté"];

    return (
        <nav className={ styles.navHeaderView}>
            <ButtonLogo path="#" img={ iconSportSee } alt="Back Home !" text="SportSee"/>
            { routes.map((item, index) => 
                <ButtonLink key={ index } path="#" text={ item } />) 
            }
        </nav>
    );
};