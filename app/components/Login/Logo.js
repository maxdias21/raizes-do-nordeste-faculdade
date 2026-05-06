import styles from "./Logo.module.css";

import Image from "next/image";

function Logo() {
    return (
        <aside className={styles.logo}>
            <Image src="/assets/logo-login.png" unoptimized={true} loading="eager" width={200} height={200} alt="logo"/>
        </aside>
    )
}


export default Logo;