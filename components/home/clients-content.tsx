import Image from "next/image";
import Background from "@/public/Images/home/clients/clients.png";
import Experience from "./experience";
import Clients from "./clients";

const ClientsContent = () => {
  return (
    <div className="relative flex flex-col">
      <Image src={Background} alt="blur" className="absolute w-full h-full" />
      <div className="relative mb-12">
        <Clients />
        <Experience />
      </div>
    </div>
  );
};

export default ClientsContent;
