import styles from "../assets/styles/layouts/navHeader.module.scss";
import ButtonLogo from "../components/ButtonLogo.jsx";
import logo from "../assets/icons/iconSportSee.svg";

export default function NavHeader() {

    return (
        <nav className={ styles.navHeader}>
            <ButtonLogo logo={ logo } alt="SportSee logo" text="SportSee"/>
        </nav>
    )
}