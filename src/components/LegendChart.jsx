import styles from "../assets/styles/components/legendChart.module.scss";

export default function LegendChart({ legend, puceColor }) {

    return (
        <div className={ styles.legendChart }>
            <div style={{ backgroundColor:  puceColor }} aria-label="Graphic legend color indicator"></div>
            <p>
                <span>{ legend }</span>
            </p>
        </div>
    );
};