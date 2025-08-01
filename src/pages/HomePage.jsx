import styles from "../assets/styles/pages/homePage.module.scss";
// header
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
// main
import MainLayout from "../layouts/MainLayout.jsx";
    // aside in main
import AsideLayout from "../layouts/AsideLayout.jsx";
import NavAsideLayout from "../layouts/NavAsideLayout.jsx";
import FooterAsideLayout from "../layouts/FooterAsideLayout.jsx";
import ButtonActivity from "../components/ButtonActivity.jsx";
    // header in main
import HeaderWelcomeLayout from "../layouts/HeaderWelcomeLayout.jsx";
import TitleMain from "../components/TitleMain.jsx";
import TextMain from "../components/TextMain.jsx";
import SectionMainGraph from "../layouts/SectionMainGraph.jsx";
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
                <HeaderWelcomeLayout>
                    <TitleMain text="Bonjour" name="Thomas"/>
                    <TextMain text="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
                </HeaderWelcomeLayout>
                <SectionMainGraph></SectionMainGraph>
            </MainLayout>
        </div>
    );
};