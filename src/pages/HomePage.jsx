import styles from "../assets/styles/pages/homePage.module.scss";
// header
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
// dashboard container
import DashboardContainerLayout from "../layouts/DashboardContainerLayout.jsx";
    // aside nav
    import AsideNavLayout from "../layouts/AsideNavLayout.jsx";
    import NavAsideLayout from "../layouts/NavAsideLayout.jsx";
    import ButtonActivity from "../components/ButtonActivity.jsx";
    import FooterAsideLayout from "../layouts/FooterAsideLayout.jsx";
// main
import MainLayout from "../layouts/MainLayout.jsx";

    // header in main
import HeaderWelcomeLayout from "../layouts/HeaderWelcomeLayout.jsx";
import TitleMain from "../components/TitleMain.jsx";
import TextMain from "../components/TextMain.jsx";
import SectionMainGraph from "../layouts/SectionMainGraph.jsx";
import TitleGraph from "../components/TitleGraph.jsx";
import GraphLegend from "../components/GraphLegend.jsx";
import AsideNutritionLayout from "../layouts/AsideNutritionLayout.jsx";
// ---
import iconBodybuilding from "../assets/icons/iconBodybuilding.svg";
import iconSwimming from "../assets/icons/iconSwimming.svg";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconBiking from "../assets/icons/iconBiking.svg";
import iconCalories from "../assets/icons/iconCalories.svg";
import iconProtein from "../assets/icons/iconProtein.svg";
import iconCarbs from "../assets/icons/iconCarbs.svg";
import iconFat from "../assets/icons/iconFat.svg";
import NutritionLegend from "../components/NutritionLegend.jsx";
import SectionSecondaryGraph from "../layouts/SectionSecondaryGraph.jsx";
import MainContentView from "../layouts/MainContentView.jsx";






export default function HomePage() {

    const activityIcons = [iconBodybuilding, iconSwimming, iconYoga, iconBiking];


    return (
        <div className={ styles.homePage } >
            <NavHeaderLayout /> 
            <DashboardContainerLayout>
                <AsideNavLayout>
                    <NavAsideLayout>
                        { activityIcons.map((item, index) => <ButtonActivity key={index} img={item} alt="Activity icon" /> )}
                    </NavAsideLayout>
                    <FooterAsideLayout text="Copiryght, SportSee 2020" />
                </AsideNavLayout>
                <MainLayout>
                    <HeaderWelcomeLayout>
                        <TitleMain text="Bonjour" name="Thomas"/>
                        <TextMain text="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
                    </HeaderWelcomeLayout>
                    <MainContentView>
                        <SectionMainGraph>
                            <TitleGraph title="Activité quotidienne" />
                            <GraphLegend legend="Poids" unit="Kg" color="#121415" />
                            <GraphLegend legend="Calories brûlées" unit="kCal" color="#E60000" />
                        </SectionMainGraph>
                        <SectionSecondaryGraph />
                        <SectionSecondaryGraph />
                        <SectionSecondaryGraph />
                        <AsideNutritionLayout>
                            <NutritionLegend img={iconCalories} alt="Icon calories" unit="1,930kCal" legend="Calories"/>
                            <NutritionLegend img={iconProtein} alt="Icon proteins" unit="155g" legend="Proteines"/>
                            <NutritionLegend img={iconCarbs} alt="Icon carbs" unit="290g" legend="Glucides"/>
                            <NutritionLegend img={iconFat} alt="Icon fats" unit="50g" legend="Lipides"/>
                        </AsideNutritionLayout>
                    </MainContentView>
                </MainLayout>
            </DashboardContainerLayout>  
        </div>
    );
};