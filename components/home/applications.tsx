import Image from "next/image";
import BackgroundImage from "@/public/Images/home/applications/background.png";
import VisualProImage from "@/public/Images/home/applications/vision-pro.png";
import ToursIcon from "@/public/Images/home/applications/Tour-Icon.png";
import RealisticIcon from "@/public/Images/home/applications/Simulations-Icon.png";
import SimulationIcon from "@/public/Images/home/applications/Clip-path-group.png";

const Aplications = () => {
  return (
    <div className="flex flex-col items-center justify-center">
      <div className="h-full w-[90%] relative">
        <Image
          src={BackgroundImage}
          alt=""
          className=" hidden md:block absolute w-full h-full"
        />

        <div className="grid grid-cols-1 p-8 gap-10 w-full relative">
          <div className="bg-zinc-800 grid grid-cols-1 md:flex md:flex-row md:h-[200px] md:w-[60%] rounded-xl p-4 md:ml-24 items-center">
            <div className=" w-20 h-20 bg-gradient-to-r from-[#192c73]  via-[#1ea9ed] to-[#2e4ea9] rounded-full flex justify-center items-center">
              <Image src={ToursIcon} alt="" width={60} />
            </div>
            <div className="flex flex-col gap-4 mt-4 md:ml-8 md:w-[80%]">
              <div className="w-full  text-amber-300 text-[32px] lg:text-[28px] font-extrabold font-['Inter'] leading-tight">
                Tours
              </div>
              <div className="w-full text-white text-[26px] lg:text-[24px] font-medium font-['Inter'] leading-[35px]">
                When people cannot come to your location, send your location to
                the people. Virtual reality makes people feel like they are
                there.
              </div>
            </div>
          </div>
          <div className="grid grid-cols-1 md:flex md:flex-row md:ml-10 w-full">
            <div className="bg-zinc-800 rounded-xl p-4 grid grid-cols-1 md:flex md:flex-row items-center ">
              <div className="w-20 h-20 bg-gradient-to-r from-[#192c73]  via-[#1ea9ed] to-[#2e4ea9] rounded-full flex justify-center items-center">
                <Image src={RealisticIcon} alt="" width={60} />
              </div>
              <div className="flex flex-col gap-4 md:ml-8 w-[95%]">
                <div className=" mt-4 text-amber-300 text-[32px] lg:text-[28px] font-extrabold font-['Inter'] leading-tight">
                  Realistic Simulations
                </div>
                <div className=" text-white text-[26px] lg:text-[24px] font-medium font-['Inter'] leading-[35px]">
                  Say goodbye to outdated methods and hello to a whole new world
                  of interactive, engaging experiences.
                </div>
              </div>
            </div>
            <Image
              src={VisualProImage}
              alt=""
              className="hidden md:block md:w-[250px] md:h-[200px] lg:w-[400px] lg:h-[250px] ml-8"
            />
          </div>
          <div className="grid grid-cols-1 md:flex md:flex-row w-full">
            <div className="bg-zinc-800 grid grid-cols-1 md:flex md:flex-row  md:w-[60%] rounded-xl p-4 md:ml-24 items-center">
              <div className="w-20 h-20 bg-gradient-to-r from-[#192c73]  via-[#1ea9ed] to-[#2e4ea9] rounded-full flex justify-center items-center">
                <Image src={SimulationIcon} alt="" width={60} />
              </div>
              <div className="flex flex-col gap-4 md:ml-8 w-[90%]">
                <div className=" mt-4 text-amber-300 text-[32px] lg:text-[28px] font-extrabold font-['Inter'] leading-tight">
                  Product Demos
                </div>
                <div className=" text-white text-[26px] lg:text-[24px] font-medium font-['Inter'] leading-[35px]">
                  Launching a new product or showcasing an existing one, VR
                  demos will captivate your audience and leave a lasting
                  impression.
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Aplications;
