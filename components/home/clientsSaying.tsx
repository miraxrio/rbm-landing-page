import Image from "next/image"
import background from "@/public/Images/home/clientSaying/backgound.jpg"
import ConnectionsLogo from "@/public/Images/home/clientSaying/connection.png"
import ExtremeLogo from "@/public/Images/home/clientSaying/extreme.png"
import EnergyTranferLogo from "@/public/Images/home/clientSaying/energyTransfer.png"

const ClientCard = ({ text, client, jobTitle, ImageLogo }: { text: string, client: string, jobTitle: string, ImageLogo: any }) => {
    return (<div className="relative w-[426px] h-[426px]">
        <Image src={background} alt="" className="absolute w-full rounded-2xl" />
        <div className="relative flex flex-col items-center justify-center gap-4">
           {ImageLogo}
           <div className="h-[280px] w-[350px] border border-solid border-black p-4">                
                <div className="text-[20px] leading-[27px] h-[180px] ">{text}</div>
                <div className="text-[20px] leading-[27px] mt-6 ">{client}</div>
                <div className="text-[20px] leading-[27px]  ">{jobTitle}</div>
           </div> 
        </div>
    </div>)
}

const clientList = [
    {
        text: "Running Bull Media brought our technology stories to life. Their work allowed our customers to explore complex IT and cloud solutions in an intuitive, visual way.",
        client: "Rob McIntosh",
        jobTitle: "Director of Segment Marketing",
        image:<Image src={ConnectionsLogo} alt="" className="h-[100px] w-[302px] mt-2" /> ,
    },
    {
        text: "The VR experiences created by Running Bull Media helped us deliver a powerful, hands-on product showcase during a time when in-person demos weren’t possible. They exceeded expectations.",
        client: "Lorna Pierno",
        jobTitle: "Director of Channel Marketing",
        image: <Image src={ExtremeLogo} alt="" className="h-[74px] w-[237px] mt-8 " />,
    },
    {
        text: "Running Bull Media helped us visualize our infrastructure in a completely new way. Their immersive environments are helping us train teams faster and work more safely in the field.",
        client: "Michale Johnson",
        jobTitle: "Director of Operations",
        image:  <Image src={EnergyTranferLogo} alt="" className="h-[70px] w-[237px] mt-8 " /> ,
    }
]


const ClientsSaying = () => {
    return (
        <div className="relative h-full w-full border-b-2">
            <div className="flex flex-col items-center justify-center mt-16 mb-16">
                <div className="text-white mb-8 font-[Inter-SemiBold,_Helvetica] text-[48px] font-semibold  leading-[49px] text-center  w-[1293px]">What Our Clients Are Saying</div>
                <div className="text-white font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    Organizations across energy, infrastructure, and enterprise tech trust Running Bull Media to help them visualize complexity, accelerate training, and drive operational clarity.
                </div>
                <div className="text-white mt-8 font-[Inter-ExtraLight,_Helvetica] text-[20px] font-extralight  leading-[27px]  w-[894px]">
                    From immersive training environments to real-time product simulations, our solutions deliver real-world impact.
                </div>

            </div>
            <div className='flex flex-row items-center justify-center gap-8 mb-16'>
                {clientList.map((client, idx) => (
                    <ClientCard key={idx} text={client.text} client={client.client} jobTitle={client.jobTitle} ImageLogo={client.image} />
                ))

                }
            </div>
        </div>
    )
}

export default ClientsSaying
