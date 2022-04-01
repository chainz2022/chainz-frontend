import WalletContext from "../contexts/WalletContext";

import { useState, useEffect } from "react";

function WalletContextWrapper({ children }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [wallet, setWallet] = useState(null);
  const [player, setPlayer] = useState(null);

  useEffect(() => {
    connectWalletHandler();

    if (window.ethereum) {
      window.ethereum.on("accountsChanged", walletChangedHandler);

      window.ethereum.on("chainChanged", chainChangedHandler);
    }
  }, []);

  const connectWalletHandler = () => {
    if (!wallet) {
      if (window.ethereum && window.ethereum.isMetaMask) {
        window.ethereum
          .request({ method: "eth_requestAccounts" })
          .then((result) => {
            walletChangedHandler(result[0]);
          })
          .catch((error) => {
            setErrorMessage(error.message);
          });
      } else {
        alert(
          "Please install MetaMask to connect your wallet and start playing!"
        );
        setErrorMessage(
          "Please install MetaMask browser extension to interact"
        );
      }
    } else {
      setWallet(null);
      setPlayer(null);
    }
  };

  const walletChangedHandler = async (newWallet) => {
    setWallet(newWallet);
    if (newWallet) {
      await fetchPlayer(newWallet);
    }
  };

  const fetchPlayer = async (newWallet) => {
    const req = await fetch(
      "https://mechabrawlers.com:8443/player?wallet=" + newWallet
    );

    if (req.ok) {
      const data = await req.json();

      setPlayer(data);
    } else {
      setPlayer(null);
    }
  };

  const chainChangedHandler = () => {
    // reload the page to avoid any errors with chain change mid use of application
    window.location.reload();
  };

  return (
    <WalletContext.Provider
      value={{
        errorMessage,
        wallet,
        player,
        connectWalletHandler,
        fetchPlayer,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export default WalletContextWrapper;
