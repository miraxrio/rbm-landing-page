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
            <UsesCasesCard
              title="IoT For Industry 4.0"
              image={AwsIcon}
              text="AWS was looking for a new way to show their IoT products and solutions for manufacturing plants. RBM collaborated with AWS to develop an interactive experience that showcased AWS IoT products for manufacturing plants through a guided tour of a facility. "
            />
            <UsesCasesCard
              title="Cyber Security"
              image={WindowsIcon}
              text="To incentivize the Connection sales team to enroll in the defender spiff program, Microsoft engaged RBM to create an immersive experience that introduced each Defender solution, tested users with attack simulations, and automatically enrolled them in the program upon completion."
            />
          </div>
          <div className="grid grid-cols-1 mt-8 ">
            <UsesCasesCard
              title="Wireless Networking"
              image={ExtremeIcon}
              text="Extreme Networks sought an effective way to educate their audience about the benefits of Wi-Fi 6 while engaging them. RBM’s immersive tour of Globe Life Stadium successfully engaged the audience, teaching them about the advantages of Wi-Fi 6."
            />
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mt-8 mb-12">
            <UsesCasesCard
              title="Product Launch"
              image={DellIcon}
              text="Dell aimed to introduce a new AMD processor to a large sales team while incentivizing attendance with entertainment. RBM’s immersive experience provided information about the new AMD processor and was followed by a bourbon tour for the sales team’s enjoyment."
            />
            <UsesCasesCard
              title="Enablement"
              image={TrendIcon}
              text="Users spent the day learning about Trend Micro security solutions in an AWS cloud environment. Trend Micro contracted RBM to create an enablement experience to test the users comprehension on the day’s material. "
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default UsesCases;
