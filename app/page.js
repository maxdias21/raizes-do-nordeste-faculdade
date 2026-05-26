"use client";

import styles from "./page.module.css";
import Sidebar from "../components/Sidebar";


import UserInfoContainer from "../components/Home/UserInfoContainer";
import GridItems from "../components/Home/GridItems";
import MenuBanner from "../components/Home/MenuBanner";
import LastOrder from "../components/Home/LastOrder";
import {useEffect, useState} from "react";


export default function Home() {
    const [notice, setNotice] = useState(null);

    useEffect(() => {
        setNotice(localStorage.getItem("showNotice") !== "false");
    }, [setNotice])

    function handleSubmit() {
        localStorage.setItem("showNotice", "false");
        setNotice(false);
    }

    return (
        <div className={styles.container}>
            <Sidebar/>
            <main className={styles.content}>
                <section className={styles.homeContainer}>
                    {notice && (


                    <div className={styles.notice}>
                        <div className={styles.inner}>
                            <div className={styles.noticeHeader}>
                                <h2>Privacidade e Proteção de Dados</h2>
                                <p>Em conformidade com a LGPD (Lei 13.709/2018)</p>
                            </div>

                            <div className={styles.noticeBody}>
                                <p>Antes de continuar, precisamos do seu consentimento para coleta dos seguintes
                                    dados:</p>

                                <div className={styles.noticeItem}>
                                    <div className={styles.noticeItemHeader}>
                                        <span>📧 Email</span>
                                        {/* Pode recusar ofertas promocionais */}
                                        <label>
                                            <input type="checkbox" defaultChecked/>
                                        </label>
                                    </div>
                                    <p>Autenticação e envio de ofertas promocionais. Você pode recusar o recebimento de
                                        ofertas.</p>
                                </div>

                                <div className={styles.noticeItem}>
                                    <div className={styles.noticeItemHeader}>
                                        <span>📍 Endereço</span>
                                        {/* Pode recusar caso queira retirar na loja */}
                                        <label>
                                            <input type="checkbox" defaultChecked/>
                                        </label>
                                    </div>
                                    <p>Usado para entrega e localizar a loja mais próxima. Recuse caso prefira retirar
                                        na loja.</p>
                                </div>

                                <div className={styles.noticeItem}>
                                    <div className={styles.noticeItemHeaderRequired}>
                                        <span>👤 Nome</span>
                                        {/* Obrigatório */}
                                        <span>Obrigatório</span>
                                    </div>
                                    <p>Necessário para identificar você e personalizar sua experiência.</p>
                                </div>

                                <div className={styles.noticeItem}>
                                    <div className={styles.noticeItemHeaderRequired}>
                                        <span>🛒 Histórico de Pedidos</span>
                                        {/* Obrigatório */}
                                        <span>Obrigatório</span>
                                    </div>
                                    <p>Necessário para o funcionamento do sistema e sugestão de pedidos.</p>
                                </div>
                            </div>


                            <div className={styles.noticeFooter}>
                                <p>Você pode alterar suas preferências a qualquer momento nas configurações da
                                    conta.</p>
                                <button onClick={handleSubmit}>Aceitar e Continuar</button>
                            </div>
                        </div>
                    </div>
                    )}
                    <UserInfoContainer/>
                    <MenuBanner/>
                    <GridItems/>
                    <LastOrder/>
                </section>
            </main>
        </div>
    );
}