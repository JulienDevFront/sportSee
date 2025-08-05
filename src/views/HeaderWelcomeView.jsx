import styles from "../assets/styles/views/headerWelcomeView.module.scss";

export default function HeaderWelcomeView({ children }) {

    return (
        <header className={ styles.headerWelcomeView}>{ children }</header>
    );
};