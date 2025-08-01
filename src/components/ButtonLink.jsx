import styles from "../assets/styles/components/buttonLink.module.scss";

export default function buttonLink({ text }) {

    return (
        <button className={ styles.buttonLink }>{ text }</button>
    );
};