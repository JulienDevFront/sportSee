import styles from "../assets/styles/pages/homePage.module.scss";
// header
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AsideLayout from "../layouts/AsideLayout.jsx";
import NavAsideLayout from "../layouts/NavAsideLayout.jsx";
import FooterAsideLayout from "../layouts/FooterAsideLayout.jsx";
import ButtonActivity from "../components/ButtonActivity.jsx";
import HeaderWelcomeLayout from "../layouts/HeaderWelcomeLayout.jsx";
// ---
import iconBodybuilding from "../assets/icons/iconBodybuilding.svg";
import iconSwimming from "../assets/icons/iconSwimming.svg";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconBiking from "../assets/icons/iconBiking.svg";





export default function HomePage() {

    const activityIcons = [iconBodybuilding, iconSwimming, iconYoga, iconBiking];

    return (
        <div className={ styles.homePage } >
            <NavHeaderLayout />    
            <MainLayout>
                <AsideLayout>
                    <NavAsideLayout>
                        { activityIcons.map((item, index) => <ButtonActivity key={index} img={item} alt="Activity icon" /> )}
                    </NavAsideLayout>
                    <FooterAsideLayout text="Copiryght, SportSee 2020" />
                </AsideLayout>
                <HeaderWelcomeLayout />
            </MainLayout>
        </div>
    );
};