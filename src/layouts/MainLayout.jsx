import styles from "../assets/styles/layouts/mainLayout.module.scss";

export default function MainLayout({ children }) {

    return (
        <main className={ styles.mainLayout }>{ children }</main>
    );
};