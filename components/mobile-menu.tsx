import Image from "next/image";
import Link from "next/link";

import { Dialog } from "@headlessui/react";
import Logo from "@/public/Images/header/Logo.png";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import CalendlyDialog from "./calendly-dialog";

type MobileMenuType = {
  mobileMenuOpen: boolean;
  setMobileMenuOpen: (state: boolean) => void;
};

export default function MobileMenu({
  mobileMenuOpen,
  setMobileMenuOpen,
}: MobileMenuType) {
  return (
    <>
      <Dialog
        as="div"
        className="lg:hidden"
        open={mobileMenuOpen}
        onClose={setMobileMenuOpen}
      >
        <div className="fixed inset-0 z-50" />
        <Dialog.Panel className="fixed inset-y-0 right-0 z-50 w-full overflow-y-auto bg-[#0d0e2e] px-6 py-4 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
          <div className="flex items-center justify-between">
            <Link onClick={() => setMobileMenuOpen(false)} href="/">
              <Image
                width={138.84}
                height={224}
                className=""
                src={Logo}
                alt="Logo"
              />
            </Link>
            <button
              type="button"
              className="-m-2.5 rounded-md p-2.5 text-gray-700"
              onClick={() => setMobileMenuOpen(false)}
            >
              <span className="sr-only">Close menu</span>
              <XMarkIcon className="h-6 w-6" aria-hidden="true" />
            </button>
          </div>
          <div className="mt-6 flow-root">
            <div className="-my-6 divide-y divide-gray-500/10">
              <div className="flex flex-col space-y-12 py-16">
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="/"
                  className="text-white text-base font-normal font-poppins leading-tight tracking-wide hover:text-[#155F68] cursor-pointer"
                >
                  Home
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="text-white text-base font-normal font-poppins leading-tight tracking-wide hover:text-[#155F68] cursor-pointer"
                >
                  About
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="text-white text-base font-normal font-poppins leading-tight tracking-wide hover:text-[#155F68] cursor-pointer"
                >
                  Blog
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="text-white text-base font-normal font-poppins leading-tight tracking-wide hover:text-[#155F68] cursor-pointer"
                >
                  Demos
                </Link>
                <Link
                  onClick={() => setMobileMenuOpen(false)}
                  href="#"
                  className="text-white text-base font-normal font-poppins leading-tight tracking-wide hover:text-[#155F68] cursor-pointer"
                >
                  Partners
                </Link>
              </div>
              <div className="flex flex-col gap-4 items-center justify-center py-6">
                <CalendlyDialog
                  type="link"
                  text="Book a demo"
                  classNameButton="text-center text-black text-sm font-medium w-full font-poppins leading-[16.80px] tracking-wider bg-white py-4 px-8 rounded-[0.75rem] "
                />
              </div>
            </div>
          </div>
        </Dialog.Panel>
      </Dialog>
    </>
  );
}
