import styles from "../assets/styles/views/chartAverageSessionsView.module.scss";

export default function ChartAverageSessionsView({ sessionsData }) {
    console.log("sessionsData :", sessionsData)
    
    return (
        <article className={ styles.chartAverageSessionsView }></article>
    );
};