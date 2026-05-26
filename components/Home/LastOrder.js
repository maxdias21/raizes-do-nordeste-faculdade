import Image from "next/image";
import styles from "./LastOrder.module.css";

function LastOrder() {
    return (
        <article className={styles.lastOrder}>
            <figure className={styles.avatar}>
                <Image
                    src="/assets/sidebar1-logo-login.png"
                    width={40}
                    height={40}
                    alt="Avatar"
                />
            </figure>

            <div className={styles.details}>
                <p className={styles.title}>Cuscuz com carne</p>
                <p className={styles.store}>Loja Boa Viagem - PE</p>
            </div>

            <div className={styles.priceContainer}>
                <p className={styles.price}>R$24,90</p>
                <p className={styles.status}>Concluído</p>
            </div>
        </article>
    );
}

export default LastOrder;