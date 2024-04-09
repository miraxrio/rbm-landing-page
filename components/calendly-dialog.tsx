import { Fragment, useState } from "react";
import Image from "next/image";
import { Dialog, Transition } from "@headlessui/react";
import MiraxrImage from "@/public/Images/demo/mira-image.png";
import BackgroundImage from "@/public/Images/demo/background.png";

type CalendlyProps = {
  classNameButton: string;
  type?: string;
  text: string;
};

export default function CalendlyDialog({
  classNameButton,
  type,
  text,
}: CalendlyProps) {
  const [isOpen, setIsOpen] = useState(false);

  function closeModal() {
    setIsOpen(false);
  }

  const openModal = () => {
    setIsOpen(true);
  };

  return (
    <>
      {type === "link" ? (
        <button onClick={openModal} className={`${classNameButton}`}>
          {text}
        </button>
      ) : (
        <div className="">
          <button type="button" onClick={openModal} className={classNameButton}>
            {text}
          </button>
        </div>
      )}

      <Transition appear show={isOpen} as={Fragment}>
        <Dialog as="div" className="relative z-50 " onClose={closeModal}>
          <Transition.Child
            as={Fragment}
            enter="ease-out duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="ease-in duration-200"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className="fixed inset-0 bg-black/25" />
          </Transition.Child>

          <div className="fixed inset-0 overflow-y-auto">
            <div className="flex min-h-full items-center justify-center ">
              <Transition.Child
                as={Fragment}
                enter="ease-out duration-300"
                enterFrom="opacity-0 scale-95"
                enterTo="opacity-100 scale-100"
                leave="ease-in duration-200"
                leaveFrom="opacity-100 scale-100"
                leaveTo="opacity-0 scale-95"
              >
                <Dialog.Panel className="w-full  transform overflow-hidden rounded-2xl  text-left align-middle shadow-xl transition-all">
                  
                    <Image
                      src={BackgroundImage}
                      alt=""
                      className="absolute w-full h-full"
                    />
                    <div className="flex flex-col items-center relative">
                      <div className="flex flex-col items-center">
                        <div className="opacity-90 text-white mt-24 text-[81.85px] font-extrabold font-['Inter']">
                          Demo
                        </div>
                        <div className="opacity-70 text-white text-[22px] font-medium font-['Inter']">
                          Set a time and see it for yourself
                        </div>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 p-10 h-full">
                        <div>
                          <iframe
                            className="w-full h-[350px]"
                            src="https://calendly.com/joellamas/intro?back=1"
                            sandbox="allow-same-origin allow-scripts"
                          ></iframe>
                        </div>
                        <div className="">
                          <Image src={MiraxrImage} alt="" />
                        </div>
                      </div>
                    </div>
                  
                  <div className="relative w-full flex items-center justify-center mt-2 mb-6">
                    <button
                      type="button"
                      className="inline-flex justify-center rounded-md border border-transparent bg-blue-100 px-4 py-2 text-sm font-medium text-blue-900 hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-blue-500 focus-visible:ring-offset-2"
                      onClick={closeModal}
                    >
                      Close
                    </button>
                  </div>
                </Dialog.Panel>
              </Transition.Child>
            </div>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}
