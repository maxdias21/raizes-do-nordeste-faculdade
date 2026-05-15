"use client";

import styles from "./page.module.css";

import {faCheck, faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";

import React, {useContext} from "react";

import {CartContext} from "../../context/Cart";
import Link from "next/dist/client/link";

const STORES = [
    {
        id: 1,
        name: "Loja Boa Viagem",
        location: "Recife/PE",
        address: "Av. Boa Viagem, 1234",
        selected: true,
    },
    {
        id: 2,
        name: "Loja Casa Forte",
        location: "Recife/PE",
        address: "Av. 17 de Agosto, 456",
        selected: false
    },
    {
        id: 3,
        name: "Loja Recife Antigo",
        location: "Recife/PE",
        address: "Rua do Bom Jesus, 87",
        selected: false
    },
    {
        id: 4,
        name: "Loja Olinda",
        location: "Olinda/PE",
        address: "Av. Getúlio Vargas, 321",
        selected: false
    },
    {
        id: 5,
        name: "Loja Caruaru",
        location: "Caruaru/PE",
        address: "Rua XV de Novembro, 654",
        selected: false
    },
    {
        id: 6,
        name: "Loja Paulista",
        location: "São Paulo/SP",
        address: "Av. Paulista, 1578",
        selected: false
    },
    {
        id: 7,
        name: "Loja Asa Sul",
        location: "Brasília/DF",
        address: "CLS 204 Bloco B, Loja 12",
        selected: false
    }
];

function OrdersPage() {
    const {orders} = useContext(CartContext);

    return (
        <>
            <div className={styles.pageHeader}>
                <Link href="/"><FontAwesomeIcon icon={faArrowLeft}/></Link>
                <h1>Meus pedidos</h1>
            </div>
            <div className={styles.container}>
                {orders.map((order) => {
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
                                <div></div>
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
                })}
                <hr/>
            </div>
        </>
    );
}

export default OrdersPage;