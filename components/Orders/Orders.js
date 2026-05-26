"use client";

import styles from "./Orders.module.css";

import {faCheck} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import React, {useContext} from "react";
import {CartContext} from "../../context/Cart";

function Orders() {
    const {orders} = useContext(CartContext);

    return (
        <div className={styles.container}>
            {orders.length > 0 ? orders.map((order) => {
                const subtotal = order.items.reduce((acc, item) => acc + item.price * item.quantity, 0);
                const serviceFee = 5;
                const total = subtotal + serviceFee;

                return (
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
                            </div>
                            <hr/>
                            <h2>Itens do pedido</h2>
                            {order.items.map((item, index) => (
                                <div key={index} className={styles.content}>
                                    <span>{item.name} x {item.quantity}</span>
                                    <span>R$ {(item.price * item.quantity).toFixed(2)}</span>
                                </div>
                            ))}
                            <hr/>
                            <div className={styles.content}>
                                <span>Taxa de serviço</span>
                                <span>R$ {serviceFee.toFixed(2)}</span>
                            </div>
                            <hr/>
                            <div className={styles.content}>
                                <span>Total</span>
                                <span className={styles.price}>R$ {total.toFixed(2)}</span>
                            </div>
                        </div>
                        <div className={styles.trackOrder}>
                            <h3>Acompanhe seu pedido #{order.id}</h3>
                            <p>Concluído <FontAwesomeIcon style={{color: "green"}} icon={faCheck}/></p>
                        </div>
                    </React.Fragment>
                );
            }) : <h1 className={styles.noOrder}>Você não realizou nenhum pedido ainda</h1>}
            <hr/>
        </div>
    );
}

export default Orders;