import styles from "../assets/styles/components/textMain.module.scss";

export default function TextMain({ text }) {
    
    return (
        <p className={ styles.textMain }>{ text }</p>
    );
};