import styles from "../assets/styles/views/chartPerformanceView.module.scss";
import {
	RadarChart,
	Radar,
	PolarGrid,
	PolarAngleAxis,
	ResponsiveContainer,
} from "recharts";

export default function ChartPerformanceView({ performanceData }) {
	const data = performanceData?.data || [];
	const kind = performanceData?.kind || {};
	const formattedData = data.map((item) => ({
		...item,
		kind: kind[item.kind],
	}));

	return formattedData.length ? (
		<div className={styles.chartPerformanceView}>
			<ResponsiveContainer width="100%" height="100%">
				<RadarChart
					data={formattedData}
					outerRadius="50%"
					margin={{ top: 10, right: 10, left: 10, bottom: 10 }}
				>
					<PolarGrid radialLines={false} />
					<PolarAngleAxis
						dataKey="kind"
						tick={({ payload, x, y, textAnchor }) => {
							const isTop = y < 100;
							return (
								<text
									x={x}
									y={isTop ? y : y + 12}
									textAnchor={textAnchor}
									fill="#FFFFFF"
									fontWeight={500}
									fontSize={10}
								>
									{payload.value}
								</text>
							);
						}}
					/>
					<Radar dataKey="value" fill="#FF0101" fillOpacity={0.6} />
				</RadarChart>
			</ResponsiveContainer>
		</div>
	) : (
		<p>Chargement...</p>
	);
}
