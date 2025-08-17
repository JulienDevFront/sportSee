import styles from "../assets/styles/components/titleChart.module.scss";

export default function TitleChart({ title }) {
    
    return (
        <h3 className={ styles.titleChart }>{ title }</h3>
    );
};