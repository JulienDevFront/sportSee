import styles from "../assets/styles/views/asideNavView.module.scss";

export default function AsideNavView({ children }) {

    return (
        <aside className={ styles.asideNavView }>{ children }</aside>
    )
}