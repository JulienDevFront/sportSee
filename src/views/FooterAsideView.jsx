import styles from "../assets/styles/views/footerAsideView.module.scss";

export default function FooterAsideView({ text }) {

    return (
        <footer className={ styles.footerAsideView }>
            <p>{ text }</p>
        </footer>
    )
}