import Image from "next/image"
import Background from "@/public/Images/home/howWorkds/background.jpg"

const HowItWorks = () => {
    return (
        <div className="relative flex flex-col">
            <Image src={Background} alt="blur" className="absolute w-full h-full" />
            <div className="relative w-full p-8 mb-8">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[48px] font-semibold leading-[49px] text-center h-[250px] mt-8 w-[843px]">How It Works: From Real Systems to Immersive Experiences</div>
                <div className="flex flex-col gap-8">
                    <div>
                        <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px]">
                            1. Connect the Data
                        </div>
                        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[37px] ml-12">
                            Securely integrate real-time operational data through Zero Bias.
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px]">
                            2. Build the Environment
                        </div>
                        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[37px] ml-12">
                            Create custom 3D environments and digital twins of your infrastructure.
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px]">
                            3. Visualize and Simulate
                        </div>
                        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[37px] ml-12">
                            Bring your systems to life using MIRA and NVIDIA Omniverse.
                        </div>
                    </div>
                    <div>
                        <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px]">
                            4. Deploy and Iterate
                        </div>
                        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[37px] ml-12">
                            Update and expand your digital twin as your systems evolve.
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default HowItWorks
