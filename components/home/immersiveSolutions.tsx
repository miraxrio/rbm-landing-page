
import Image from "next/image"
import DataCenterBackground from "@/public/Images/home/immersiveSolutions/datacenters.png"
import SecurityBackground from "@/public/Images/home/immersiveSolutions/securityAndCompliance.jpg"
import SystemBackground from "@/public/Images/home/immersiveSolutions/systemItegration.jpg"

import HospitalBackground from "@/public/Images/home/immersiveSolutions/hospital.jpg"
import IndustrialBackground from "@/public/Images/home/immersiveSolutions/industrial.jpg"
import TrainingBackground from "@/public/Images/home/immersiveSolutions/training.jpg"

interface ItemProp {
    title: string,
    text: string,
    opacity: number,
    background: any
}


const ImmersiveItem = ({ title, text, opacity, background }: ItemProp) => {

    return <div className="relative w-[401px] h-[397px]">
        <Image src={background} alt="" className={`absolute w-full  opacity-${opacity}`} />
        <div className="relative w-full flex flex-col items-end mt-4 px-8">
            <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[24px] mt-8 font-semibold leading-[27px] text-right w-[256px] ">
                {title}
            </div>
            <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight text-right  leading-[38px] w-[264px] mt-8">{text}</div>
        </div>
    </div>
}

const itemList: ItemProp[] = [
    {
        title: "Data Centers & Cloud Network",
        text: "Real-time digital twins for cyber and ops visibility.",
        background: DataCenterBackground,
        opacity: 60,
    },
    {
        title: "Security & Compliance Command Centers",
        text: "Real-world context for standards and response.",
        background: SecurityBackground,
        opacity: 90,
    },
    {
        title: "Systems Integration Environments",
        text: "Bridging telemetry, planning and real-world action.",
        background: SystemBackground,
        opacity: 90,
    },
    {
        title: "Hospitals & Clinical Environments",
        text: "Situational awareness at the patient and system level.",
        background: HospitalBackground,
        opacity: 100,
    },
    {
        title: "Industrial & Infrastructure Sites",
        text: "Immersive training and planning in high-risk zones.",
        background: IndustrialBackground,
        opacity: 90,
    },
    {
        title: "Training & Certification Organizations",
        text: "High-retention simulation at scale.",
        background: TrainingBackground,
        opacity: 90,
    }
]

const ImmersiveSolutions = () => {
    return (
        <div className="relative h-full w-full border-b-2">
            <div className="flex flex-col items-center justify-center mt-8 mb-16">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px] text-center ">Immersive Solutions Built for Real-World Environments</div>
                <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] w-[894px] mt-16">
                    RBM powers immersive solutions across environments where complexity, compliance, and clarity are mission-critical. From frontline operations to cyber command centers, we build experiences that meet people in the systems they rely on—no matter the industry.
                </div>
            </div>
            <div className="grid grid-cols-3 gap-4 p-8">
                {
                    itemList.map((data, idx) =>
                        (<ImmersiveItem key={idx} opacity={data.opacity} title={data.title} text={data.text} background={data.background} />)
                    )
                }
            </div>
            <div className="flex flex-col items-center justify-center mt-8 mb-8">
                <button className="bg-[#FF9D00] w-[224px] h-[85px] rounded-2xl text-white font-[Inter-SemiBold,_Helvetica] text-[20px] font-semibold  leading-[27px] text-center" >
                    See Immersive Applications in Action
                </button>
            </div>

        </div>
    )
}

export default ImmersiveSolutions
