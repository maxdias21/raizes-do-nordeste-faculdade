"use client";

import styles from "./page.module.css";

import {faCheck, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import React, {useContext} from "react";

import {CartContext} from "../../context/Cart";
import Link from "next/dist/client/link";


function OrdersPage() {
    const {orders} = useContext(CartContext);

    return (
        <>
            <div className={styles.pageHeader}>
                <Link href="/"> <FontAwesomeIcon icon={faArrowLeft} className="searchIcon"/></Link>
                <h1>Meus pedidos</h1>
            </div>
            <div className={styles.container}>
                {orders.map((order) => (
                    <React.Fragment key={order.id}>
                        <div className={styles.inner}>
                            <h1>Pedido número #{order.id}</h1>
                            <div className={styles.info}>
                                <p>Realizado em {new Date(order.date).toLocaleString("pt-BR", {
                                    day: "2-digit",
                                    month: "long",
                                    year: "numeric",
                                    hour: "2-digit",
                                    minute: "2-digit",
                                })}</p>
                                <p>Loja: Boa Viagem - PE</p>
                            </div>
                            <hr/>
                            <h2>Itens do pedido</h2>
                            {order.items.map((item, index) => (
                                <div key={index} className={styles.content}>
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>R$ {item.price * item.quantity}</span>
                                </div>
                            ))}

                            <hr/>
                            <div className={styles.content}>
                                <span>Taxa de serviço</span>
                                <span>R$ 5,00</span>
                            </div>
                            <hr/>
                            <div className={styles.content}>
                                <span>Total</span>
                                <span className={styles.price}>R$ 20,00</span>
                            </div>
                        </div>
                        <div className={styles.trackOrder}>
                            <h3>Acompanhe seu pedido #{order.id}</h3>
                            <p>Concluído <FontAwesomeIcon style={{color: "green"}} icon={faCheck}/></p>
                        </div>
                    </React.Fragment>

                ))}

                <hr/>
            </div>
        </>
    );
}

export default OrdersPage;