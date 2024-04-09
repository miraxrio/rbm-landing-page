import React from "react";
import Head from "next/head";

//components

// assets
import favicon from "@/public/favicon.ico";
import Header from "@/components/header";
import Footer from "@/components/footer";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <Head>
        <title>RBM</title>
        <meta name="title" content="RBM" />
        <meta name="description" content="RBM" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href={favicon.src} />
      </Head>      

      <Header />
      <main>{children}</main>
      <Footer />
      
    </>
  );
};

export default Layout;
