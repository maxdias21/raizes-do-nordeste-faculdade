import Image from "next/image";
import styles from "./MenuBanner.module.css";

function MenuBanner() {
    return (
        <article className={styles.menuBanner}>
            <Image
                src="/assets/sidebar1-logo-login.png"
                alt="Banner"
                fill
            />

            <p>
                Comece o seu dia com o melhor do Nordeste!
            </p>

            <button className={styles.button}>
                Ver cardápio
            </button>
        </article>
    );
}

export default MenuBanner;