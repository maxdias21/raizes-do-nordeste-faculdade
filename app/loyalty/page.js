"use client";

import styles from "./page.module.css";

import Link from "next/dist/client/link";
import React, {useContext, useEffect, useState} from "react";
import {UserContext} from "../../context/User";

const ITEMS_REWARDS = [
    {id: 1, name: "Café Expresso", points: 150, coupon: "CAF3-XP21", redeemed: false},
    {id: 2, name: "Cappuccino", points: 220, coupon: "CAP9-ZL44", redeemed: false},
    {id: 3, name: "Pão de Queijo", points: 180, coupon: "PAO7-KM82", redeemed: false},
    {id: 4, name: "Cookie de Chocolate", points: 200, coupon: "COOK-7XP1", redeemed: false},
    {id: 5, name: "Brownie", points: 250, coupon: "BRW4-QT99", redeemed: false},
    {id: 6, name: "Sanduíche Natural", points: 350, coupon: "SAND-PL55", redeemed: false},
    {id: 7, name: "Suco Natural", points: 300, coupon: "SUC8-WE21", redeemed: false},
    {id: 8, name: "Hambúrguer Artesanal", points: 700, coupon: "BURG-XD88", redeemed: false},
    {id: 9, name: "Batata Frita", points: 400, coupon: "BATA-TR73", redeemed: false},
    {id: 10, name: "Pizza Individual", points: 850, coupon: "PIZZ-AL42", redeemed: false},
    {id: 11, name: "Milkshake", points: 500, coupon: "MLK5-JP60", redeemed: false},
    {id: 12, name: "Açaí Pequeno", points: 450, coupon: "ACAI-YU11", redeemed: false},
    {id: 13, name: "Sorvete", points: 320, coupon: "SORB-VC29", redeemed: false},
    {id: 14, name: "Refrigerante", points: 150, coupon: "REFR-NA91", redeemed: false},
    {id: 15, name: "Hot Dog", points: 380, coupon: "HOTD-GF76", redeemed: false},
    {id: 16, name: "Tapioca", points: 340, coupon: "TAPI-LK54", redeemed: false},
    {id: 17, name: "Coxinha", points: 210, coupon: "COXI-MM83", redeemed: false},
    {id: 18, name: "Esfiha", points: 190, coupon: "ESFI-QZ10", redeemed: false},
    {id: 19, name: "Combo Lanche", points: 1200, coupon: "COMB-RT77", redeemed: false},
    {id: 20, name: "Prato Executivo", points: 1500, coupon: "PRAT-HJ95", redeemed: false}
];

function LoyaltyPage() {
    const {profile, redeemPoints} = useContext(UserContext);
    const [mounted, setMounted] = useState(false);
    const [itemsRewards, setItemsRewards] = useState([]);

    useEffect(() => {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setMounted(true);
    }, []);

    useEffect(() => {
        const storageItems = localStorage.getItem("items_rewards");

        if (!storageItems) {
            localStorage.setItem("items_rewards", JSON.stringify(ITEMS_REWARDS));
        }

        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItemsRewards(JSON.parse(storageItems));
    }, [setItemsRewards]);

    useEffect(() => {
        localStorage.setItem("items_rewards", JSON.stringify(itemsRewards));
    }, [itemsRewards]);


    if (!mounted) {
        return null;
    }


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
        <div className={styles.container}>

            <div className={styles.pageHeader}>
                <Link href="/">{"<"}</Link>
                <h1>Fidelidade</h1>
            </div>

            <div className={styles.pointsQuantity}>
                {profile?.points > 0 ? <p className={styles.animationPoints}>Parabéns, você tem um total de {profile.points} pontos.</p> : <p>Poxa, você ainda não tem pontos. Que tal fazer uma comprinha para poder acumular pontos? </p>}
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
        </div>

    );
}

export default LoyaltyPage;