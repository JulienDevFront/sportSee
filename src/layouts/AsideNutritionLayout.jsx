import styles from "../assets/styles/layouts/asideNutritionLayout.module.scss";

export default function AsideNutritionLayout({ children }) {

    return (
        <aside className={ styles.asideNutritionLayout }>{ children }</aside>
    );
};