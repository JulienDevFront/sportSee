import styles from "../assets/styles/layouts/navAsideLayout.module.scss";

export default function NavAsideLayout({ children }) {

    return (
        <nav className={ styles.navAsideLayout }>{ children }</nav>
    )
}