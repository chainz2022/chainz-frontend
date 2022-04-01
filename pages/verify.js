import Head from "next/head";
import Image from "next/image";
import React, { useState } from "react";
import Nav from "../components/Nav";
import styles from "../styles/verify.module.css";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";
import { useRouter } from "next/router";
import { ethers } from "ethers";

export default function Verify() {
  const { wallet, connectWalletHandler, fetchPlayer } =
    useContext(WalletContext);

  const router = useRouter();
  const { token } = router.query;
  const [error, setError] = useState();
  const [connected, setConnected] = useState(false);

  const signMessage = async ({ message }) => {
    try {
      if (!window.ethereum)
        throw new Error("No crypto wallet found. Please install it.");

      const provider = new ethers.providers.Web3Provider(window.ethereum);
      const signer = provider.getSigner();
      const signature = await signer.signMessage(message);
      const address = await signer.getAddress();

      return {
        message,
        signature,
        address,
      };
    } catch (err) {
      setError(err.message);
    }
  };

  const verifyTokenWithDb = async (sig) => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sig.message,
        signer: sig.address,
        signature: sig.signature,
      }),
    };
    fetch(
      "https://mechabrawlers:8443/player/verify-token",
      requestOptions
    ).then((response) => {
      console.log(response.json());
      setConnected(true);
      fetchPlayer(wallet);
    });
  };

  const connectPlayerHandler = async () => {
    const sig = await signMessage({
      message: token,
    });

    if (sig) {
      await verifyTokenWithDb(sig);
    }
  };

  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Verify</p>

        <Nav />

        {wallet ? (
          <div className={styles.verifyCard}>
            {connected ? (
              <span>
                Wallet connected! Re-login to the Chainz Minecraft to start
                playing
              </span>
            ) : (
              <>
                <span>Connect your wallet with your minecraft account</span>
                <button onClick={connectPlayerHandler}>Verify wallet</button>
                <span>{error}</span>
              </>
            )}
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
