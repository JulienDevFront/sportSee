import styles from "../assets/styles/views/headerWelcomeView.module.scss";
import TitleWelcome from "../components/TitleWelcome";

export default function HeaderWelcomeView({ name }) {

    return (
        <header className={ styles.headerWelcomeView }>
            <TitleWelcome text="Bonjour" name= {name }/>
            <p>Félicitation ! Vous avez explosé vos objectifs hier 👏</p>
        </header>
    );
};