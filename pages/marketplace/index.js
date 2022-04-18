import React, { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import { useContext } from "react";
import WalletContext from "../../contexts/WalletContext";
import Layout from "../../components/Layout";

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
    <div className="h-full bg-black">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Layout>
        {wallet ? (
          <>
            <div className="">
              <div className="">
                <Image src="/paper.png" alt="whitelist" width={64} height={64} />
                
              </div>
              <p className="">Claim whitelist</p>
              <p className="">
                Boost your earnings multiplier. Claim a spot to mint one of our NFT companions
              </p>

              <div className="">
                <button
                  className=""
                  type="button"
                  onClick={() =>
                    setWhitelistCount(whitelistCount - 1 >= 1 ? whitelistCount - 1 : 1)
                  }
                >
                  -
                </button>

                <input
                  className=""
                  value={whitelistCount}
                  onChange={e =>
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
                  className=""
                  type="button"
                  onClick={() =>
                    setWhitelistCount(whitelistCount + 1 >= 1 ? whitelistCount + 1 : 1)
                  }
                >
                  +
                </button>
              </div>

              <button className="" type="button" onClick={() => claimWhitelist()}>
                {1000 * whitelistCount} COINS
              </button>
            </div>

            <div className="">
              <div className="">
                <Image src="/block.png" alt="plot" width={64} height={64} />
              </div>
              <p className="">Claim plot</p>
              <p className="">Claim a plot of land in our survival world</p>

              <div className="">
                <button
                  className=""
                  type="button"
                  onClick={() => setPlotCount(plotCount - 1 >= 1 ? plotCount - 1 : 1)}
                >
                  -
                </button>

                <input
                  className=""
                  value={plotCount}
                  onChange={e =>
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
                  className=""
                  type="button"
                  onClick={() => setPlotCount(plotCount + 1 >= 1 ? plotCount + 1 : 1)}
                >
                  +
                </button>
              </div>

              <button className="" type="button" onClick={() => claimPlot()}>
                {1000 * plotCount} COINS
              </button>
            </div>

            <div className="">
              <div className="">
                <Image src="/diamond_sword.png" alt="kit" width={64} height={64} />
              </div>
              <p className="">Claim PvP kit</p>
              <p className="">Claim a PvP kit to enhance your game experience</p>

              <p className="">$1000</p>

              <div className="">
                <button
                  className=""
                  type="button"
                  onClick={() => setKitCount(kitCount - 1 >= 1 ? kitCount - 1 : 1)}
                >
                  -
                </button>

                <input
                  className=""
                  value={kitCount}
                  onChange={e =>
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
                  className=""
                  type="button"
                  onClick={() => setKitCount(kitCount + 1 >= 1 ? kitCount + 1 : 1)}
                >
                  +
                </button>
              </div>

              <button className="" type="button" onClick={() => claimKit()}>
                {1000 * kitCount} COINS
              </button>
            </div>
          </>
        ) : (
          <>
            <span>You need to be connected</span>
            <button onClick={connectWalletHandler}>Connect wallet</button>{" "}
          </>
        )}
      </Layout>
    </div>
  );
}
