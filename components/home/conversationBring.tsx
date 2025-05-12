import React from 'react'

const ConversationBring = () => {
    return (
        <div className="relative h-full w-full border-b-2 border-t-2">
            <div className="flex flex-col items-center justify-center mt-8 mb-16">
                <div className="text-white font-[Inter-SemiBold,_Helvetica] text-[40px] font-semibold leading-[49px] text-center  w-[843px]">Conversations Bring Clarity</div>
                <div className="w-[900px] mt-20 flex flex-col items-center justify-center">
                    <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px] w-[897px] flex flex-col gap-4 items-center justify-center">
                        <div>We collaborate with enterprise teams to turn complexity into clarity. Let’s explore your goals and how immersive intelligence can bring them to life.</div>
                        <div>“We’re not a SaaS funnel — we’re a partner.”</div>
                    </div>
                </div>
                <button className="bg-[#FF9D00] w-[224px] mt-16 h-[85px] rounded-2xl text-white font-[Inter-SemiBold,_Helvetica] text-[20px] font-semibold  leading-[27px] text-center" >
                    Schedule <p>A Call</p>
                </button>
            </div>

        </div>
    )
}

export default ConversationBring
