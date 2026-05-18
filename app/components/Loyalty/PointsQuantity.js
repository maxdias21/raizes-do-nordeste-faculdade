import React from "react";

import styles from "./PointsQuantity.module.css";

function PointsQuantity({profile}) {
    return (
        <div className={styles.pointsQuantity}>
            {profile?.points > 0 ?
                <p className={styles.animationPoints}>Parabéns, você tem um total de {profile?.points} pontos.</p> :
                <p>Poxa, você ainda não tem pontos. Que tal fazer uma comprinha para poder acumular pontos? </p>}
        </div>
    );
}

export default PointsQuantity;