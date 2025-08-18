import styles from "../assets/styles/components/toolTipSessions.module.scss";

export default function ToolTipSessions({ active, payload }) {
    if (!active || !payload || !payload.length) return null;

    return (
        <div className={styles.toolTipSessions}>
              <div>{payload[0].dataKey === "sessionLength" && payload[0].value} min</div>
        </div>
    );
};