import styles from "../assets/styles/components/titleWelcome.module.scss";

export default function TitleWelcome({ text, name }) {

    return (
        <h1 className={ styles.titleWelcome }>
            { text }
            <span>{ name }</span>
        </h1>
    );
};