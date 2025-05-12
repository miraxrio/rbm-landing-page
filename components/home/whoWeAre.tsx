
import Background from "@/public/Images/home/howWorkds/background.jpg"

const WhoWeAre = () => {
    return (
        <div className="relative overflow-hidden h-[775px] ">
            <video autoPlay loop muted className="absolute w-full object-cover opacity-30">
                <source src="/video/whoweare.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
            <div className="relative w-full p-8 mb-8 flex flex-col items-center justify-center">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[48px] font-semibold leading-[49px] text-center mt-8 w-[843px]">Who We Are: Experts in Real-World Immersion</div>
                <div className="text-white mt-8 font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    Running Bull Media is a specialized immersive services company helping enterprises connect data, systems, and standards through digital twins, AI, and spatial computing.
                </div>
                <div className="text-white mt-8 font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    We work with leaders across energy, infrastructure, cybersecurity, and defense to visualize complexity, accelerate training, and deliver operational clarity—at enterprise scale.
                </div>
                <div className="text-white mt-8 font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    Whether you need high-impact XR for onboarding, cyber simulation, or full-scale digital twin deployment, RBM has the domain knowledge, creative depth, and technical execution to deliver.
                </div>
                <button className="bg-[#027ECB] mt-16 p-2 rounded-xl w-[245px] text-center text-[20px] text-white">
                    Learn more
                    <p>About Us</p>
                </button>
            </div>
        </div>
    )
}

export default WhoWeAre
