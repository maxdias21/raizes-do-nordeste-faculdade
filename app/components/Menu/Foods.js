import styles from "./Foods.module.css";
import Food from "./Food";


function Foods({data}) {
    return (
        <div className={styles.inner}>
            {data.map((food) => (
                <Food key={food.id} food={food}/>
            ))}
        </div>
    );
}

export default Foods;