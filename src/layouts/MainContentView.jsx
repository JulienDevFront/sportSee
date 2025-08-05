import styles from "../assets/styles/layouts/mainContentView.module.scss";

export default function MainContentView({ children }) {

    return (
        <main className={ styles.mainContentView }>{ children }</main>
    );
};