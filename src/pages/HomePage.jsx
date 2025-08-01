import styles from "../assets/styles/pages/homePage.module.scss";
import NavHeader from "../layouts/NavHeader.jsx";

export default function HomePage() {

    return (
        <div className={ styles.homePage } >
        <NavHeader />    
            Hello World
        </div>
    );
};