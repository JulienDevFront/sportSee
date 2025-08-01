import styles from "../assets/styles/components/buttonLogo.module.scss";

export default function ButtonLogo({ logo, alt, text }) {

    return (
        <button className={ styles.buttonLogo }>
            <img src={ logo } alt={ alt } />
            { text }
        </button>
    );
};