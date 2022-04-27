import Head from "next/head";
import Purple from "../components/ColorText";
import GText from "../components/GText";
import Layout from "../components/Layout";
import Image from "next/image";
import Feature from "../components/Landing/Feature";

export default function Home() {
  return (
    <div className="h-full bg-[url('/background2.png')] bg-no-repeat bg-center bg-cover relative">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Landing Screen */}
      <Layout withFixedNavbar={true}>
        <div className="w-10/12 mx-auto h-full text-white flex flex-col justify-center">
          <h3 className="text-xl text-shadow mb-3vh mt-15vh 2xl:mt-10vh 2xl:text-3xl">
            1.5.22 | 00:00 | UTC{" "}
          </h3>
          <h1 className="text-[4.2rem] font-minecrafter text-shadow 2xl:text-[6.5rem]">
            ChainZ Network
          </h1>
          <h2 className="text-2xl mb-10vh 2xl:mb-17vh relative top-[-10px] 2xl:text-3xl">
            Minecraft <Purple>play-to-earn</Purple>
          </h2>
          <h2 className="text-xl mb-5vh 2xl:text-2xl">
            Join freely our fast-growing metaverse, win on-chain tokens while playing
            <br /> Own unique custom <Purple>NFT's</Purple> and <Purple>plots</Purple> in the
            Ethereum blockchain.
          </h2>
          <button className="specialButton text-lg py-2.5 w-2/12 font-minecraft min-w-[200px] 2xl:text-[1.4rem] 2xl:py-4">
            mc.chainz.xyz
          </button>
        </div>
      </Layout>
      <div className="absolute bg-gradient-to-b from-transparent via-black/50 to-black w-full h-1/3 bottom-0" />
      <div className="absolute bg-gradient-to-l from-transparent via-black/50 to-black/50 w-2/3 h-full bottom-0" />
      {/* Landing Screen */}

      {/* Presentation screen */}
      <div className="w-full h-auto bg-[url('/purple-gradient.png')] bg-no-repeat bg-center bg-cover pt-10">
        <Feature />
        <Feature reverse={true} />
        <Feature />
        <Feature reverse={true} />
      </div>
      {/* Presentation screen */}
    </div>
  );
}
