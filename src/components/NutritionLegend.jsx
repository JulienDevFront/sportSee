import styles from "../assets/styles/components/nutritionLegend.module.scss";

export default function NutritionLegend({ img, alt, unit, legend }) {

    return (
       <div className={ styles.nutritionLegend }>
            <img src={ img } alt={ alt } />
            <div>
                <h3>{ unit }</h3>
                <p>{ legend }</p>
            </div>
       </div> 
    );
};