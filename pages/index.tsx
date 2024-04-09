import Image from "next/image";
import { Inter } from "next/font/google";
import Head from "next/head";
import Main from "@/components/home/main";
import Companies from "@/components/home/companies";
import Offer from "@/components/home/offer";
import UsesCases from "@/components/home/usesCases";
import Services from "@/components/home/services";
import Aplications from "@/components/home/applications";
import ClientsContent from "@/components/home/clients-content";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "RBM | Home",
  description: "RBM",
  keywords: "RBM",
  robots: "index, follow",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function Home() {
  return (
    <>
      <Head>
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
        <meta name="keywords" content={metadata.keywords} />
        <meta name="robots" content={metadata.robots} />
        <meta name="viewport" content={metadata.viewport} />
      </Head>
      <div className="bg-black">
        <Main />
        <Companies />
        <Offer />
        <UsesCases />
        <Services />
        <Aplications />
        <ClientsContent />
      </div>
    </>
  );
}
