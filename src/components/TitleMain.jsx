import styles from "../assets/styles/components/titleMain.module.scss";

export default function TitleMain({ text, name }) {

    return (
        <h1 className={ styles.titleMain }>
            { text }
            <span>{ name }</span>
        </h1>
    );
};