import styles from "../assets/styles/views/navAsideView.module.scss";

export default function NavAsideView({ children }) {

    return (
        <nav className={ styles.navAsideView }>{ children }</nav>
    )
}