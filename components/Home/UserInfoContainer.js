import Image from "next/image";
import styles from "./UserInfoContainer.module.css";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {faBell, faXmark} from "@fortawesome/free-solid-svg-icons";

import {useContext, useState} from "react";
import {CartContext} from "../../context/Cart";
import {UserContext} from "../../context/User";


function UserInfoContainer() {
    const [showMenu, setShowMenu] = useState(false);
    const [textButton, setTextButton] = useState("Finalizar pedido");

    const {totalItems, addOrder, cart} = useContext(CartContext);
    const {profile} = useContext(UserContext);

    const items = totalItems();

    async function handleClick() {
        setTextButton("Finalizando pedido...");

        await new Promise(resolve => {
            setTimeout(() => {
                setTextButton("Finalizar pedido");
                addOrder();
                resolve();
            }, 5000);
        });
    }


    return (
        <header className={styles.userInfoContainer}>
            <div className={styles.greeting}>
                <h3>Olá, Uninter 👋</h3>
                <p>Que bom ter você por aqui</p>
            </div>

            <div className={styles.userInfo}>
                <div onClick={() => setShowMenu(!showMenu)} className={styles.notification}>
                    <span>{items.length}</span>
                    <FontAwesomeIcon style={{color: items.length > 1 ? "red" : "black"}} icon={faBell}/>
                </div>
                {showMenu && (
                    <div className={`${showMenu && styles.showMenu}`}>
                        <div className={styles.header}>
                            <div className={styles.cartTitle}>ITENS NO CARRINHO ({items.length})</div>
                            <div onClick={() => setShowMenu(false)} className={styles.closeButton}>
                                <FontAwesomeIcon icon={faXmark}/>
                            </div>
                        </div>

                        <div className={styles.cartContent}>
                            {items.map((item, index) => (
                                <div className={styles.info} key={index}>
                                    <div>{item.name}</div>
                                    <div>x</div>
                                    <div>{item.quantity}</div>
                                </div>
                            ))}
                        </div>
                        {cart.length > 0 && (
                            <button onClick={handleClick} className={`${styles.info} 
                            ${textButton === "Finalizando pedido..." ? styles.disabled :styles.buyButton}`}>
                                {textButton}
                            </button>
                        )}
                    </div>
                )}

                <div className={styles.userDetails}>
                    <a>Uninter Santo Amaro</a>
                    <p>{profile.points} pontos</p>
                </div>

                <figure className={styles.avatar}>
                    <Image
                        src="/assets/sidebar1-logo-login.png"
                        width={40}
                        height={40}
                        alt="Avatar"
                    />
                </figure>
            </div>
        </header>
    );
}

export default UserInfoContainer;