import React from "react";
import Image from "next/image";

const Feature = ({ reverse}) => {
  return (
    <div
      className={`w-10/12 2xl:w-9/12 mx-auto h-[500px] flex items-center justify-between text-center ${
        reverse && "flex-row-reverse"
      }`}
    >
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
        <span className="">
          <Image
            className="z-10"
            src="/adventurer2.png"
            width="400"
            height="250"
          />
        </span>

        <div className="featureGradient !left-[-60%]"></div>
      </div>
      {/* feature image */}
      {/* feature text */}
      <div className="max-w-xl">
        <h3 className="text-[2.8rem] font-semibold text-purple-600">Gain on-chain tokens</h3>
        <p className="text-white text-[1.35rem] 2xl:text-2xl max-w-lg">
          Have fun playing with your friends our multiple game-modes and buy our NFT's, plots for
          the survival and ... do something crazy idk
        </p>
      </div>
      {/* feature text */}
    </div>
  );
};

export default Feature;
