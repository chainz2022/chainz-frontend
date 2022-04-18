import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <>
      <Head>
        <title >Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout className="bg-red-200">
        <h1 className="">ChainZ Network</h1>
        <h2 className="">Minecraft P2E</h2>

        <div>
          <p className="">1. Join minecraft server IP: 132.226.157.221</p>
          <p className="">
            2. /verify in-game to connect wallet to minecraft and start earning coins
          </p>
        </div>
      </Layout>
    </>
  );
}
