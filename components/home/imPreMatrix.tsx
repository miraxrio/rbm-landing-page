import { useState } from "react"

const tabList = [
    {
        id: 1,
        name: "ImmersiveOps",
        color: "#009DFF",
    },
    {
        id: 2,
        name: "PredictiveEdge",
        color: "#FF9D00",
    },
    {
        id: 3,
        name: "The Matrix",
        color: "#1AFF1E",
    }
]


const InmmersiveOps = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">ImmersiveOps: Train Faster. Understand More. Operate With Confidence.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">ImmersiveOps delivers high-impact, spatially accurate environments that help teams simulate procedures, understand complex systems, and reduce time-to-competence. It’s ideal for training, onboarding, planning, and operational readiness</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Key Outcomes:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">Accelerated onboarding and certification</p></li>
                <li><p className="ml-8">Knowledge retention through spatial learning</p></li>
                <li><p className="ml-8">Visual clarity across procedures and physical systems</p></li>
            </ul>
        </div>
        <button className="bg-[#027ECB] mt-12 p-2 rounded-xl w-40 text-center text-[20px] text-white">Explore ImmersiveOps </button>
    </>)
}

const PredictiveEdge = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">PredictiveEdge: Visualize Risk. Align to Standards. Stay Ahead.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">PredictiveEdge combines real-time telemetry, standards intelligence, and cyber behavior modeling into immersive environments where teams can simulate risk, validate compliance, and plan with foresight</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Key Outcomes:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">Standards awareness and audit-readiness</p></li>
                <li><p className="ml-8">Simulation of cybersecurity events and system behaviors</p></li>
                <li><p className="ml-8">Contextual decision-making under pressure</p></li>
            </ul>
        </div>
        <button className="bg-[#FF9D00] mt-12 p-2 rounded-xl w-40 text-center text-[20px] text-white">Explore PredictiveEdge</button>
    </>)
}


const TheMatrix = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">The Matrix: Fully Integrated Context In Real-World Environments</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">The Matrix brings together the full RBM stack—ImmersiveOps and PredictiveEdge—to create a continuously evolving digital twin of your organization. It’s where training meets telemetry, and planning meets real-time risk.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Key Outcomes:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">Unified digital twin of operations, risk, and readiness</p></li>
                <li><p className="ml-8">Seamless shift from onboarding to incident simulation</p></li>
                <li><p className="ml-8">The immersive control center for your real-world systems</p></li>
            </ul>
        </div>
        <button className="bg-[#22BA00] mt-12 p-2 rounded-xl w-32 text-center text-[20px] text-white">Explore The Matrix</button>
    </>)
}


const ImPreMatrix = () => {

    const [activeTab, setActiveTab] = useState(2);

    const getBorder = (tabId: number) => {
        if (tabId === 2) {

            if (activeTab === tabId) {
                return "0 1px 1px 1px "
            }
            return "0 1px 0 1px "
        }

        if (activeTab === tabId) {
            return "0 0 1px 0 "
        }

        return "0 0 0 0"
    }

    return (
        <div className="relative h-full w-full border-b-2">
            <div className="flex flex-col items-center w-full justify-center mt-16 mb-16">
                <div className="flex flex-col justify-center items-center w-full">
                    {/* Tab Buttons */}
                    <div className="flex flex-row items-center justify-center mt-3 w-[828px]">
                        {tabList.map((tab) => (
                            <div key={tab.id}
                                onClick={() => setActiveTab(tab.id)}
                                style={{
                                    fontSize: "24px",
                                    color: tab.color,
                                    paddingLeft: "20px",
                                    paddingRight: "20px",
                                    paddingBottom: "5px",
                                    border: "1px solid white",
                                    borderWidth: getBorder(tab.id)
                                }}
                            >{tab.name}</div>
                        ))}
                    </div>

                    {/* Tab Content */}
                    <div className="mt-12 flex flex-col items-center">
                        {activeTab === 1 && <InmmersiveOps />}
                        {activeTab === 2 && <PredictiveEdge />}
                        {activeTab === 3 && <TheMatrix />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default ImPreMatrix
