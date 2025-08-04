import styles from "../assets/styles/layouts/asideNavLayout.module.scss";

export default function AsideNavLayout({ children }) {

    return (
        <aside className={ styles.asideNavLayout }>{ children }</aside>
    )
}