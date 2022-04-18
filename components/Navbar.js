import React from "react";
import Link from "next/link";
import { useContext } from "react";
import WalletContext from "../contexts/WalletContext";
import Image from "next/image";

export default function Navbar() {
  const { shortWallet, connectWalletHandler } = useContext(WalletContext);

  return (
    <ul className="text-white text-[1.35rem] w-7/12 flex items-center justify-between ">
      {/* <li className="">
        <Link href="/">
          <a>Home</a>
        </Link>
      </li> */}

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

      <li className="relative top-[4px]">
        <Link href="/">
          <a>
            <Image src="/logo.png" alt="whitelist" width={100} height={100} />
          </a>
        </Link>
      </li>

      <li className="">
        <Link href="/">
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
