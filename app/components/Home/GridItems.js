import styles from "./GridItems.module.css";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faUtensils, faClipboardList, faStar, faTag } from "@fortawesome/free-solid-svg-icons";

function GridItems() {
    return (
        <section className={styles.gridItems}>
            <article className={styles.gridItem}>
                <figure className={styles.gridItemImage}>
                    <FontAwesomeIcon icon={faUtensils} />
                </figure>
                <footer className={styles.gridFooter}>
                    <p className={styles.gridItemTitle}>Fazer pedido</p>
                    <span className={styles.gridItemSubtitle}>Retirar na loja</span>
                </footer>
            </article>

            <article className={styles.gridItem}>
                <figure className={styles.gridItemImage}>
                    <FontAwesomeIcon icon={faClipboardList} />
                </figure>
                <footer className={styles.gridFooter}>
                    <p className={styles.gridItemTitle}>Meus pedidos</p>
                    <span className={styles.gridItemSubtitle}>Acompanhe aqui</span>
                </footer>
            </article>

            <article className={styles.gridItem}>
                <figure className={styles.gridItemImage}>
                    <FontAwesomeIcon icon={faStar} />
                </figure>
                <footer className={styles.gridFooter}>
                    <p className={styles.gridItemTitle}>Fidelidade</p>
                    <span className={styles.gridItemSubtitle}>Seus pontos</span>
                </footer>
            </article>

            <article className={styles.gridItem}>
                <figure className={styles.gridItemImage}>
                    <FontAwesomeIcon icon={faTag} />
                </figure>
                <footer className={styles.gridFooter}>
                    <p className={styles.gridItemTitle}>Promoções</p>
                    <span className={styles.gridItemSubtitle}>Ofertas especiais</span>
                </footer>
            </article>
        </section>
    );
}

export default GridItems;