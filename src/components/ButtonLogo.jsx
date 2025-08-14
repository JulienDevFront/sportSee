import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonLogo.module.scss";

export default function ButtonLogo({ path, img, alt, text }) {

    return (
        <NavLink to={ path } className={ styles.buttonLogo }>
            <img src={ img } alt={ alt } />
            { text }
        </NavLink>
    );
};