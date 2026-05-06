"use client";

import styles from "./page.module.css";

import {faMagnifyingGlass, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import {useContext, useState} from "react";
import React from "react";

import Image from "next/image";

import dataFoods from "../../data/foods";
import {CartContext} from "../../context/Cart";
import Link from "next/dist/client/link";


function Menu() {
    const {addToCart, cart, removeCart} = useContext(CartContext);

    const [foodsFilter, setFoodsFilter] = useState(dataFoods);

    function handleInput(e) {
        const value = e.target.value;

        const filterFood = dataFoods.filter(food => food.name.toLowerCase().includes(value.toLowerCase()));

        setFoodsFilter(filterFood);
    }

    return (
        <>
            <div className={styles.pageHeader}>
                <Link href="/"> <FontAwesomeIcon icon={faArrowLeft} className="searchIcon"/></Link>
                <h1>Container</h1>
            </div>
            <div className={styles.container}>
                <div className={styles.searchContainer}>
                    <div className={styles.searchContent}>
                        <FontAwesomeIcon icon={faMagnifyingGlass} className="searchIcon"/>
                        <input onInput={(e) => handleInput(e)} placeholder="Buscar produtos..."/>
                    </div>
                </div>
                <div className={styles.inner}>
                    {foodsFilter.map((food) => (
                        <div key={food.id} className={styles.content}>
                            <Image src="/assets/sidebar1-logo-login.png" unoptimized={true} loading="eager" width={100}
                                   height={80}
                                   alt="logo"/>
                            <div className={styles.foodInfo}>
                                <h4>{food.name}</h4>
                                <p>{food.description}</p>
                                <div className={styles.footer}>
                                    <data className={styles.price} value={`${food.price}`}>{food.price?.toLocaleString(
                                        "pt-BR",
                                        {style: "currency", currency: "BRL"}
                                    )}</data>
                                    <div className={styles.quantityContent}>
                                        {cart.filter(item => food.id === item.id).map(item => (
                                            <React.Fragment key={food.id}>
                                             <span className={styles.add}
                                                   onClick={() => removeCart(food)}>-</span>
                                                <span key={item.id}>{item.quantity ? item.quantity : 0}</span>
                                            </React.Fragment>

                                        ))}
                                        <span className={styles.remove}
                                              onClick={() => addToCart(food)}>+</span>
                                    </div>

                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </>
    );
}

export default Menu;