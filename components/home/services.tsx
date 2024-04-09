import Image from "next/image";

import MiraXrImage from "@/public/Images/home/services/mira-image.png";
import BackgroundImage from "@/public/Images/home/services/background.png";
import CalendlyDialog from "../calendly-dialog";

const platformList = [
  "Virtual Reality, Augmented Reality, Mixed Reality",
  "Digital Twins",
  "360 Video Production",
  "Unity design and Developmeent",
  "NVIDIA Omniverse Development",
  "Headset Fulfillment Services",
];

const Services = () => {
  return (
    <div className="relative h-full w-full">
      <Image src={BackgroundImage} alt="" className="absolute w-full h-full" />
      <div className="flex flex-col items-center relative">
        <div className="text-center mt-20 text-neutral-50 text-4xl font-bold font-['Inter'] leading-[46.80px] p-2">
          Services
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 ">
          <div>
            <Image src={MiraXrImage} alt="" className="w-full" />
          </div>
          <div className="grid grid-cols-1 mt-10 p-8 md:p-0 divide-y justify-start items-start gap-2">
            {platformList.map((item) => (
              <div
                key={item}
                className="text-start text-xl text-white font-medium font-['Inter'] leading-tight"
              >
                <p className="mt-2">{item}</p>
              </div>
            ))}
            <div></div>
          </div>
        </div>
        <CalendlyDialog
          text="Book a Demo"
          classNameButton="text-black m-20 text-2xl md:text-xl font-medium font-poppins leading-[16.80px] tracking-wider h-[60px] md:h-[2.25rem] w-max bg-white px-[0.73rem] rounded-full"
        />
      </div>
    </div>
  );
};

export default Services;
