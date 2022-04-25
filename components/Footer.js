import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="z-50">
      <a className="m-2" href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <Image src="/discord-white.svg" alt="Discord" width={24} height={24} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image src="/twitter-white.svg" alt="Twitter" width={24} height={24} />
      </a>
    </footer>
  );
};

export default Footer;
