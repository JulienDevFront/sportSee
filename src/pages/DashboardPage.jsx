import styles from "../assets/styles/pages/dashboardPage.module.scss";
import { ApiContext } from "../context/ApiProvider.jsx";
import { useContext, useState, useEffect } from "react";
import UserAPI from "../services/UserAPI.js";
import { useParams } from "react-router";
import HeaderWelcomeView from "../views/HeaderWelcomeView.jsx";
import AsideNutritionView from "../views/AsideNutritionView.jsx";
import ChartActivityView from "../views/ChartActivityView.jsx";
import ChartAverageSessionsView from "../views/ChartAverageSessionsView.jsx";
import ChartPerformanceView from "../views/ChartPerformanceView.jsx";
import ChartScoreView from "../views/ChartScoreView.jsx";

export default function DashboardPage() {
	const { mode } = useContext(ApiContext);
	const { userId } = useParams();
	const [mainData, setMainData] = useState(null);
	const [activityData, setActivityData] = useState(null);
	const [sessionsData, setSessionsData] = useState(null);
	const [performanceData, setPerformanceData] = useState(null);

	useEffect(() => {
		if (!mode?.baseURL || !userId) return;
        const USER_API = new UserAPI(mode);
		USER_API.getMainData(userId)
			.then(setMainData)
			.catch((e) => console.log(e));
		USER_API.getUserActivity(userId)
			.then(setActivityData)
			.catch((e) => console.log(e));
		USER_API.getUserAverageSession(userId)
			.then(setSessionsData)
			.catch((e) => console.log(e));
		USER_API.getUserPerformance(userId)
			.then(setPerformanceData)
			.catch((e) => console.log(e));
	}, [mode, userId]);

	return (
		<div className={styles.dashboardPage}>
			{mainData ? (
				<>
					<HeaderWelcomeView name={mainData.userInfos.firstName} />
					<div>
						<div>
							<ChartActivityView activityData={activityData} />
							<div>
								<ChartAverageSessionsView
									sessionsData={sessionsData}
								/>
								<ChartPerformanceView
									performanceData={performanceData}
								/>
								<ChartScoreView mainData={mainData} />
							</div>
						</div>
						<AsideNutritionView unit={mainData.keyData} />
					</div>
				</>
			) : (
				<p>Chargement ...</p>
			)}
		</div>
	);
}
