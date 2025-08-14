import styles from "../assets/styles/components/buttonToggleMode.module.scss";
import { useContext } from "react";
import { ApiContext } from "../context/ApiProvider";

export default function ButtonToggleMode() {
    const { mode, handleMode } = useContext(ApiContext);

    return (
        <button onClick={ handleMode } className={ styles.buttonToggleMode}> 
            <span>Mode : { mode.name }</span>
            <span>Base URL : { mode.baseURL }</span>
        </button>
    );
};