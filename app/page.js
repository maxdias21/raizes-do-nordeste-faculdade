'use client';

import styles from './page.module.css';

import Sidebar from '../components/Sidebar';
import UserInfoContainer from '../components/Home/UserInfoContainer';
import GridItems from '../components/Home/GridItems';
import MenuBanner from '../components/Home/MenuBanner';
import Notice from '../components/Notice';

import { useContext, useEffect, useState } from 'react';
import { CartContext } from '../context/Cart';

export default function Home() {
  const [notice, setNotice] = useState(null);

  useEffect(() => {
    setNotice(localStorage.getItem('showNotice') !== 'false');
  }, [setNotice]);

  function handleSubmit() {
    localStorage.setItem('showNotice', 'false');
    setNotice(false);
  }

  return (
    <div className={styles.container}>
      <Sidebar />
      <main className={styles.content}>
        <section className={styles.homeContainer}>
          {notice && <Notice handleSubmit={handleSubmit} />}
          <UserInfoContainer />
          <MenuBanner />
          <GridItems />
        </section>
      </main>
    </div>
  );
}
