import Image from "next/image";
import BackgroundImage from "@/public/Images/home/main/background.png";

const Main = () => {
  return (
    <section className="w-full">
      <div className="flex flex-col bg-black w-full items-center relative">
        <Image
          src={BackgroundImage}
          alt=""
          className="absolute h-full w-full"
        />
        <div className="relative w-[70%]">
          <div className="flex flex-col mt-52 gap-2">
            <div className="text-neutral-50 text-left text-6xl md:text-[128px] font-bold font-['Iowan Old Style'] md:leading-[70px]">
              Immersive
            </div>
            <div className="text-left text-neutral-50 text-7xl md:text-[175px] font-bold font-['Iowan Old Style'] md:leading-[150px]">
              Media
            </div>
            <div className="text-left text-neutral-50 text-6xl md:text-[128px] font-bold font-['Iowan Old Style'] md:leading-[100px]">
              Studio
            </div>
          </div>
          <div className="text-white text-xl font-medium font-['Inter'] leading-tight mt-24 border-t border-white p-2 mb-40">
            Virtual Reality | Augmented Reality | Mixed Reality
          </div>
        </div>
      </div>
    </section>
  );
};

export default Main;
