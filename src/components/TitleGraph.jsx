import styles from "../assets/styles/components/titleGraph.module.scss";

export default function TitleGraph({ title }) {

    return (
        <h3 className={ styles.titleGraph }>{ title }</h3>
    );
};