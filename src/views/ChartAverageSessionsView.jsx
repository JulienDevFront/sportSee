import { LineChart, ResponsiveContainer, XAxis, YAxis, Line, Tooltip } from "recharts";
import styles from "../assets/styles/views/chartAverageSessionsView.module.scss";
import TitleChart from "../components/TitleChart";
import ToolTipSessions from "../components/ToolTipSessions";

export default function ChartAverageSessionsView({ sessionsData }) {
    
    const data = sessionsData?.sessions || [];
    const minMinute = 0;
    const maxMinute = Math.max(...data.map(item => item.sessionLength)) + 10;
    const dayFormat = ["", "L", "M", "M", "J", "V", "S", "D"];

    return (
        <article className={ styles.chartAverageSessionsView }>
            <header>
                <TitleChart title="Durée moyenne des sessions"/>
            </header>
            <div>
                <ResponsiveContainer width="100%" height="100%">
                    <LineChart data={ data }>
                        <XAxis 
                            dataKey="day" 
                            tickLine={false}
                            axisLine={false} 
                            tickFormatter={(day) => dayFormat[day]}
                            tick={{ fill: "#ffffff60", fontSize: 12 }}
                            padding={{left: 10, right: 10}}
                        />
                        <YAxis 
                            dataKey="sessionLength" 
                            domain={[minMinute, maxMinute]} 
                            hide
                        />
                        <Tooltip 
                            content={<ToolTipSessions />}
                        />
                        <Line 
                            type="monotone" 
                            dataKey="sessionLength" 
                            dot={false} 
                            activeDot={{ r: 4, fill: "#FFFFFF", stroke: "#ffffff60", strokeWidth: 4 }} 
                            strokeWidth="2" 
                            stroke="#ffffff60" />
                    </LineChart>
                </ResponsiveContainer>
            </div>
        </article>
    );
};