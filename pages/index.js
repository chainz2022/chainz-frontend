import Head from "next/head";
import Layout from "../components/Layout";

export default function Home() {
  return (
    <div className="h-full bg-[url('/background2.png')] bg-no-repeat bg-center bg-cover relative">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h1 className="text-3xl mb-2">ChainZ Network</h1>
        <h2 className="text-2xl mb-2">Minecraft P2E</h2>

        <div>
          <p className="">1. Join minecraft server IP: 132.226.157.221</p>
          <p className="">
            2. /verify in-game to connect wallet to minecraft and start earning coins
          </p>
        </div>
      </Layout>
      <div className="absolute bg-gradient-to-b from-transparent to-black w-full h-96 bottom-0"></div>
      <div className="w-full h-100vh bg-black"></div>
    </div>
  );
}
