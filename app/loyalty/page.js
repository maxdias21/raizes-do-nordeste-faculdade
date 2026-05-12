import styles from "./page.module.css";

import Link from "next/dist/client/link";
import React from "react";
import Image from "next/image";

const ITEMS_REWARDS = [
    { name: "Café Expresso", points: 150, coupon: "CAF3-XP21" },
    { name: "Cappuccino", points: 220, coupon: "CAP9-ZL44" },
    { name: "Pão de Queijo", points: 180, coupon: "PAO7-KM82" },
    { name: "Cookie de Chocolate", points: 200, coupon: "COOK-7XP1" },
    { name: "Brownie", points: 250, coupon: "BRW4-QT99" },
    { name: "Sanduíche Natural", points: 350, coupon: "SAND-PL55" },
    { name: "Suco Natural", points: 300, coupon: "SUC8-WE21" },
    { name: "Hambúrguer Artesanal", points: 700, coupon: "BURG-XD88" },
    { name: "Batata Frita", points: 400, coupon: "BATA-TR73" },
    { name: "Pizza Individual", points: 850, coupon: "PIZZ-AL42" },
    { name: "Milkshake", points: 500, coupon: "MLK5-JP60" },
    { name: "Açaí Pequeno", points: 450, coupon: "ACAI-YU11" },
    { name: "Sorvete", points: 320, coupon: "SORB-VC29" },
    { name: "Refrigerante", points: 150, coupon: "REFR-NA91" },
    { name: "Hot Dog", points: 380, coupon: "HOTD-GF76" },
    { name: "Tapioca", points: 340, coupon: "TAPI-LK54" },
    { name: "Coxinha", points: 210, coupon: "COXI-MM83" },
    { name: "Esfiha", points: 190, coupon: "ESFI-QZ10" },
    { name: "Combo Lanche", points: 1200, coupon: "COMB-RT77" },
    { name: "Prato Executivo", points: 1500, coupon: "PRAT-HJ95" }
];
function LoyaltyPage() {
    return (
        <div className={styles.container}>

            <div className={styles.pageHeader}>
                <Link href="/">{"<"}</Link>
                <h1>Fidelidade</h1>
            </div>

            <div className={styles.banner}>
                <div className={styles.textContent}>
                    <p className={styles.text}>Você tem </p>
                    <p className={styles.points}>1250 PONTOS</p>
                    <span>Parabéns, você está no nível PRATA</span>
                </div>

                <Image src="/assets/sidebar1-logo-login.png" unoptimized={true} loading="eager" width={150}
                       height={100}
                       alt="logo"/>
            </div>

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
                        <p className={styles.textInfo}>Use seus pontos para resgatar descontos e vantagens exclusivas.</p>
                    </div>

                    <div className={styles.info}>
                        <p className={styles.number}>2</p>
                        <p className={styles.rewardsMainText}>Suba de nível</p>
                        <p className={styles.textInfo}>Quanto mais você participa, mais benefícios conquista.</p>
                    </div>
                </div>
            </div>

            <div className={styles.rewards}>
                <h2>Benefícios garantidos</h2>
                <div className={styles.rewardsContent}>
                    {ITEMS_REWARDS.map((item, index) => (
                        <div key={index} className={styles.item}>
                            <div className={styles.infoItem}>
                                <p>{item.name}</p>
                                <p>{item.points}</p>
                            </div>
                            <button>Resgatar</button>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    );
}

export default LoyaltyPage;