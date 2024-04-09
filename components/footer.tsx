import React from "react";
import LogoWhite from "@/public/Images/header/Logo.png";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black w-full flex flex-col items-center justify-center">
      <div className="w-[80%]">
        <div className="flex flex-col items-center gap-4 mb-4 md:md-0 md:flex-row md:items-center md:justify-between md:py-10  w-full max-w-[90rem] md:max-w-[90rem]  lg:max-w-[90rem] xl:max-w-[90rem]  mx-auto lg:px-10">
          <div className="ml-4 md:ml-0 mt-4 md:mt-0">
            <span className="text-[1.125rem] text-[#FFFFFFBF] font-normal">
              info@runningbullmedia.com
            </span>
          </div>
          <div>
            <Image src={LogoWhite} alt="Logo" width={100}  />
          </div>
          <div className="text-violet-100 text-opacity-60 text-sm font-normal ml-8 md:ml-0 font-['Inter'] leading-tight">
            Austin, Texas
          </div>
        </div>

        <div className="md:flex md:items-center md:justify-center md:py-10  mb-20 border-t border-[#585858] w-full max-w-[90rem] md:max-w-[90rem]  lg:max-w-[90rem] xl:max-w-[90rem]  mx-auto lg:px-10">
          {/* Copyrights note */}
          <div className="flex flex-col sm:flex-row gap-[1rem] sm:gap-0 items-center justify-between w-full">
            <span className="text-center font-inter text-base font-normal">
              <ul className="flex items-center gap-5  text-[#EFEDFD99]">
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-sm font-normal transition duration-150 ease-in-out"
                  >
                    Privacy Policy
                  </Link>
                </li>
                <li className="mb-2">
                  <Link
                    href="/"
                    className="text-sm font-normal transition duration-150 ease-in-out"
                  >
                    Terms of Conditions
                  </Link>
                </li>
              </ul>
            </span>
            <div className="flex  gap-2">
              <p className="text-sm text-[#EFEDFD99]">
                © 2024 Running Bull Media. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
