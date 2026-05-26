import styles from "./ImagePanel.module.css";
import Image from "next/image";

function ImagePanel() {
    return (
        <aside className={styles.image}>
            <Image src="/assets/sidebar1-logo-login.png" unoptimized={true} loading="eager" width={100} height={100}
                   alt="logo"/>
        </aside>
    );
}

export default ImagePanel;