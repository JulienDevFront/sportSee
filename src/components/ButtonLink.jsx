import { NavLink } from "react-router";
import styles from "../assets/styles/components/buttonLink.module.scss";

export default function buttonLink({ path, text }) {

    return (
        <NavLink to={ path } className={ styles.buttonLink }>
            { text }
        </NavLink>
    );
};