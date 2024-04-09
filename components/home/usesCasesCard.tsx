import Image, { StaticImageData } from "next/image";

type UseCaseCardProp = {
  title: string;
  image: StaticImageData;
};

const UsesCasesCard = ({ title, image }: UseCaseCardProp) => {
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
          AWS was looking for a new way to show their IoT products and solutions
          for manufacturing plants. RBM collaborated with AWS to develop an
          interactive experience that showcased AWS IoT products for
          manufacturing plants through a guided tour of a facility.{" "}
        </div>
      </div>
    </div>
  );
};

export default UsesCasesCard;
