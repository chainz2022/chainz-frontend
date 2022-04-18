import React, { useState } from "react";
import Head from "next/head";
import Layout from "../../components/Layout";

export default function Whitepaper() {
  return (
    <div className="h-full bg-black">
      <Head>
        <title>Chainz App</title>
        <meta name="description" content="Chainz app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Layout>
        <h3>Whitepaper</h3>
      </Layout>
    </div>
  );
}
