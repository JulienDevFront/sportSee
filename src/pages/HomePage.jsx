import styles from "../assets/styles/pages/homePage.module.scss";
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import NavAsideLayout from "../layouts/NavAsideLayout.jsx";

export default function HomePage() {

    return (
        <div className={ styles.homePage } >
            <NavHeaderLayout />    
            <MainLayout>
                <NavAsideLayout />
            </MainLayout>
        </div>
    );
};