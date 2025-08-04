import styles from "../assets/styles/layouts/dashboardContainerLayout.module.scss";

export default function DashboardContainerLayout({ children }) {

    return (
        <div className={ styles.dashboardContainerLayout }>{ children }</div>
    );
};