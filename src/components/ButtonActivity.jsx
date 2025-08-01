import styles from "../assets/styles/components/buttonActivity.module.scss";

export default function buttonActivity({ img, alt }) {

    return (
        <button className={ styles.buttonActivity }>
            <img src={img} alt={alt} />
        </button>
    );
};