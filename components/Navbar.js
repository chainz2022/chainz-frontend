import React from "react";
import Link from "next/link";
import { useContext, useState, useEffect } from "react";
import Image from "next/image";
import WalletContext from "../contexts/WalletContext";
import { __SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED } from "react-dom";
import useWindowSize from "../hooks/useWindowSize";

export default function Navbar({ centered, withFixedNavbar }) {
  const { shortWallet, connectWalletHandler } = useContext(WalletContext);
  const [showNavbarBackground, showShowNavbarBackground] = useState(false);
  const [width, height] = useWindowSize();
  console.log(width);
  const transitionNavBar = () => {
    if (withFixedNavbar) {
      if (window.scrollY > 100) {
        showShowNavbarBackground(true);
      } else {
        showShowNavbarBackground(false);
      }
    }
  };

  useEffect(() => {
    // Only applies if fixed navbar is needed. -> increased performance.
    withFixedNavbar && window.addEventListener("scroll", transitionNavBar);
    return () => withFixedNavbar && window.removeEventListener("scroll", transitionNavBar);
  }, []);

  return (
    <nav
      className={`w-full z-50 fixed top-0 transition-all ease-in-out duration-300 ${
        showNavbarBackground && "bg-gradient-to-b from-black/50 via-black/50 to-black/0"
      }`}
    >
      <ul className="z-50 w-10/12 mx-auto flex items-center justify-between font-minecraft text-white text-[1.2rem] 2xl:text-[1.45rem] child-hover:drop-shadow-[0_0_2px_rgba(200,0,200,0.7)]">
        {!centered && (
          <li className="relative top-[1px] mr-20">
            <Link href="/">
              <a>
                {width <= 1536 ? (
                  <Image src="/logo.png" alt="whitelist" width={96} height={96} />
                ) : (
                  <Image src="/logo.png" alt="whitelist" width={128} height={128} />
                )}
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
                {width <= 1536 ? (
                  <Image src="/logo.png" alt="whitelist" width={96} height={96} />
                ) : (
                  <Image src="/logo.png" alt="whitelist" width={128} height={128} />
                )}
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
            <a className="flex items-center">
              {shortWallet || "Connect wallet"}
              {!shortWallet && (
                <span className="ml-2 top-[3px] relative">
                  <Image src="/minecraftwallet.webp" width="38" height="38" />
                </span>
              )}
            </a>
          </li>
        </button>
      </ul>
    </nav>
  );
}
