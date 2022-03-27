import React from "react";
import Link from "next/link";
import styles from "../styles/nav.module.css";
import { useContext, useEffect } from "react";
import WalletContext from "../contexts/WalletContext";

export default function Nav() {
  const {
    wallet,
    walletChangedHandler,
    chainChangedHandler,
    connectWalletHandler,
  } = useContext(WalletContext);

  useEffect(() => {
    connectWalletHandler();

    // listen for wallet changes
    window.ethereum.on("accountsChanged", walletChangedHandler);

    window.ethereum.on("chainChanged", chainChangedHandler);
  }, []);

  return (
    <div className={styles.nav}>
      <h2 className={styles.title}>
        <Link href="/">
          <a>Home</a>
        </Link>
      </h2>

      <h2 className={styles.title}>
        <Link href="/marketplace">
          <a>Marketplace</a>
        </Link>
      </h2>

      <h2 className={styles.title}>
        <Link href="/whitepaper">
          <a>Whitepaper</a>
        </Link>
      </h2>

      <h2 className={styles.title}>
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </h2>

      <button onClick={connectWalletHandler}>
        <h2 className={styles.title}>
          <a>{wallet || "Connect wallet"}</a>
        </h2>
      </button>
    </div>
  );
}
