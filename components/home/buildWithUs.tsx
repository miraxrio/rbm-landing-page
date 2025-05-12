import { useState } from "react"

const tabList = [
    {
        id: 1,
        name: "Sales Partners",
        color: "#009DFF",
    },
    {
        id: 2,
        name: "Technology Partners",
        color: "#FF9D00",
    },
    {
        id: 3,
        name: "Integration Partners",
        color: "#1AFF1E",
    }
]


const SalesPartners = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">Sales Partners: Expand Your Portfolio. Deliver with Confidence.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">RBM partners with strategic resellers, consultants, and channel leads who want to bring immersive, enterprise-ready solutions to market. Together, we elevate value and deliver clarity to customers who need it most.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Ideal Partnership:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">VARs, MSPs, and consultants in energy, cloud, or cyber</p></li>
                <li><p className="ml-8">Channel teams with strategic accounts in complex sectors</p></li>
                <li><p className="ml-8">GTM alignment with modular, branded RBM offerings</p></li>
            </ul>
        </div>
        <button className="bg-[#027ECB] mt-12 p-2 rounded-xl w-[245px] text-center text-[20px] text-white">Explore <p>Sales Partnership</p></button>
    </>)
}

const TechnologyPatners = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">Technology Partners: Extend the Stack. Power What’s Possible.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">RBM works with technology providers who bring complementary tools, platforms, or infrastructure to the immersive enterprise ecosystem. From identity to AI to spatial compute, we co-create the future—one integration at a time.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Ideal Partnership:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">API-ready tools that enhance simulation, AI, or telemetry</p></li>
                <li><p className="ml-8">Visualization, compliance, or training platforms</p></li>
                <li><p className="ml-8">Hardware or infrastructure teams building immersive delivery</p></li>
            </ul>
        </div>
        <button className="bg-[#FF9D00] mt-12 p-2 rounded-xl w-[245px] text-center text-[20px] text-white">Explore <p>Technology Partnership</p></button>
    </>)
}


const IntegrationPartners = () => {

    return (<>
        <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold  leading-[49px] text-center  w-[955px]">Integration Partners: Deliver Real-World Immersion. No Guesswork.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[31px]  w-[733px]">We collaborate with teams who turn immersive concepts into enterprise-ready deployments. From EPC firms to simulation specialists, our integration partners connect RBM experiences with real operations on the ground.</div>
        <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] mt-8  w-[733px]">
            <div className="mb-4 font-bold">Key Partnership:</div>
            <ul className="list-disc ml-4 text-[#FF9D00] ">
                <li><p className="ml-8">Digital twin deployment teams or field trainers</p></li>
                <li><p className="ml-8">Infra & energy consultants with real-world access</p></li>
                <li><p className="ml-8">Proven ability to deliver with context, safety, and speed</p></li>
            </ul>
        </div>
        <button className="bg-[#22BA00] mt-12 p-2 rounded-xl text-center text-[20px] text-white w-[245px]">Explore <p>Integration Partnership</p></button>
    </>)
}


const BuildWithUs = () => {

    const [activeTab, setActiveTab] = useState(2);

    const getBorder = (tabId: number) => {
        if (tabId === 2) {

            if (activeTab === tabId) {
                return "0 1px 1px 1px"
            }
            return "0 1px 0 1px"
        }

        if (activeTab === tabId) {
            return "0 0 1px 0"
        }

        return "0 0 0 0"
    }

    return (
        <div className="relative h-full w-full border-b-2">
            <div className="flex flex-col items-center w-full justify-center mt-16 mb-16">
                <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[48px] font-semibold  leading-[49px] text-center  w-[1293px]">Build With US</div>
                <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    RBM partners with leading firms across sales, tech, and deployment to scale immersive solutions that deliver real-world impact. Explore the path that fits your role in the ecosystem.
                </div>
                <div className="flex flex-col justify-center items-center w-full mt-8">
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
                        {activeTab === 1 && <SalesPartners />}
                        {activeTab === 2 && <TechnologyPatners />}
                        {activeTab === 3 && <IntegrationPartners />}
                    </div>
                </div>

            </div>
        </div>
    )
}

export default BuildWithUs
