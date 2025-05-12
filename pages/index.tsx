import { Inter } from "next/font/google";
import Head from "next/head";
import Main from "@/components/home/main";
import SeeingData from "@/components/home/seeingData";
import FromIntelligence from "@/components/home/fromIntelligence";
import ImPreMatrix from "@/components/home/imPreMatrix";
import RealWorldImpact from "@/components/home/realWorldImpact";
import HowItWorks from "@/components/home/howItWorks";
import ImmersiveSolutions from "@/components/home/immersiveSolutions";
import ClientsSaying from "@/components/home/clientsSaying";
import BuildWithUs from "@/components/home/buildWithUs";
import WhoWeAre from "@/components/home/whoWeAre";
import ConversationBring from "@/components/home/conversationBring";

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
        <SeeingData />
        <FromIntelligence />
        <ImPreMatrix />
        <RealWorldImpact />
        <HowItWorks />
        <ImmersiveSolutions />
        <ClientsSaying />
        <BuildWithUs />
        <WhoWeAre />
        <ConversationBring />
      </div>
    </>
  );
}
