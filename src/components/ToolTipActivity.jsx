import styles from "../assets/styles/components/toolTipActivity.module.scss";

export default function ToolTipActivity({ active, payload }) {
  if (!active || !payload || !payload.length) return null;

  return (
    <div className={styles.toolTipActivity}>
      <div>{payload[0].dataKey === "kilogram" && payload[0].value} kg</div>
      <div>{payload[1].dataKey === "calories" && payload[1].value} Kcal</div>
    </div>
  );
}
