import Image from "next/image";
import Link from "next/link";
import React from "react";
import CalendlyDialog from "../calendly-dialog";

import Background from "@/public/Images/home/experience/footer-background.png";

const Experience = () => {
  return (
    <div className="flex flex-col items-center">
      <div className="relative h-full  w-[80%]">
        <Image src={Background} alt="blur" className="absolute w-full h-full" />
        <div className="relative p-12 flex flex-col md:flex-row items-center">
          <div className="flex-col justify-start items-start gap-4 inline-flex w-full">
            <div className="text-white text-[45px] md:text-[50px] font-medium font-['Inter'] leading-[65px]">
              Experience the Future
            </div>
            <div className="text-white text-lg font-normal font-['Inter'] leading-7">
              Dive into Realistic Simulations with MIRA Today!
            </div>
          </div>
          <div className="mt-8 mb-8">
            <CalendlyDialog
              text="Book a Demo"
              classNameButton="text-black text-2xl md:text-xl font-medium font-poppins leading-[16.80px] tracking-wider h-[60px] md:h-[2.25rem] w-max bg-white px-[0.73rem] rounded-full"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Experience;
