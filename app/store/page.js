import styles from "./page.module.css";

import Link from "next/dist/client/link";
import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faArrowLeft} from "@fortawesome/free-solid-svg-icons";
import React from "react";

const STORES = [
    {
        id: 1,
        name: "Loja Boa Viagem",
        location: "Recife/PE",
        address: "Av. Boa Viagem, 1234",
        selected: true
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

function StorePage() {
    return (
        <main className={styles.container}>
            <div className={styles.pageHeader}>
                <Link href="/">voltar</Link>
                <h1>Meus pedidos</h1>
            </div>
            <div className={styles.storeContainer}>
                {STORES.map((item, index) => (
                    <div className={styles.storeContent} key={index}>
                        <div className={styles.location}>
                            <span>{item.name}</span>
                            -
                            <span>{item.location}</span>
                        </div>

                        <p>{item.address}</p>
                        <button className={styles.selected}>Selecionar essa loja?</button>
                    </div>
                ))}
            </div>
        </main>
    );
}

export default StorePage;