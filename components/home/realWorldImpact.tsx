


const training = [
    {
        id: 1,
        title: "Field Training & Onboarding",
        text: "ImmersiveOps helps teams gain hands-on familiarity with complex systems before they ever step into the field. Simulate risky environments, reinforce SOPs, and shorten the path to operational confidence.",
        food: "ImmersiveOps",
        color: "#009DFF"
    },
    {
        id: 2,
        title: "Cybersecurity Simulation & Awareness",
        text: "PredictiveEdge lets teams simulate real cyber threats inside realistic environments reinforcing policy awareness, building muscle memory, and improving incident response times across roles.",
        food: "PredictiveEdge",
        color: "#FF9D00"
    },
    {
        id: 3,
        title: "Incident Simulation & Risk Readiness",
        text: "The Matrix empowers teams to rehearse high-impact failure scenarios like outages, attacks, or spills inside realistic operational twins. Improve coordination before it matters most.",
        food: "The Matrix",
        color: "#1AFF1E"
    }
]

const planning = [
    {
        id: 1,
        title: "Planning & Systems Walkthroughs",
        text: "ImmersiveOps makes infrastructure, workflows, and asset configurations visually explorable improving cross-functional alignment and reducing expensive rework.",
        food: "ImmersiveOps",
        color: "#009DFF"
    },
    {
        id: 2,
        title: "Compliance & Standards Visualization",
        text: "PredictiveEdge helps teams see how standards apply in real-world systems—making compliance more intuitive and reducing audit stress.",
        food: "PredictiveEdge",
        color: "#FF9D00"
    },
    {
        id: 3,
        title: "Cloud, Network & Infrastructure Visualization",
        text: "The Matrix allows technical teams to model edge networks, hybrid cloud, and multi-layered infrastructure in spatial environments accelerating alignment across silos.",
        food: "The Matrix",
        color: "#1AFF1E"
    }
]

const communication = [{
        id: 1,
        title: "Stakeholder Engagement & Executive Briefing",
        text: "Slides don’t show scale. ImmersiveOps helps leaders and stakeholders understand complex projects and risks through real-world visuals boosting clarity and decision confidence.",
        food: "ImmersiveOps",
        color: "#009DFF"
    },
    {
        id: 2,
        title: "Standards-Based Scenario Certification",
        text: "PredictiveEdge enables realistic assessments aligned with industry standards so teams can prove readiness, not just claim it.",
        food: "PredictiveEdge",
        color: "#FF9D00"
    },
    {
        id: 3,
        title: "The Immersive Control Center",
        text: "The Matrix combines training, telemetry, and compliance into a unified operational twin giving leaders a spatial, interactive view of systems, risks, and performance.",
        food: "The Matrix",
        color: "#1AFF1E"
    }]

const RealWorldImpact = () => {
    return (
        <div className="relative h-full w-full border-b-2">
            <div className="flex flex-col items-center justify-center mt-8 mb-16">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px] text-center  w-[843px]">Real-World Impact Across Teams, Systems, and Industries</div>
                <div className="w-[900px] mt-20">
                    <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] w-[897px] flex flex-col gap-4">
                        <div>From the field to the control room, and from cybersecurity to compliance, Running Bull Media helps organizations visualize complexity and act with clarity.</div>
                        <div>Whether you’re training new hires, simulating risk, or aligning systems to standards, our modular solutions adapt to the challenges that matter most—across roles, departments, and industries.</div>
                        <div>Explore how our platform powers transformation across training, planning, security, infrastructure, and audit-readiness.</div>
                    </div>
                </div>
            </div>
            <div className="w-full p-8">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px]">Training and Readiness</div>
                <div className="grid grid-cols-3 mt-8">
                    {
                        training.map((item) => (
                            <div key={item.id} className={`text-white w-[402px] h-[595px] rounded-[71px] p-8 border border-[${item.color}]`}>
                                <div className="font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px] mt-10 h-[54px]">{item.title}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px] h-[339px] mt-8">{item.text}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px]">Built on: <span className={`text-[${item.color}]`}>{item.food}</span></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full p-8">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px]">Planning and Oversight</div>
                <div className="grid grid-cols-3 mt-8">
                    {
                        planning.map((item) => (
                            <div key={item.id} className={`text-white w-[402px] h-[595px] rounded-[71px] p-8 border border-[${item.color}]`}>
                                <div className="font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px] mt-10  h-[54px]">{item.title}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px] h-[339px] mt-8 ">{item.text}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px]">Built on: <span className={`text-[${item.color}]`}>{item.food}</span></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="w-full p-8">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px]">Communication and Certification</div>
                <div className="grid grid-cols-3 mt-8">
                    {
                        communication.map((item) => (
                            <div key={item.id} className={`text-white w-[402px] h-[595px] rounded-[71px] p-8 border border-[${item.color}]`}>
                                <div className="font-[Inter-SemiBold,_Helvetica] text-[24px] font-semibold leading-[27px] mt-10  h-[54px]">{item.title}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px] h-[339px] mt-8 ">{item.text}</div>
                                <div className="font-[Inter-ExtraLight,_Helvetica] text-[24px] font-extralight  leading-[38px]">Built on: <span className={`text-[${item.color}]`}>{item.food}</span></div>
                            </div>
                        ))
                    }
                </div>
            </div>
            <div className="flex flex-col items-center justify-center mt-8">
                    <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]">Let’s explore how these use cases apply to your world.</div>
                    <div className="flex flex-row gap-16 mt-8 mb-8">
                        <button className="bg-[#0D6AA1] text-white rounded-full h-[58px] p-4">Schedule A Call</button>
                        <button className="bg-[#0D6AA1] text-white rounded-full h-[58px] p-4">Watch A Demo</button>
                    </div>
            </div>
        </div>
    )
}

export default RealWorldImpact
