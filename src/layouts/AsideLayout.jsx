import styles from "../assets/styles/layouts/asideLayout.module.scss";

export default function AsideLayout({ children }) {

    return (
        <aside className={ styles.asideLayout }>{ children }</aside>
    )
}