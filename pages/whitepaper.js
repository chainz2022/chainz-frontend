import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/whitepaper.module.css";
import Nav from "../components/Nav";

export default function Whitepaper() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Whitepaper</p>

        <Nav />

        <p className={styles.description}>Soon</p>

        <p className={styles.description}>
          1. Join minecraft server IP: 132.226.157.221
        </p>
        <p className={styles.description}>
          2. /verify in-game to connect wallet to minecraft and start earning
          coins
        </p>
      </main>

      <footer className={styles.footer}>
        <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/discord-white.svg"
            alt="Discord"
            width={32}
            height={16}
          />
        </a>
        <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
          <Image
            src="/twitter-white.svg"
            alt="Twitter"
            width={32}
            height={16}
          />
        </a>
      </footer>
    </div>
  );
}
