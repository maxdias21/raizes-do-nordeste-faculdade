import styles from "./RewardsInfo.module.css";

import React from "react";



function RewardsInfo() {
    return (
        <div className={styles.rewardsInfo}>
            <h2>Como funciona</h2>
            <div className={styles.content}>
                <div className={styles.info}>
                    <p className={styles.number}>1</p>
                    <p className={styles.rewardsMainText}>Acumule pontos</p>
                    <p className={styles.textInfo}>A cada R$1 gasto, você ganha 1 ponto.</p>
                </div>

                <div className={styles.info}>
                    <p className={styles.number}>2</p>
                    <p className={styles.rewardsMainText}>Troque por benefícios</p>
                    <p className={styles.textInfo}>Use seus pontos para resgatar descontos e vantagens
                        exclusivas.</p>
                </div>

                <div className={styles.info}>
                    <p className={styles.number}>2</p>
                    <p className={styles.rewardsMainText}>Suba de nível</p>
                    <p className={styles.textInfo}>Quanto mais você participa, mais benefícios conquista.</p>
                </div>
            </div>
        </div>
    )
}

export default RewardsInfo;