import styles from "./Rewards.module.css";

import React, {useContext} from "react";
import {UserContext} from "../../../context/User";

function Rewards({itemsRewards = []}) {
    const {profile, redeemPoints} = useContext(UserContext);

    function handleClick(id, points) {
        if (points <= profile.points) {
            redeemPoints(points);

            setItemsRewards((prevState) => prevState.map(item => {
                if (item.id === id) {
                    return {...item, redeemed: true};
                }
                return item;
            }));
        }
    }

    return (
        <div className={styles.rewards}>
            <h2>Benefícios garantidos</h2>
            <div className={styles.rules}>
                <p>Mostre o cupom na loja e retire seu item.</p>
                <p>O cupom só pode ser usado uma única vez exclusivamente por você.</p>
            </div>
            <div className={styles.rewardsContent}>
                {itemsRewards?.map((item, index) => (
                    <div key={index} className={styles.item}>
                        <div className={styles.infoItem}>
                            <p>{item.name}</p>
                            <p>{item.points}</p>
                        </div>
                        <button onClick={() => handleClick(item.id, item.points)}
                                className={`${item.points > profile.points && !item.redeemed ? styles.disabled : ""} ${item.redeemed && styles.redemeed}`}>{item.redeemed === true ?
                            <span>
                                    <p onClick={() => handleClick()}>{item.coupon}</p>
                                    </span> : "Resgatar"}
                        </button>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default Rewards;