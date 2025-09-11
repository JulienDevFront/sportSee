import styles from "../assets/styles/views/mainContentView.module.scss";

export default function MainContentView({ children }) {
	return <main className={styles.mainContentView}>{children}</main>;
}
