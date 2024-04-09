import Image, { StaticImageData } from "next/image";
import React, { FC } from "react";
//asset
import p1 from "@/public/Images/clients/p1.png";
import p2 from "@/public/Images/clients/p2.png";
import p3 from "@/public/Images/clients/p3.png";

interface Props {
  name: string;
  description: string;
  Icon: StaticImageData;
  rol: string;
}

const Card: FC<Props> = ({ name, description, Icon, rol }) => {
  return (
    <div className="text-white relative p-[1.5rem] w-auto  lg:px-[1rem] border border-[#B8B8B8] lg:py-[1.5rem]  lg:w-full rounded-[1rem] overflow-hidden md:h-[18.75rem]  lg:h-[13.25rem]  ">
      <div className="flex flex-col  gap-6 h-full cursor-pointer ">
        <div className="flex  gap-4 items-center">
          <div className={`w-max rounded-full `}>
            <Image className="h-[2.75rem] w-auto" src={Icon} alt="image" />
          </div>
          <div className="flex flex-col">
            <span className="text-base  font-medium">{name}</span>
            <span className="text-[0.875rem] text-white text-opacity-60  ">{rol}</span>
          </div>
        </div>

        <p className="text-opacity-70 text-base font-normal font-['Inter'] leading-normal ">
          {description}
        </p>
      </div>
    </div>
  );
};
const Clients = () => {
  return (
    <section className="font-roboto max-w-[80rem] mt-20 px-6 sm:px-8 lg;px-20 mx-auto  mb-[5rem] sm:mb-[6.25rem] lg:mb-[9.38rem]">
      <div className=" h-[60.21px] text-center text-neutral-50 text-4xl font-bold font-['Inter'] leading-[46.80px]">
        Ask Our Clients
      </div>
      <div className=" grid grid-cols-1 sm:flex mt-[1.88rem] gap-4">
        <Card
          name="Sebastian Galindo"
          rol="CEO @SS Ventures"
          description="The team at MiraXR is truly amazing. They’ve built an all in one platform for our software solutions in the VR space which is awesome."
          Icon={p1}
        />
        <Card
          name="Saul Vargas"
          rol="CTO @AI Lab"
          description="The team at MiraXR truly understands the power of visual storytelling and has helped us create compelling marketing materials that engage our audience."
          Icon={p2}
        />
        <Card
          name="Jhon Jallaza"
          rol="SVP Engineering @CRP Technologies"
          description="My team and i are excited to have a software like MiraXR in our roadmap. We will start our training process with this technology and it’ll make our life way easier. "
          Icon={p3}
        />
      </div>
    </section>
  );
};

export default Clients;
