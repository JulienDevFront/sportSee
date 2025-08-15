import styles from "../assets/styles/pages/dashboardPage.module.scss";
import { ApiContext } from "../context/ApiProvider.jsx";
import { useContext, useState, useEffect } from "react";
import { getMainData } from "../services/userData.js";
import { useParams } from "react-router";

import ButtonToggleMode from "../components/ButtonToogleMode.jsx";
import HeaderWelcomeView from "../views/HeaderWelcomeView.jsx";

export default function DashboardPage() {
    const { mode } = useContext(ApiContext);
    const { userId } = useParams();
    const [mainData, setMainData] = useState(null);

  useEffect(() => {
      if (!mode?.baseURL || !userId) return;
      getMainData(mode, userId).then(setMainData);
  }, [mode, userId]);

    return (
        <div className={ styles.dashboardPage } >
            { mainData 
                ? <HeaderWelcomeView name={ mainData.userInfos.firstName }/>
                : <p>Chargement ...</p>
            }
            {/* <ButtonToggleMode /> */}
            {/* <pre>{JSON.stringify(mainData, null, 2)}</pre> */}
        </div>
    );
};