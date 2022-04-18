import Head from "next/head";
import React from "react";
import Avatar from "react-minecraft-skin-viewer";
import { useContext } from "react";
import WalletContext from "../../contexts/WalletContext";
import Layout from "../../components/Layout";

export default function Dashboard() {
  const { wallet, player, connectWalletHandler } = useContext(WalletContext);

  return (
    <div className="h-full bg-black">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {player ? (
          <>
            <div className="">
              <div className="">
                <span>Multiplier</span>
                <span>{"x" + player.multiplier}</span>
              </div>

              <div className="">
                <span>Balance</span>
                <span>{"x" + player.coins}</span>
              </div>
            </div>

            <div className="">
              <span>{player.name}</span>
              <div className="">
                <Avatar rotate={true} width={400} height={550} uuid={player.uuid} />
              </div>
              <span>Join the server and start earning! IP: 132.226.157.221</span>
            </div>

            <div className="">
              <span>Your companions</span>
              <span className="">You don&apos;t have any companions in your wallet</span>
            </div>
          </>
        ) : wallet ? (
          <div className="">
            <span>Wallet not connected to minecraft account</span>
            <div className="">
              <Avatar rotate={true} width={400} height={550} />
            </div>
            <span>
              Connect to our minecraft server and type /verify to link your account to your wallet
            </span>
          </div>
        ) : (
          <>
            <span>You need to be connected</span>
            <button onClick={connectWalletHandler}>Connect wallet</button>
          </>
        )}
      </Layout>
    </div>
  );
}
