import React from "react";
import Head from "next/head";
import Image from "next/image";
import Nav from "../components/Nav";
import styles from "../styles/Profile.module.css";
import { ethers } from "ethers";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

export default function Test() {
  const { errorMessage, wallet, connectWalletHandler } =
    useContext(WalletContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Profile</p>

        <Nav />

        <div>
          <button onClick={connectWalletHandler}>
            {wallet || "Connect wallet"}
          </button>
          <div>
            <h3>Address: {wallet}</h3>
          </div>
          {errorMessage}
        </div>
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
