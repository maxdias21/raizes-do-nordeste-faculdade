import styles from "./Search.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faMagnifyingGlass} from "@fortawesome/free-solid-svg-icons";

function Search({data, setData}) {
    function handleInput(e) {
        const value = e.target.value;

        const filterFood = data.filter(food => food.name.toLowerCase().includes(value.toLowerCase()));

        setData(filterFood);
    }

    return (
        <div className={styles.searchContainer}>
            <div className={styles.searchContent}>
                <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                <input onInput={(e) => handleInput(e)} placeholder="Buscar produtos..."/>
            </div>
        </div>
    )
}

export default Search;