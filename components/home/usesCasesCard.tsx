import Image, { StaticImageData } from "next/image";

type UseCaseCardProp = {
  title: string;
  image: StaticImageData;
  text: string;
};

const UsesCasesCard = ({ title, image, text }: UseCaseCardProp) => {
  return (
    <div className="md:w-[533px]  bg-neutral-800 rounded-[56px] p-4">
      <div className="flex flex-col items-center p-4">
        <Image src={image} alt="" />
      </div>
      <div className="flex flex-col ml-8 mr-8 ">
        <div className="text-white text-2xl text-left font-normal font-['Inter'] leading-7">
          {title}
        </div>
        <div className="text-white text-left text-base mt-4 font-normal font-['Inter'] leading-[25px]">
          {text}
        </div>
      </div>
    </div>
  );
};

export default UsesCasesCard;
