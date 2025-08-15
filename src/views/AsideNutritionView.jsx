import styles from "../assets/styles/views/asideNutritionView.module.scss";
import NutritionLegend from "../components/NutritionLegend.jsx"
import iconCalories from "../assets/icons/iconCalories.svg"
import iconCarbs from "../assets/icons/iconCarbs.svg"
import iconFat from "../assets/icons/iconFat.svg"
import iconProtein from "../assets/icons/iconProtein.svg"

export default function AsideNutritionView({ unit }) {

    return (
        <aside className={ styles.asideNutritionView }>
            <NutritionLegend img={ iconCalories } alt="Stats" unit={ unit.calorieCount } legend="Calories"/>
            <NutritionLegend img={ iconProtein } alt="Stats" unit={ unit.proteinCount } legend="Proteines"/>
            <NutritionLegend img={ iconCarbs } alt="Stats" unit={ unit.carbohydrateCount } legend="Glucides"/>
            <NutritionLegend img={ iconFat } alt="Stats" unit={ unit.lipidCount } legend="Lipides"/>
        </aside>
    );
};