import styles from "../assets/styles/views/asideNutritionView.module.scss";

export default function AsideNutritionView({ children }) {

    return (
        <aside className={ styles.asideNutritionView }>{ children }</aside>
    );
};