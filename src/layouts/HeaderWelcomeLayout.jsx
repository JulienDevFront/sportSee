import styles from "../assets/styles/layouts/headerWelcomeLayout.module.scss";

export default function HeaderWelcomeLayout({ children }) {

    return (
        <header className={ styles.headerWelcomeLayout}>{ children }</header>
    );
};