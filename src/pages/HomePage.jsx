import styles from "../assets/styles/pages/homePage.module.scss";
import HeaderWelcomeView from "../views/HeaderWelcomeView.jsx";
import TitleMain from "../components/TitleMain.jsx";
import TextMain from "../components/TextMain.jsx";
import SectionGraphsView from "../views/SectionGraphsView.jsx";
import TitleGraph from "../components/TitleGraph.jsx";
import GraphLegend from "../components/GraphLegend.jsx";
import AsideNutritionView from "../views/AsideNutritionView.jsx";
import iconCalories from "../assets/icons/iconCalories.svg";
import iconProtein from "../assets/icons/iconProtein.svg";
import iconCarbs from "../assets/icons/iconCarbs.svg";
import iconFat from "../assets/icons/iconFat.svg";
import NutritionLegend from "../components/NutritionLegend.jsx";
import MainContentView from "../views/MainContentView.jsx";
import ArticleGraphView from "../views/ArticleGraphView.jsx";

export default function HomePage() {

    return (
        <div className={ styles.homePage } >
            <HeaderWelcomeView>
                <TitleMain text="Bonjour" name="Thomas"/>
                <TextMain text="Félicitation ! Vous avez explosé vos objectifs hier 👏" />
            </HeaderWelcomeView>
            <MainContentView>
                <SectionGraphsView>
                    <ArticleGraphView>
                        {/* <TitleGraph title="Activité quotidienne" />
                        <GraphLegend legend="Poids" unit="Kg" color="#121415" />
                        <GraphLegend legend="Calories brûlées" unit="kCal" color="#E60000" /> */}
                    </ArticleGraphView>
                    <div className={ styles.homePage__secondaryGraphs }>
                        <ArticleGraphView />
                        <ArticleGraphView />
                        <ArticleGraphView />
                    </div>
                </SectionGraphsView>
                <AsideNutritionView>
                    <NutritionLegend img={iconCalories} alt="Icon calories" unit="1,930kCal" legend="Calories"/>
                    <NutritionLegend img={iconProtein} alt="Icon proteins" unit="155g" legend="Proteines"/>
                    <NutritionLegend img={iconCarbs} alt="Icon carbs" unit="290g" legend="Glucides"/>
                    <NutritionLegend img={iconFat} alt="Icon fats" unit="50g" legend="Lipides"/>
                </AsideNutritionView>
            </MainContentView>
        </div>
    );
};