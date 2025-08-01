import styles from "../assets/styles/components/graphLegend.module.scss";

export default function GraphLegend({ legend, unit, color }) {

    return (
        <div className={ styles.graphLegend }>
            <div style={{ backgroundColor:  color }} aria-label="Graphic legend color indicator"></div>
            <p>
                <span>{ legend }</span>
                <span>({ unit })</span>
            </p>
        </div>
    )
}