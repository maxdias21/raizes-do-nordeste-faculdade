'use client';

import styles from './page.module.css';
import Sidebar from '../components/Sidebar';

import UserInfoContainer from '../components/Home/UserInfoContainer';
import GridItems from '../components/Home/GridItems';
import MenuBanner from '../components/Home/MenuBanner';
import LastOrder from '../components/Home/LastOrder';
import { useEffect, useState } from 'react';
import Notice from '../components/Notice';

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
          <LastOrder />
        </section>
      </main>
    </div>
  );
}
