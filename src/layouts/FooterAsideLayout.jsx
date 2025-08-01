import styles from "../assets/styles/layouts/footerAsideLayout.module.scss";

export default function FooterAsideLayout({ text }) {

    return (
        <footer className={ styles.footerAsideLayout }>
            <p>{ text }</p>
        </footer>
    )
}