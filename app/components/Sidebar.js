import styles from "./Sidebar.module.css";

import {useEffect, useState} from "react";
import Image from "next/image";

import {FontAwesomeIcon} from "@fortawesome/react-fontawesome";
import {
    faHouse,
    faBoxOpen,
    faUtensils,
    faGift,
    faTags,
    faStore,
    faUser,
    faRightFromBracket, faBars,
} from "@fortawesome/free-solid-svg-icons";
import Link from "next/dist/client/link";
import {useRouter} from "next/navigation";


function Sidebar() {
    const [showNavbarItems, setShowNavbarItems] = useState(false);
    const [isDesktop, setIsDesktop] = useState(false);

    const router = useRouter();

    useEffect(() => {
        const media = window.matchMedia("(min-width: 48rem)");

        const update = () => setIsDesktop(media.matches);

        update();

        media.addEventListener("change", update);

        const handlePageShow = () => update();

        window.addEventListener("pageshow", handlePageShow);

        return () => {
            media.removeEventListener("change", update);
            window.removeEventListener("pageshow", handlePageShow);
        };
    }, []);

    function handleClick() {
        localStorage.clear();
        router.push('/login');
    }

    return (
        <nav className={styles.navbar}>
            <div className={styles.navbarMenu}>
                <Image src="/assets/logo-login.png" width={80} height={80} alt="logo"/>

                {!isDesktop && (
                    <FontAwesomeIcon className={styles.toggleButton}
                                     onClick={() => setShowNavbarItems(!showNavbarItems)}
                                     icon={faBars}/>
                )}


                <ul
                    className={
                        isDesktop
                            ? styles.navbarItems
                            : showNavbarItems
                                ? styles.navbarItems
                                : styles.noNavbarItems
                    }
                >
                    <li>
                        <Link href="/">
                            <FontAwesomeIcon icon={faHouse}/> Início
                        </Link>
                    </li>

                    <li>
                        <Link href="/orders">
                            <FontAwesomeIcon icon={faBoxOpen}/> Meus pedidos
                        </Link>
                    </li>

                    <li>
                        <Link href="/menu">
                            <FontAwesomeIcon icon={faUtensils}/> Cardápio
                        </Link>
                    </li>

                    <li>
                        <Link href="/loyalty">
                            <FontAwesomeIcon icon={faGift}/> Fidelidade
                        </Link>
                    </li>

                    <li>
                        <Link href="/store">
                            <FontAwesomeIcon icon={faStore}/> Minhas unidades
                        </Link>
                    </li>


                    <li>
                        <button onClick={handleClick}>
                            <FontAwesomeIcon  icon={faRightFromBracket}/> Sair
                        </button>
                    </li>
                </ul>
            </div>
        </nav>
    );
}

export default Sidebar;