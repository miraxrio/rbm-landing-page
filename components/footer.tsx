import React from "react";
import LogoWhite from "@/public/Images/header/Logo.png";
import Image from "next/image";

import { PhoneIcon, EnvelopeOpenIcon } from "@heroicons/react/24/outline";


export default function Footer() {
  return (
    <footer className="bg-black flex flex-col items-center justify-center">
      <div className="flex flex-row gap-20 mt-8">
        <div className="flex flex-col">
          <Image src={LogoWhite} alt="Logo" className="w-[214px] h-[144px]" />
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px] w-[264px]">
            Where Real-World Data Meets Immersive Intelligence
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] w-[415px] mt-20">
            © 2025 Running Bull Media All rights reserved
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="text-white font-[Inter-SemiBold,_Helvetica]  text-[24px] font-semibold leading-[27px]">
            Solutions
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] mt-4">
            ImmersiveOps
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            PredictiveEdge
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            The Matrix
          </div>

          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] mt-8">
            Austin, Texas
          </div>
          <div className="text-white flex flex-row gap-4">
            <svg xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="lucide lucide-linkedin-icon lucide-linkedin">
              <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
              <rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
            </svg>
            <EnvelopeOpenIcon width={24} height={24} />
            <PhoneIcon width={24} height={24} />
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="text-white font-[Inter-SemiBold,_Helvetica]  text-[24px] font-semibold leading-[27px]">
            Company
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] mt-4">
            About Us
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            Partner Program
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            Careers
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] mt-28">
            Privacy Policy
          </div>
        </div>
        <div className="flex flex-col mt-16">
          <div className="text-white font-[Inter-SemiBold,_Helvetica]  text-[24px] font-semibold leading-[27px]">
            Resources
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] mt-4">
            Blog
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            Use Cases
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px]">
            Contact
          </div>
          <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[18px] font-extralight  leading-[38px] w-[415px] mt-28">
            Terms of Use
          </div>
        </div>
      </div>
    </footer>
  );
}
