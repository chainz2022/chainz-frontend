import React from "react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import WalletContext from "../contexts/WalletContext";

export default function Navbar({ centered }) {
  const { shortWallet, connectWalletHandler } = useContext(WalletContext);
  const [showNavbarBackground, showShowNavbarBackground] = useState(false);

  return (
    <ul className="z-50 text-white text-[1.2rem] w-10/12 flex items-center justify-between font-minecraft child-hover:drop-shadow-[0_0_2px_rgba(200,0,200,0.7)]">
      {!centered && (
        <li className="relative top-[1px] mr-20">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="whitelist" width={96} height={96} />
            </a>
          </Link>
        </li>
      )}
      <li className="">
        <Link href="/marketplace">
          <a>Marketplace</a>
        </Link>
      </li>

      <li className="">
        <Link href="/whitepaper">
          <a>Whitepaper</a>
        </Link>
      </li>

      {centered && (
        <li className="relative top-[1px]">
          <Link href="/">
            <a>
              <Image src="/logo.png" alt="whitelist" width={96} height={96} />
            </a>
          </Link>
        </li>
      )}

      <li className="">
        <Link href="/dashboard">
          <a>Dashboard</a>
        </Link>
      </li>

      <button onClick={connectWalletHandler}>
        <li className="">
          <a>{shortWallet || "Connect wallet"}</a>
        </li>
      </button>
    </ul>
  );
}
