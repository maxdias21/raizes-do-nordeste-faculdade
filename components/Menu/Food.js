import styles from "./Food.module.css";

import Image from "next/image";
import React, {useContext} from "react";
import Link from "next/dist/client/link";

import {UserContext} from "../../context/User";
import {CartContext} from "../../context/Cart";

function Food({food}) {
    const {profile} = useContext(UserContext);
    const {addToCart, cart, removeCart} = useContext(CartContext);

    return (
        <div key={food.id} className={styles.content}>
            <Image src="/assets/sidebar1-logo-login.png" unoptimized={true} loading="eager" width={100}
                   height={80}
                   alt="logo"/>
            <div className={styles.foodInfo}>
                <h4>{food.name}</h4>
                <p>{food.description}</p>
                {!profile?.store &&
                    <Link className={styles.foundStore} href="/store">Clique aqui e selecione sua loja de
                        retirada antes de fazer o pedido</Link>}
                {profile.store === food.id && <p className={styles.exclusive}>Exclusivo da sua loja</p>}
                <div className={styles.footer}>
                    <data className={styles.price} value={`${food.price}`}>{food.price?.toLocaleString(
                        "pt-BR",
                        {style: "currency", currency: "BRL"}
                    )}</data>
                    <div className={styles.quantityContent}>
                        {cart
                            .filter(item => food.id === item.id)
                            .map(item => (
                                <React.Fragment key={food.id}>
                                                            <span className={styles.add}
                                                                  onClick={() => removeCart(food)}>-</span>
                                    <span>{item.quantity ? item.quantity : 0}</span>
                                </React.Fragment>
                            ))
                        }
                        {profile?.store && <span className={styles.remove} onClick={() => addToCart({food, profile})}>+</span>}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Food;