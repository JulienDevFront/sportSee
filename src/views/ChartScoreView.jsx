import styles from "../assets/styles/views/chartScoreView.module.scss";
import { PieChart, Pie, Cell, ResponsiveContainer } from "recharts";
import TitleChart from "../components/TitleChart";

export default function ChartScoreView({ mainData }) {
    const score = mainData?.todayScore ?? mainData?.score ?? 0;

    const data = [
        { name: "score", value: score },
        { name: "rest", value: 1 - score },
    ];

    return (
        <article className={styles.chartScoreView}>
            <div className={styles.chartScoreView__title}>
                <TitleChart title="Score" />
            </div>
            <div className={styles.chartScoreView__chart}>
                <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                        <Pie
                            data={data}
                            dataKey="value"
                            startAngle={90}
                            endAngle={450}
                            innerRadius="70%"
                            outerRadius="80%"
                            cornerRadius={10}
                        >
                            <Cell fill="#FF0000" />
                            <Cell fill="#ffffffff" />
                        </Pie>
                    </PieChart>
                </ResponsiveContainer>
            </div>
            <div className={styles.chartScoreView__score}>
                <p>{Math.round(score * 100)}%</p>
                <p>
                    <span>de votre</span><span> objectif</span></p>
            </div>
        </article>
    );
}
