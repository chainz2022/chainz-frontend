import Head from "next/head";
import Image from "next/image";
import React from "react";
import Avatar from "react-minecraft-skin-viewer";
import Nav from "../components/Nav";
import styles from "../styles/dashboard.module.css";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

export default function Dashboard() {
  const { wallet, player, connectWalletHandler } = useContext(WalletContext);

  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Dashboard</p>

        <Nav />

        {player ? (
          <>
            <div className={styles.multiplierCard}>
              <div className={styles.card}>
                <span>Multiplier</span>
                <span>{"x" + player.multiplier}</span>
              </div>

              <div className={styles.card}>
                <span>Balance</span>
                <span>{"x" + player.coins}</span>
              </div>
            </div>

            <div className={styles.playerCard}>
              <span>{player.name}</span>
              <div className={styles.image}>
                <Avatar
                  rotate={true}
                  width={400}
                  height={550}
                  uuid={player.uuid}
                />
              </div>
              <span>
                Join the server and start earning! IP: 132.226.157.221
              </span>
            </div>

            <div className={styles.companionsCard}>
              <span>Your companions</span>
              <span className={styles.gray}>
                You don&apos;t have any companions in your wallet
              </span>
            </div>
          </>
        ) : wallet ? (
          <div className={styles.playerCard}>
            <span>Wallet not connected to minecraft account</span>
            <div className={styles.image}>
              <Avatar rotate={true} width={400} height={550} />
            </div>
            <span>
              Connect to our minecraft server and type /verify to link your
              account to your wallet
            </span>
          </div>
        ) : (
          <>
            <span>You need to be connected</span>
            <button onClick={connectWalletHandler}>Connect wallet</button>
          </>
        )}
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
