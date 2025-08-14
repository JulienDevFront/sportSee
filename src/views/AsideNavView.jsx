import styles from "../assets/styles/views/asideNavView.module.scss";
import ButtonActivity from "../components/ButtonActivity.jsx";
import iconBodybuilding from "../assets/icons/iconBodybuilding.svg";
import iconSwimming from "../assets/icons/iconSwimming.svg";
import iconYoga from "../assets/icons/iconYoga.svg";
import iconBiking from "../assets/icons/iconBiking.svg";


export default function AsideNavView() {

    const activityIcons = [iconBodybuilding, iconSwimming, iconYoga, iconBiking];
    
    return (
        <aside className={ styles.asideNavView }>
            <nav>
                { activityIcons.map((item, index) => 
                    <ButtonActivity key={ index } img={ item } alt="Activity icon" /> 
                )}
            </nav>
             <footer className={ styles.footerAsideView }>
                <p>Copiryght, SportSee 2020</p>
            </footer>
        </aside>
    );
};