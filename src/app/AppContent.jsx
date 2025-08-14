import { Outlet } from "react-router";
import styles from "../assets/styles/app/appContent.module.scss";
import NavHeaderView from "../views/NavHeaderView.jsx";
import AsideNavView from "../views/AsideNavView.jsx";
import NavAsideView from "../views/NavAsideView.jsx";
import ButtonActivity from "../components/ButtonActivity.jsx";
import FooterAsideView from "../views/FooterAsideView.jsx";
import iconBodybuilding from "../assets/icons/iconBodybuilding.svg";
import iconSwimming from "../assets/icons/iconSwimming.svg";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconBiking from "../assets/icons/iconBiking.svg";

export default function AppContent() {

    const activityIcons = [iconBodybuilding, iconSwimming, iconYoga, iconBiking];
    
    return (
        <div className={ styles.appContent } >
            <NavHeaderView /> 
            <div>
                <AsideNavView>
                    <NavAsideView>
                        { activityIcons.map((item, index) => <ButtonActivity key={index} img={item} alt="Activity icon" /> )}
                    </NavAsideView>
                    <FooterAsideView text="Copiryght, SportSee 2020" />
                </AsideNavView>
                <Outlet />
            </div>  
        </div>
    );
};