import styles from "../assets/styles/pages/dashboardPage.module.scss";
import { ApiContext } from "../context/ApiProvider.jsx";
import { useContext, useState, useEffect } from "react";
import { getMainData, getUserActivity } from "../services/userData.js";
import { useParams } from "react-router";

import ButtonToggleMode from "../components/ButtonToogleMode.jsx";
import HeaderWelcomeView from "../views/HeaderWelcomeView.jsx";
import AsideNutritionView from "../views/AsideNutritionView.jsx";
import ChartActivityView from "../views/ChartActivityView.jsx";

export default function DashboardPage() {
    const { mode } = useContext(ApiContext);
    const { userId } = useParams();
    const [mainData, setMainData] = useState(null);
    const [activityData, setActivityData] = useState(null);

    useEffect(() => {
        if (!mode?.baseURL || !userId) return;
        getMainData(mode, userId).then(setMainData);
        getUserActivity(mode, userId).then(setActivityData);
    }, [mode, userId]);

    return (
        <div className={ styles.dashboardPage } >
            { mainData
                ? ( 
                    <>
                        <HeaderWelcomeView name={ mainData.userInfos.firstName }/>
                        <div>
                            <ChartActivityView activityData={ activityData }/>
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