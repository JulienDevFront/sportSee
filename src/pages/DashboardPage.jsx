import styles from "../assets/styles/pages/dashboardPage.module.scss";
import { ApiContext } from "../context/ApiProvider.jsx";
import { useContext, useState, useEffect } from "react";
import { getMainData, getUserActivity, getUserAverageSession, getUserPerformance } from "../services/userData.js";
import { useParams } from "react-router";

import ButtonToggleMode from "../components/ButtonToogleMode.jsx";
import HeaderWelcomeView from "../views/HeaderWelcomeView.jsx";
import AsideNutritionView from "../views/AsideNutritionView.jsx";
import ChartActivityView from "../views/ChartActivityView.jsx";
import ChartAverageSessionsView from "../views/ChartAverageSessionsView.jsx";
import ChartPerformanceView from "../views/ChatPerformanceView.jsx";
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
        getMainData(mode, userId).then(setMainData);
        getUserActivity(mode, userId).then(setActivityData);
        getUserAverageSession(mode, userId).then(setSessionsData);
        getUserPerformance(mode, userId).then(setPerformanceData);
    }, [mode, userId]);

    return (
        <div className={ styles.dashboardPage } >
            { mainData
                ? ( 
                    <>
                        <HeaderWelcomeView name={ mainData.userInfos.firstName }/>
                        <div>
                            <div>
                                <ChartActivityView activityData={ activityData }/>
                                <div>
                                    <ChartAverageSessionsView sessionsData={ sessionsData }/>
                                    <ChartPerformanceView performanceData={ performanceData }/>
                                    <ChartScoreView mainData={ mainData } />
                                </div>
                            </div>
                            <AsideNutritionView unit={ mainData.keyData }/>
                        </div>
                    </>
                )
                : <p>Chargement ...</p>
            }
            {/* <ButtonToggleMode />
            <pre>{JSON.stringify(mainData, null, 2)}</pre> */}
        </div>
    );
};