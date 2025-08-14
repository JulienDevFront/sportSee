import { Outlet } from "react-router";
import styles from "../assets/styles/app/appContent.module.scss";
import HeaderNavView from "../views/HeaderNavView.jsx";
import AsideNavView from "../views/AsideNavView.jsx";

export default function AppContent() {
    
    return (
        <div className={ styles.appContent } >
            <HeaderNavView /> 
            <div>
                <AsideNavView />
                <Outlet />
            </div>  
        </div>
    );
};