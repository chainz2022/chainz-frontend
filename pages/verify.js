import Head from "next/head";
import React, { useState } from "react";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";
import { useRouter } from "next/router";
import { ethers } from "ethers";
import Layout from "../components/Layout";

export default function Verify() {
  const { wallet, connectWalletHandler, fetchPlayer } = useContext(WalletContext);

  const router = useRouter();
  const { token } = router.query;
  const [error, setError] = useState();
  const [connected, setConnected] = useState(false);

  const signMessage = async ({ message }) => {
    try {
      if (!window.ethereum) throw new Error("No crypto wallet found. Please install it.");

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

  const verifyTokenWithDb = async sig => {
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        token: sig.message,
        signer: sig.address,
        signature: sig.signature,
      }),
    };
    fetch("https://mechabrawlers.com:8443/player/verify-token", requestOptions).then(response => {
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
    <>
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        {wallet ? (
          <div className={""}>
            {connected ? (
              <span>Wallet connected! Re-login to the Chainz Minecraft to start playing</span>
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
      </Layout>
    </>
  );
}
