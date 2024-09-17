import investors from "@/utils/home/investors";
import partners from "@/utils/home/partners";
import security from "@/utils/home/security"
import Link from "next/link";
import Image from "next/image";

export default function Section11(){
    return(
        <>
          <div className="flex flex-col flex-1 w-full h-fit gap-12 px-4 md:px-0">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 font-Roboto_Mono">
                  <span className="flex w-fit h-fit px-2 py-[3] bg-red-500 font-bold text-black rounded-[5px] uppercase-text">our partners in building revert</span>
                  <h2 className="text-white text-xl md:text-2xl leading-[28px] md:leading-[32px] font-bold">
                    Our investors.
                  </h2>
                  <p className="text-xs md:text-sm text-gray-300 max-w-[840px]">
                    Revert was started during an Encode Club hackathon and went on to raise a seed round with Fintech Collective and Encode as lead investors.
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-row gap-x-8 gap-y-4 md:gap-20 items-center md:h-[60px]">
                  {investors.map((investor, index) => (
                    <Link key={index} href={investor.link} target="_blank" rel="noopener noreferrer">
                      <Image src={investor.src} alt={investor.alt} width={100} height={60} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 font-Roboto_Mono">
                  <h2 className="text-white text-xl md:text-2xl leading-[28px] md:leading-[32px] font-bold">
                    Partnerships.
                  </h2>
                  <p className="text-xs md:text-sm text-gray-300 max-w-[840px]">
                    Collaborations with industry leaders and key organizations enable us to unlock new opportunities and value for our users.
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-row gap-x-8 gap-y-4 md:gap-20 items-center md:h-[60px]">
                  {partners.map((partner, index) => (
                    <Link key={index} href={partner.link} target="_blank" rel="noopener noreferrer">
                      <Image src={partner.src} alt={partner.alt} width={100} height={60} />
                    </Link>
                  ))}
                </div>
              </div>
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 font-Roboto_Mono">
                  <h2 className="text-white text-xl md:text-2xl leading-[28px] md:leading-[32px] font-bold">
                    Security first.
                  </h2>
                  <p className="text-xs md:text-sm text-gray-300 max-w-[840px]">
                    All of our smart contracts undergo rigorous audits by leading security firms to ensure their accuracy and safety.
                  </p>
                </div>
                <div className="flex flex-wrap md:flex-row gap-x-8 gap-y-4 md:gap-20 items-center md:h-[60px]">
                  {security.map((secure, index) => (
                    <Link key={index} href={secure.link} target="_blank" rel="noopener noreferrer">
                      <Image src={secure.src} alt={secure.alt} width={100} height={60} />
                    </Link>
                  ))}
                </div>
              </div>


            </div>
        </>
    )
}