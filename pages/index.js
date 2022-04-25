import Head from "next/head";
import Purple from "../components/ColorText";
import GText from "../components/GText";
import Layout from "../components/Layout";
import Image from "next/image";

export default function Home() {
  return (
    <div className="h-full bg-[url('/background2.png')] bg-no-repeat bg-center bg-cover relative">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {/* Landing Screen */}
      <Layout>
        <div className="w-10/12 mx-auto h-full text-white flex flex-col justify-center">
          <h3 className="text-2xl text-shadow mb-3vh">1.5.22 | 00:00 | UTC </h3>
          <h1 className="text-[4.2rem] font-minecrafter text-shadow ">ChainZ Network</h1>
          <h2 className="text-2xl mb-10vh relative top-[-10px]">
            Minecraft <Purple>play-to-earn</Purple>
          </h2>
          <h2 className="text-xl mb-5vh">
            Join freely our fast-growing metaverse, win on-chain tokens while playing
            <br /> Own unique custom <Purple>NFT's</Purple> and <Purple>plots</Purple> in the
            Ethereum blockchain.
          </h2>
          <button className="specialButton py-2 w-2/12 font-minecraft ">mc.chainz.xyz</button>
        </div>
      </Layout>
      <div className="absolute bg-gradient-to-b from-transparent via-black/50 to-black w-full h-1/3 bottom-0" />
      <div className="absolute bg-gradient-to-l from-transparent via-black/50 to-black/50 w-2/3 h-full bottom-0" />
      {/* Landing Screen */}

      {/* Presentation screen */}
      <div className="w-full h-auto bg-[url('/purple-gradient.png')] bg-no-repeat bg-center bg-cover">
        {/* feature */}
        <div className="w-10/12 mx-auto h-70vh flex items-center justify-between">
          {/* feature image */}
          <div className="relative">
            <span className="z-10 coin top-[10px] left-[25px]">
              <Image src="/bitcoin.webp" width="24" height="24" />
            </span>
            <span className="z-10 coin top-[35px] left-[60px]">
              <Image src="/bitcoin.webp" width="24" height="24" />
            </span>
            <span className="z-10 coin top-[60px] left-[15px]">
              <Image src="/bitcoin.webp" width="24" height="24" />
            </span>
            <Image className="z-10" src="/adventurer2.png" width="320" height="200" />
            <div className="featureGradient !left-[-60%]"></div>
          </div>
          {/* feature image */}
          {/* feature text */}
          <div className="max-w-xl">
            <h3 className="text-[3rem] font-semibold text-purple-700 mb-3">Gain on-chain tokens</h3>
            <p className="text-white">
              Have fun playing with your friends our multiple game-modes and buy our NFT's, plots
              for the survival and blabla bla aguante el paco esta va a ser una tremenda feature muy
              buena comprala dale me canse de escribir
            </p>
          </div>
          {/* feature text */}
        </div>
        {/* feature */}
        <div className="w-10/12 mx-auto h-70vh border-2 flex items-center justify-between flex-row-reverse"></div>
        <div className="w-10/12 mx-auto h-70vh border-2 flex items-center justify-between"></div>
      </div>
      {/* Presentation screen */}
    </div>
  );
}
