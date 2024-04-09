import Image from "next/image";
import BackgroundImage from "@/public/Images/home/offer/background.png";
import ArrowIcon from "@/public/Images/home/offer/arrow-icon.png";
import DolarIcon from "@/public/Images/home/offer/dollar-Icon.png";
import DeployIcon from "@/public/Images/home/offer/deploy-icon.png";
import CreativeIcon from "@/public/Images/home/offer/creative-Icon.png";
import HardwareIcon from "@/public/Images/home/offer/hardware-icon.png";

const offerItem = [
  {
    id: 1,
    tittle: "Cost",
    subtittle: "Experience",
    image: DolarIcon,
    list: ["Modular Design", "Large Asset Library", "Unique Pricing Model"],
  },
  {
    id: 2,
    tittle: "Deployment",
    subtittle: "Knowledge",
    image: DeployIcon,
    list: [
      "Meet In Virtual Reality",
      "Realistic Simulations",
      "Deep Analytics",
    ],
  },
  {
    id: 3,
    tittle: "Creative Talent",
    subtittle: "Unmatched",
    image: CreativeIcon,
    list: ["VR/AR Storytellers", "VR/AR Designers", "VR/AR Developers"],
  },
  {
    id: 4,
    tittle: "Hardware",
    subtittle: "Fulfillment",
    image: HardwareIcon,
    list: ["Full Service", "Platform", "Cost Effective"],
  },
];

const Offer = () => {
  return (
    <div className="relative h-full w-full border-t border-[#585858]">
      <Image src={BackgroundImage} alt="" className="absolute w-full h-full" />
      <div className="flex flex-col items-center relative">
        <div className="md:w-[729.70px] h-[60.21px] mt-20 mb-10 text-center text-neutral-50 text-4xl font-bold font-['Inter'] leading-[46.80px]">
          We Offer Solutions
        </div>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-4 mb-24">
          {offerItem.map((item) => (
            <div
              key={item.id}
              className="w-[250px] h-[482px] bg-zinc-800 rounded-[59px]"
            >
              <div className="flex flex-col items-center justify-center p-4 mt-4">
                <div className="w-32 h-32  bg-gradient-to-r from-[#192c73]  via-[#1ea9ed] to-[#2e4ea9] rounded-full flex justify-center items-center">
                  <Image src={item.image} alt=""  />
                </div>
                <div className="text-center mt-8 text-amber-300 text-[25px] font-extrabold font-['Inter'] leading-tight">
                  {item.tittle}
                </div>
                <div className="text-white text-[23px] font-medium font-['Inter'] leading-[35px]">
                  {item.subtittle}
                </div>
              </div>

              {item.list.map((line) => (
                <div
                  key={line}
                  className="flex flex-row  ml-5 items-center gap-2"
                >
                  <Image src={ArrowIcon} width={50} alt="" />
                  <div className="text-center text-white text-md font-bold font-['Inter']">
                    {line}
                  </div>
                </div>
              ))}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Offer;
