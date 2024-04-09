import Image from "next/image";
import Background from "@/public/Images/home/usesCases/background.png";
import UsesCasesCard from "./usesCasesCard";

import AwsIcon from "@/public/Images/home/usesCases/aws-icon.png";
import WindowsIcon from "@/public/Images/home/usesCases/windows.png";
import ExtremeIcon from "@/public/Images/home/usesCases/extreme-networks-icon.png";
import DellIcon from "@/public/Images/home/usesCases/dell-icon.png";
import TrendIcon from "@/public/Images/home/usesCases/trend-icon.png";

const UsesCases = () => {
  return (
    <div className="relative h-full w-full">
      <Image src={Background} alt="" className="absolute w-full h-full" />
      <div className="flex flex-col relative w-full">
        <div className="text-center  text-neutral-50 text-4xl font-bold font-['Inter']">
          <div className="mt-12">Use Cases</div>
        </div>
        <div className="flex flex-col items-center mt-12">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UsesCasesCard title="IoT For Industry 4.0" image={AwsIcon} />
            <UsesCasesCard title="Cyber Security" image={WindowsIcon} />
          </div>
          <div className="grid grid-cols-1 mt-8 ">
            <UsesCasesCard title="Wireless Networking" image={ExtremeIcon} />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-12">
            <UsesCasesCard title="Product Launch" image={DellIcon} />
            <UsesCasesCard title="Enablement" image={TrendIcon} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesCases;
