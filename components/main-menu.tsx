import { useRouter } from "next/router";

import Link from "next/link";
import Image from "next/image";
import { Dialog, Popover } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import MainLogo from "./Logo";

import CalendlyDialog from "./calendly-dialog";

type MainMenuProp = {
  scrolled: boolean;
  setMobileMenuOpen: (state: boolean) => void;
};

export default function MainMenu({
  scrolled,
  setMobileMenuOpen,
}: MainMenuProp) {
  const router = useRouter();
  return (
    <>
      <nav
        className="mx-auto flex max-w-[90rem] items-center justify-between px-6 md:px-8 py-[1rem] lg:px-[9rem]"
        aria-label="Global"
      >
        <MainLogo scrolled={scrolled} />
        <Popover.Group className="hidden lg:flex lg:gap-x-12">
          <Link
            href="/"
            className="text-base text-[#D4D4D8] hover:text-[#fff] font-normal font-poppins leading-tight tracking-wide  cursor-pointer"
          >
            Home
          </Link>
          <Link
            href="#"
            className="text-base text-[#D4D4D8] hover:text-[#fff] font-normal font-poppins leading-tight tracking-wide  cursor-pointer"
          >
            About
          </Link>
          <Link
            href="#"
            className="text-base text-[#D4D4D8] hover:text-[#fff] font-normal font-poppins leading-tight tracking-wide  cursor-pointer"
          >
            Blog
          </Link>
          <Link
            href="#"
            className="text-base text-[#D4D4D8] hover:text-[#fff] font-normal font-poppins leading-tight tracking-wide  cursor-pointer"
          >
            Demos
          </Link>
          <Link
            href="#"
            className="text-base text-[#D4D4D8] hover:text-[#fff] font-normal font-poppins leading-tight tracking-wide  cursor-pointer"
          >
            Partners
          </Link>         
        </Popover.Group>
        <div className="flex flex-1 justify-end items-center gap-3">          
          <CalendlyDialog  text="Book a demo" classNameButton="hidden sm:block text-black text-sm font-medium font-poppins leading-[16.80px] tracking-wider h-[2.25rem] w-max bg-white px-[0.73rem] rounded-full" />
          <div className="flex lg:hidden">
            <button
              type="button"
              className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-white"
              onClick={() => setMobileMenuOpen(true)}
            >
              <span className="sr-only">Open main menu</span>
              <Bars3Icon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
        </div>
      </nav>
    </>
  );
}
