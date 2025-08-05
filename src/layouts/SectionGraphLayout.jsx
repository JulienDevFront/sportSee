import styles from "../assets/styles/layouts/sectionGraphLayout.module.scss";

export default function SectionGraphLayout({ children }) {

    return (
        <section className={ styles.sectionGraphLayout }>{ children }</section>
    );
};