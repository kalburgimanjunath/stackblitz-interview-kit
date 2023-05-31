import Head from 'next/head';
import Navbar from '../components/Header';
import styles from '../styles/Home.module.css';

export default function Home() {
  return (
    <div className={styles.container}>
      <Header />
    </div>
  );
}
