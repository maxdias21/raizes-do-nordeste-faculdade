import Image from "next/image";
import styles from "./MenuBanner.module.css";
import Link from "next/dist/client/link";

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

            <Link href={"/menu"} className={styles.button}>
                Ver cardápio
            </Link>
        </article>
    );
}

export default MenuBanner;