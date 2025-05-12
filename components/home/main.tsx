import Image from "next/image";
import MainImage from "@/public/Images/home/main/main.png";

const Main = () => {
  return (
    <section className="w-full">
      <div className="flex flex-row w-full items-center relative border-b-2">
        <div className="relative flex flex-row p-8 mt-36 mb-28">
          <div className="flex-1">
            <div className="flex flex-col items-center justify-center">
              <div className="text-[#005789] text-sm font-sans tracking-widest">MODULAR • IMMERSIVE • ENTERPRISE-READY</div>
              <div className="mt-14 text-white font-[Inter-SemiBold,_Helvetica] text-center text-5xl font-semibold leading-[49px]">Where Real-World Data Meets Immersive Intelligence</div>
              <div className="mt-4 text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight leading-[24px] text-center w-[522px]">
                Running Bull Media helps enterprise teams train, plan, and operate with clarity—using digital twins, AI, and spatial computing to turn complexity into action.
              </div>
              <div className="flex flex-row items-center justify-center gap-8 border-b-2 p-4 mt-4 w-[500px]">
                <button className="bg-[#0D6AA1] text-white rounded-full h-[58px] p-4">Explore Solutions</button>
                <button className="bg-[#0D6AA1] text-white rounded-full h-[58px] p-4">Watch a Demo</button>
              </div>
              <div className="text-[#FF9D00] mt-8">
                Immersive Training  |  Predictive Simulation |  Enterprise Ready
              </div>
            </div>
          </div>
          <div className="flex-1">
            <Image src={MainImage} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
