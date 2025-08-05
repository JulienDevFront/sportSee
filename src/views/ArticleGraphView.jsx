import styles from "../assets/styles/views/articleGraphView.module.scss";

export default function ArticleGraphView({ children }) {

    return (
        <article className={ styles.articleGraphView }>{ children }</article>
    );
};