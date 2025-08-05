import styles from "../assets/styles/pages/appContentPage.module.scss";
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
import AsideNavLayout from "../layouts/AsideNavLayout.jsx";
import NavAsideLayout from "../layouts/NavAsideLayout.jsx";
import ButtonActivity from "../components/ButtonActivity.jsx";
import FooterAsideLayout from "../layouts/FooterAsideLayout.jsx";
import iconBodybuilding from "../assets/icons/iconBodybuilding.svg";
import iconSwimming from "../assets/icons/iconSwimming.svg";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconBiking from "../assets/icons/iconBiking.svg";

export default function AppContentPage({ children }) {

    const activityIcons = [iconBodybuilding, iconSwimming, iconYoga, iconBiking];
    
    return (
        <div className={ styles.appContentPage } >
            <NavHeaderLayout /> 
            <div className={ styles.appContentPage__content }>
                <AsideNavLayout>
                    <NavAsideLayout>
                        { activityIcons.map((item, index) => <ButtonActivity key={index} img={item} alt="Activity icon" /> )}
                    </NavAsideLayout>
                    <FooterAsideLayout text="Copiryght, SportSee 2020" />
                </AsideNavLayout>
                { children }
            </div>  
        </div>
    );
};