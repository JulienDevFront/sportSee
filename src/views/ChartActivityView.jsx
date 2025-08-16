import styles from "../assets/styles/views/graphActivityView.module.scss";
import TitleChart from "../components/TitleChart.jsx";
import ToolTipActivity from "../components/ToolTipActivity.jsx";
import { ResponsiveContainer, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip } from "recharts";

export default function ChartActivityView({ activityData }) {
    const data = activityData?.sessions || [];
    
    const min = Math.min(...data.map( item => item.kilogram)) - 10;
    const max = Math.max(...data.map( item => item.kilogram)) + 10;
    const mid = Math.round((min + max) / 2);
    
    console.log("Activity data :", activityData);

    return data.length 
        ? ( <article className={styles.graphActivityView}>
                <TitleChart title="Activité quotidienne" />
                <div>
                    <ResponsiveContainer width="100%" height="100%" >
                        <BarChart data={data} barGap={16} barSize={8}>
                            <CartesianGrid 
                                strokeDasharray="3 3" 
                                vertical={false} 
                                horizontalPoints={["16", "46%"]}
                            />
                            <XAxis
                                dataKey="day"
                                tickFormatter={(d) => new Date(d).getDate()}
                                tickLine={false}
                                axisLine={true}
                            />
                            <YAxis
                                yAxisId="kg"
                                type="number"
                                orientation="right"
                                tickLine={false}
                                axisLine={false}
                                allowDecimals={false}
                                domain={[min, max]}
                                ticks={[min, mid, max]}
                                padding={{top: 10}}
                            />
                            <YAxis yAxisId="kcal" hide />
                            <Bar 
                                yAxisId="kg" 
                                dataKey="kilogram" 
                                fill="#282D30" 
                                radius={[4, 4, 0, 0]} 
                            />
                            <Bar 
                                yAxisId="kcal" 
                                dataKey="calories" 
                                fill="#E60000" 
                                radius={[4, 4, 0, 0]} 
                            />
                            <Tooltip
                                content={<ToolTipActivity />}
                                cursor={{ fill: "rgba(0,0,0,0.1)" }}
                                wrapperStyle={{ background: "transparent", border: "none", boxShadow: "none" }}
                            />
                        </BarChart>
                    </ResponsiveContainer>
                </div>
            </article> ) 
        : ( <p>Chargement ... </p>);
    
}
