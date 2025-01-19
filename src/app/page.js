import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Buscador MeiliSearch</title>
      </Head>
      <main className={styles.main}>
        <h1 className={styles.title}>Tus peliculas favoritas</h1>
        <input
        className={styles.search}
        type="text"
        placeholder="Escribe un nombre"
        />
        <div className={styles.results}>
          <img
          src=""
          alt=""
          width={200}
          height={300}
          />

        </div>
      </main>

    </div>
  );
}
