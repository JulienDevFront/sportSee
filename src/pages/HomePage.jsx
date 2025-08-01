import styles from "../assets/styles/pages/homePage.module.scss";
import NavHeaderLayout from "../layouts/NavHeaderLayout.jsx";
import MainLayout from "../layouts/MainLayout.jsx";
import AsideLayout from "../layouts/AsideLayout.jsx";
import NavAsideLayout from "../layouts/NavAsideLayout.jsx";
import FooterAsideLayout from "../layouts/FooterAsideLayout.jsx";

export default function HomePage() {

    return (
        <div className={ styles.homePage } >
            <NavHeaderLayout />    
            <MainLayout>
                <AsideLayout>
                    <NavAsideLayout />
                    <FooterAsideLayout text="Copiryght, SportSee 2020" />
                </AsideLayout>
            </MainLayout>
        </div>
    );
};