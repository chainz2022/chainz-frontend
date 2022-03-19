import WalletContext from "../contexts/WalletContext";

import { useState } from "react";

function WalletContextWrapper({ children }) {
  const [errorMessage, setErrorMessage] = useState(null);
  const [wallet, setWallet] = useState(null);

  const connectWalletHandler = () => {
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
      console.log("Need to install MetaMask");
      setErrorMessage("Please install MetaMask browser extension to interact");
    }
  };

  // update wallet, will cause component re-render
  const walletChangedHandler = (newWallet) => {
    setWallet(newWallet);
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
        connectWalletHandler,
        walletChangedHandler,
        chainChangedHandler,
      }}
    >
      {children}
    </WalletContext.Provider>
  );
}

export default WalletContextWrapper;
