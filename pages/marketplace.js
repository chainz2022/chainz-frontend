import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import styles from "../styles/Marketplace.module.css";
import Nav from "../components/Nav";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";

export default function Marketplace() {
  const { wallet, connectWalletHandler } = useContext(WalletContext);

  const regex = /^[0-9\b]+$/;
  const [whitelistCount, setWhitelistCount] = useState(1);
  const [plotCount, setPlotCount] = useState(1);
  const [kitCount, setKitCount] = useState(1);

  function claimWhitelist() {
    alert(whitelistCount);
  }

  function claimPlot() {
    alert(plotCount);
  }

  function claimKit() {
    alert(kitCount);
  }

  return (
    <div className={styles.container}>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <h1 className={styles.title}>ChainZ Network</h1>

        <p className={styles.description}>Marketplace</p>

        <Nav />

        {wallet ? (
          <>
            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  src="/paper.png"
                  alt="whitelist"
                  width={64}
                  height={64}
                />
              </div>
              <p className={styles.itemTitle}>Claim whitelist</p>
              <p className={styles.itemDescription}>
                Boost your earnings multiplier. Claim a spot to mint one of our
                NFT companions
              </p>

              <p className={styles.itemDescription}>$1000</p>

              <div className={styles.quantityContainer}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setWhitelistCount(
                      whitelistCount - 1 >= 1 ? whitelistCount - 1 : 1
                    )
                  }
                >
                  -
                </button>

                <input
                  className={styles.button}
                  value={whitelistCount}
                  onChange={(e) =>
                    setWhitelistCount(
                      e.target.value === "" || regex.test(e.target.value)
                        ? e.target.value === ""
                          ? ""
                          : parseInt(e.target.value)
                        : whitelistCount
                    )
                  }
                />

                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setWhitelistCount(
                      whitelistCount + 1 >= 1 ? whitelistCount + 1 : 1
                    )
                  }
                >
                  +
                </button>
              </div>

              <button
                className={styles.button}
                type="button"
                onClick={() => claimWhitelist()}
              >
                {1000 * whitelistCount} $BLOCK
              </button>
            </div>

            <div className={styles.card}>
              <div className={styles.image}>
                <Image src="/block.png" alt="plot" width={64} height={64} />
              </div>
              <p className={styles.itemTitle}>Claim plot</p>
              <p className={styles.itemDescription}>
                Claim a plot of land in our survival world
              </p>

              <div className={styles.quantityContainer}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setPlotCount(plotCount - 1 >= 1 ? plotCount - 1 : 1)
                  }
                >
                  -
                </button>

                <input
                  className={styles.button}
                  value={plotCount}
                  onChange={(e) =>
                    setPlotCount(
                      e.target.value === "" || regex.test(e.target.value)
                        ? e.target.value === ""
                          ? ""
                          : parseInt(e.target.value)
                        : plotCount
                    )
                  }
                />

                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setPlotCount(plotCount + 1 >= 1 ? plotCount + 1 : 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className={styles.button}
                type="button"
                onClick={() => claimPlot()}
              >
                {1000 * plotCount} $BLOCK
              </button>
            </div>

            <div className={styles.card}>
              <div className={styles.image}>
                <Image
                  src="/diamond_sword.png"
                  alt="kit"
                  width={64}
                  height={64}
                />
              </div>
              <p className={styles.itemTitle}>Claim PvP kit</p>
              <p className={styles.itemDescription}>
                Claim a PvP kit to enhance your game experience
              </p>

              <p className={styles.itemDescription}>$1000</p>

              <div className={styles.quantityContainer}>
                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setKitCount(kitCount - 1 >= 1 ? kitCount - 1 : 1)
                  }
                >
                  -
                </button>

                <input
                  className={styles.button}
                  value={kitCount}
                  onChange={(e) =>
                    setKitCount(
                      e.target.value === "" || regex.test(e.target.value)
                        ? e.target.value === ""
                          ? ""
                          : parseInt(e.target.value)
                        : kitCount
                    )
                  }
                />

                <button
                  className={styles.button}
                  type="button"
                  onClick={() =>
                    setKitCount(kitCount + 1 >= 1 ? kitCount + 1 : 1)
                  }
                >
                  +
                </button>
              </div>

              <button
                className={styles.button}
                type="button"
                onClick={() => claimKit()}
              >
                {1000 * kitCount} $BLOCK
              </button>
            </div>
          </>
        ) : (
          <>
            {" "}
            <span>You need to be connected</span>
            <button onClick={connectWalletHandler}>Connect wallet</button>{" "}
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
