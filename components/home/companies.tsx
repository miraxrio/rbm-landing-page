import Image from "next/image";

import Background from "@/public/Images/home/companies/background.png";
import DolarIcon from "@/public/Images/home/companies/dollar-Icon.png";
import DeployIcon from "@/public/Images/home/companies/deploy-icon.png";
import CreativeIcon from "@/public/Images/home/companies/creative-Icon.png";
import HardwareIcon from "@/public/Images/home/companies/hardware-icon.png";

const CompaniesItems = [
  {
    icon: DolarIcon,
    title: "Cost",
    text: "Immersive experiences can be costly and call ROI into question",
    border: true,
  },
  {
    icon: DeployIcon,
    title: "Deployment",
    text: "In-house resources often lack knowledge to provide the best user experience",
    border: true,
  },
  {
    icon: CreativeIcon,
    title: "Creative Talent",
    text: "Creating immersive content for VR/AR experiences requires a different skill",
    border: true,
  },
  {
    icon: HardwareIcon,
    title: "Hardware",
    text: "A lack of headset adoption means companies must provide headsets",
    border: false,
  },
];

const Companies = () => {
  return (
    <div className="relative h-full w-full">
      <Image src={Background} alt="" className="absolute w-full h-full" />
      <div className="flex flex-col items-center relative">
        <div className="flex flex-col items-center ">
          <div className="w-[80%] md:w-[60%] lg:w-[50%] mt-14 text-center text-neutral-50 text-3xl lg:text-4xl font-bold font-['Inter'] leading-[46.80px]">
            Companies face challenges creating Immersive Experiences
          </div>
        </div>

        <div className="grid grid-col-1 md:grid-cols-4 p-12">
          {CompaniesItems.map((item) => (
            <div
              key={item.title}
              className={`flex flex-col justify-center items-center p-2  ${
                item.border ? "md:border-r-2" : ""
              }`}
            >
              <Image src={item.icon} alt="" />
              <div className="left-[41px] top-[112px] mt-6  text-center text-amber-300 text-2xl font-bold font-['Inter'] leading-[35px]">
                {item.title}
              </div>
              <div className="w-[240px] h-[70px] mt-4 left-0 top-[160px]  text-center text-white text-base font-bold font-['Inter'] leading-tight">
                {item.text}
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Companies;
