import { Outlet } from "react-router";
import styles from "../assets/styles/pages/appPage.module.scss";
import HeaderNavView from "../views/HeaderNavView.jsx";
import AsideNavView from "../views/AsideNavView.jsx";

export default function AppPage() {
    return (
        <div className={ styles.appPage } >
            <HeaderNavView /> 
            <div>
                <AsideNavView />
                <Outlet />
            </div>  
        </div>
    );
};