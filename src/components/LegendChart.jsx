import styles from "../assets/styles/components/legendChart.module.scss";

export default function LegendChart({ legend, unit, color }) {

    return (
        <div className={ styles.legendChart }>
            <div style={{ backgroundColor:  color }} aria-label="Graphic legend color indicator"></div>
            <p>
                <span>{ legend }</span>
                <span>({ unit })</span>
            </p>
        </div>
    )
}