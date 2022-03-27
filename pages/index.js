import Head from "next/head";
import Image from "next/image";
import styles from "../styles/home.module.css";
import Nav from "../components/Nav";

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Minecraft P2E</p>

        <Nav />
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
