"use client";

import styles from "./page.module.css";
import Sidebar from "./components/Sidebar";


import UserInfoContainer from "./components/Home/UserInfoContainer";
import GridItems from "./components/Home/GridItems";
import MenuBanner from "./components/Home/MenuBanner";
import LastOrder from "./components/Home/LastOrder";


export default function Home() {
    return (
        <div className={styles.container}>
            <Sidebar/>
            <main className={styles.content}>
                <section className={styles.homeContainer}>
                    <UserInfoContainer />
                    <MenuBanner />
                    <GridItems />
                    <LastOrder />
                </section>
            </main>
        </div>
    );
}