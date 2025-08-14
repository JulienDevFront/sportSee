import styles from "../assets/styles/pages/dashboardPage.module.scss";
import ButtonToggleMode from "../components/ButtonToogleMode.jsx";
import { ApiContext } from "../context/ApiProvider.jsx";
import { useContext, useState, useEffect } from "react";
import { getMainData } from "../services/userData.js";
import { useParams } from "react-router";

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
            <ButtonToggleMode />
            <pre>{JSON.stringify(mainData, null, 2)}</pre>
        </div>
    );
};