import Head from "next/head";
import Image from "next/image";
import React from "react";
import Avatar from "react-minecraft-skin-viewer";

import Nav from "../components/Nav";
import styles from "../styles/Profile.module.css";

export default function Profile() {
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

        <div className={styles.multiplierCard}>
          <div className={styles.card}>
            <span>Multiplier</span>
            <span>x0.10</span>
          </div>

          <div className={styles.card}>
            <span>Balance</span>
            <span>1000 $BLOCK</span>
          </div>
        </div>

        <div className={styles.playerCard}>
          <span>Minecraft account</span>
          <div className={styles.image}>
            <Avatar
              src="https://crafatar.com/skins/a0baba3d574544a38d85e5034247e589"
              rotate={true}
              width={400}
              height={550}
            />
          </div>
          <span>
            Connect to our minecraft server and type /verify to link your
            account to your wallet
          </span>
        </div>

        <div className={styles.companionsCard}>
          <span>Your companions</span>
          <span className={styles.gray}>
            You don&apos;t have any companions in your wallet
          </span>
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
