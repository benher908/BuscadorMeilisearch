"use client";
import Image from "next/image";
import styles from "./page.module.css";
import Head from "next/head";
import { useSearch } from "./hook/useSearch";

export default function Home() {
  const {searchResult,searchMovies}=useSearch();
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
        onChange={searchMovies}
        />
        <div className={styles.results}>
          <div className={styles.grid}>
            {searchResult.map((resource) => (
              <div key={resource.id} className={styles.card}>
                <img
                  src={resource.poster}
                  alt={resource.name}
                  width={200}
                  height={300}
                />
 
              </div>
            ))}
          </div>

        </div>
      </main>

    </div>
  );
}
