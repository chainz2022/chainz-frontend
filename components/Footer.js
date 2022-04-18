import Image from "next/image";
import React from "react";

const Footer = () => {
  return (
    <footer className="">
      <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
        <Image src="/discord-white.svg" alt="Discord" width={32} height={16} />
      </a>
      <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
        <Image src="/twitter-white.svg" alt="Twitter" width={32} height={16} />
      </a>
    </footer>
  );
};

export default Footer;
