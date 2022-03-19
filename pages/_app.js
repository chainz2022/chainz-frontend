import "../styles/globals.css";
import WalletContextWrapper from "../components/WalletContextWrapper";

function MyApp({ Component, pageProps }) {
  return (
    <WalletContextWrapper>
      <Component {...pageProps} />
    </WalletContextWrapper>
  );
}

export default MyApp;
