import styles from "../assets/styles/layouts/sectionGraphsView.module.scss";

export default function SectionGraphsView({ children }) {

    return (
        <section className={ styles.sectionGraphsView }>{ children }</section>
    );
};