import styles from "../assets/styles/layouts/sectionMainGraph.module.scss";

export default function SectionMainGraph({ children }) {

    return (
        <section className={ styles.sectionMainGraph }>{ children }</section>
    );
};