import styles from "../assets/styles/views/chartPerformanceView.module.scss";
import { RadarChart, Radar, PolarGrid, PolarAngleAxis, PolarRadiusAxis, ResponsiveContainer } from "recharts";

export default function ChartPerformanceView({ performanceData }) {
    
    const data = performanceData?.data || [];
    const kind = performanceData?.kind || {};
    const formattedData = data.map(item => ({
        ...item,
        kind: kind[item.kind],
    }));

    return formattedData.length 
        ? ( <div className={styles.chartPerformanceView}>
                <ResponsiveContainer width="100%" height="100%">
                    <RadarChart data={formattedData} outerRadius="70%">
                        <PolarGrid radialLines={false} />
                        <PolarAngleAxis
                            dataKey="kind"
                            tick={({ payload, x, y, textAnchor }) => {
                                const isTop = y < 100;
                                return (
                                    <text
                                        x={x}
                                        y={isTop ? y : y + 8} 
                                        textAnchor={textAnchor}
                                        fill="#FFFFFF"
                                        fontSize={12}
                                    >
                                        {payload.value}
                                    </text>
                                );
                            }}
                            />
                        <PolarRadiusAxis tick={false} axisLine={false} />
                        <Radar
                            dataKey="value"
                            fill="#FF0101"
                            fillOpacity={0.6}
                        />
                    </RadarChart>
                </ResponsiveContainer>
            </div>) 
        : (<p>Chargement...</p>)
};
