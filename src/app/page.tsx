
import Footer from "@/components/Footer";
import Image from "next/image";
import "./globals.css"
import Link from "next/link";
import logo1 from "../../public/fintech-collective-logo.png"
import logo2 from "../../public/encode-club-logo.png"
import logo3 from "../../public/nexo.png"
import logo4 from "../../public/daedalus.png"
import logo5 from "../../public/arbitrum-foundation (1).png"
import logo6 from "../../public/optimism-white.png"
import logo7 from "../../public/polygon-logo.png"
import logo8 from "../../public/uniswap-foundation.png"
import logo9 from "../../public/code4arena.png"
import logo10 from "../../public/peckshield.png"
import logo11 from "../../public/hydn.png"


export default function Home() {
  const articles = [
    {
      title: "Why the future needs AMMs",
      date: "21/FEB/2024",
      summary: "The future demands a hyper-financialized world where decentralized markets trade a plethora of crypto tokens. These tokens represent everything from fractionalized art and real-state rights, to a myriad of fully digital assets, from in-game...",
      link: "https://mirror.xyz/revertfinance.eth/BP10bNkg1MYvCPHhqtE2KaEN8suP52KNnX9yPLw-k8Q"
    },
    {
      title: "Introducing Auto-Exit and Auto-Range",
      date: "25/JUL/2023",
      summary: "Hello LPs! We are thrilled to introduce two transformative features to the Revert toolkit, enhancing your LP experience on Uniswap v3: Auto-Exit and Auto-Range. These features have been meticulously crafted to streamline your liquidity provision and protect your investments.",
      link: "https://mirror.xyz/revertfinance.eth/oezEn5uDGEBTrKPF0Wk2vEwtg-yyqdpCuQlz3Ca1oFM"
    },
    {
      title: "Evmos Blast Off: Milestones in Our Cosmic Journey",
      date: "12/MAY/2023",
      summary: "Evmos, a proof-of-stake blockchain built on the Cosmos SDK, offers full Ethereum compatibility. Within this ecosystem, Forge, a CLMM DEX forked from Uniswap v3, recently launched on Evmos. This followed the Evmos DAO's approval of a grant proposal for Revert's integration with Forge.",
      link: "https://mirror.xyz/revertfinance.eth/oz6Qg2Ceg0z3F-TwoaeeS5ucNQqw9h30CiccMnVhEG8"
    },
    {
      title: "V3Utils is back!",
      date: "21/MAR/2023",
      summary: "We are delighted to announce that our V3Utils contract has undergone a comprehensive audit by Peckshield, resulting in its redeployment with enhanced security measures.",
      link: "https://mirror.xyz/revertfinance.eth/d3Fn5KJZ3xeg0NSZadSyP6mkLWHRbbftURH2iBariS0"
    },
    {
      title: "150K MATIC accelerating Compoundor growth on Polygon",
      date: "05/DEC/2022",
      summary: "Over the next four weeks, we'll be distributing a total of 150,000 MATIC to incentivize the growth of auto-compounding and Uniswap v3 liquidity on Polygon.",
      link: "https://mirror.xyz/revertfinance.eth/_FfxBuW7iNwyJZuM796J3rHzRQ4wOYdAck3nWqqcoIE"
    }
  ];
  const investors = [
    {
      link: "https://fintech.io/portfolio",
      src: logo1,
      alt: "Fintech Collective logotype"

    },
    {
      link: "https://www.encode.club/",
      src: logo2,
      alt: "Encode Club logotype"

    },
    {
      link: "https://nexo.com/",
      src: logo3,
      alt: "Nexo logotype"

    },
    {
      link: "https://www.daedalus.gg/",
      src: logo4,
      alt: "Encode Club logotype"

    },
  ]
  const partners =[
    {
        link: "https://arbitrum.foundation/",
        src: logo5,
        alt: "Decision Foundation"
    },
    {
        link: "https://optimism.io/",
        src: logo6,
        alt: "Optimism"
    },
    {
        link: "https://polygon.technology/",
        src: logo7,
        alt: "Polygon"
    },
    {
      link: "https://www.uniswapfoundation.org/",
      src: logo8,
      alt: "Optimism"

    }
  ]
  const security =[
    {
      link: "https://code4rena.com/",
      src: logo9,
      alt: "Code4arena"
  },
  {
    link: "https://peckshield.com/",
    src: logo10,
    alt: "Peckshield"
},
{
  link: "https://hydnsec.com/",
  src: logo11,
  alt: "HYDN security"
}
  ]
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">


        <header className="p-4  text-white text-center w-full fixed top-0 left-0">
          Header
        </header>


        <main >

          <div className="flex flex-col flex-1 gap-20 mx-auto mt-16 mb-16  max-w-screen-xl">
            <div className="flex flex-col flex-1 w-full h-fit gap-12 px-4 md:px-0">
              <div className="flex flex-col gap-6">
                <div className="flex flex-col gap-3 font-Roboto_Mono">
                  <span className="flex w-fit h-fit px-2 py-[3] bg-green-500 font-bold text-black rounded-[5px] uppercase-text">our partners in building revert</span>
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
            {/* Last Section */}
            <div className="flex flex-col flex-1 w-full h-fit gap-6">
              <div className="flex flex-col gap-3 px-4 md:px-0">
                <span className="flex w-fit h-fit uppercase-text font-Roboto_Mono font-bold leading-none mb-5 bg-green-500 text-black rounded px-2 py-[3px]">What's new on revert?</span>
                <h2 className="text-white text-base md:text-xl leading-none font-bold font-Roboto_Mono">Discover what’s new on our blog.</h2>
              </div>

              <div className="flex flex-col flex-1 mx-auto mt-16 mb-16  ">
                <div className="flex flex-col w-full gap-6 px-4 py-6 md:p-8 bg-gray-900 border border-gray-700 rounded-lg">
                  <div className="flex flex-col gap-8">
                    {articles.map((article, index) => (
                      <div key={index} className="flex flex-col gap-4 font-Roboto_Mono">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
                          <Link href={article.link} className="text-sm md:text-base text-green-400 font-Roboto_Mono font-bold hover:text-green-300 hover:no-underline">
                            {article.title}
                          </Link>
                          <span className="text-sm text-gray-500">{article.date}</span>
                        </div>
                        <div className="flex text-xs md:text-sm text-white md:pl-5">
                          {article.summary}
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>

            </div>
          </div>

        </main>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
