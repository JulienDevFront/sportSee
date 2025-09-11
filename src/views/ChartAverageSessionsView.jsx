import {
	LineChart,
	ResponsiveContainer,
	XAxis,
	YAxis,
	Line,
	Tooltip,
	Text,
} from "recharts";
import styles from "../assets/styles/views/chartAverageSessionsView.module.scss";
import TitleChart from "../components/TitleChart";
import ToolTipSessions from "../components/ToolTipSessions";

export default function ChartAverageSessionsView({ sessionsData }) {
	const data = sessionsData?.sessions || [];
	const minMinute = 0;
	const maxMinute = Math.max(...data.map((item) => item.sessionLength)) + 10;
	const dayFormat = ["", "L", "M", "M", "J", "V", "S", "D"];

	function CustomTooltip({ active, payload }) {
		if (!active || !payload?.length) return null;
		const value = payload[0].value;
		return (
			<div
				style={{
					background: "#ffffff",
					padding: "10px 14px",
					borderRadius: 6,
					boxShadow: "0 4px 12px rgba(0,0,0,.15)",
					fontWeight: 400,
					fontSize: 10,
				}}
			>
				{value} min
			</div>
		);
	}

	function CustomCursor({ points, width, height }) {
		if (!points?.length) return null;
		const x = points[0].x;
		return (
			<rect
				x={x}
				y={0}
				width={Math.max(0, width - x + 10)}
				height={height + 40}
				fill="rgba(0,0,0,0.15)"
			/>
		);
	}

	return (
		<article className={styles.chartAverageSessionsView}>
			<div>
				<ResponsiveContainer width="100%" height="100%">
					<LineChart data={data}>
						<Text
							x={20}
							y={24}
							textAnchor="start"
							dominantBaseline="central"
							fontSize={14}
							fill="rgba(255,255,255,0.8)"
						>
							Durée moyenne
						</Text>
						<Text
							x={20}
							y={44}
							textAnchor="start"
							dominantBaseline="central"
							fontSize={14}
							fill="rgba(255,255,255,0.8)"
						>
							des sessions
						</Text>
						<XAxis
							dataKey="day"
							tickLine={false}
							axisLine={false}
							tickFormatter={(day) => dayFormat[day]}
							tick={{
								fill: "rgba(255,255,255,0.8)",
								fontSize: 12,
							}}
							padding={{ left: 10, right: 10 }}
						/>
						<YAxis
							dataKey="sessionLength"
							domain={[minMinute, maxMinute]}
							hide
						/>
						<Tooltip
							content={<CustomTooltip />}
							cursor={<CustomCursor />}
						/>
						<Line
							type="monotone"
							dataKey="sessionLength"
							dot={false}
							activeDot={{
								r: 4,
								fill: "rgba(255,255,255,0.8)",
								stroke: "rgba(255,255,255,0.8)",
								strokeWidth: 4,
							}}
							strokeWidth="2"
							stroke="rgba(255,255,255,0.8)"
						/>
					</LineChart>
				</ResponsiveContainer>
			</div>
		</article>
	);
}
