
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
import tableimg1 from "../../public/uniswap.svg"
import tableimg2 from "../../public/green-ethereum.svg"
import tableimg3 from "../../public/green-base.svg"
import tableimg4 from "../../public/green-polygon.svg"
import tableimg5 from "../../public/green-arbitrum.svg"
import tableimg6 from "../../public/green-optimism.svg"
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
  const partners = [
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
  const security = [
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
  const table = [
    {
      pair: "AZUR/WETH",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "Ethereum" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "19/JUN/2024 13:00 - 19/SEP/2024 13:00",
      poolTVL: "$3,163,246",
      vesting: "0.0 days",
      rewardToken: "AZUR",
      totalRewards: "6,000,000 AZUR",
      approxValue: "$804,471.49",
      rewardsAPR: "100.90%",
      rewardsHour: "$364.34/hour",
    },
    {
      pair: "WETH/FARTHER",
      fee: "0.30%",
      networks: [
        { src: tableimg3, alt: "greenbase" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "11/MAY/2024 00:00 - 28/OCT/2024 00:00",
      poolTVL: "$46,684",
      vesting: "0.0 days",
      rewardToken: "FARTHER",
      totalRewards: "50,000,000 FARTHER",
      approxValue: " $42,924.94",
      rewardsAPR: "186.45%",
      rewardsHour: "$9.94/hour",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "0.30%",
      networks: [
        { src: tableimg4, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      status: "ACTIVE",
      duration: "9/AUG/2024 13:1 - 7/NOV/2024 13:14",
      poolTVL: "$142,320",
      vesting: "0.0 days",
      rewardToken: "BONSAI",
      totalRewards: "2,000,000 BONSAI",
      approxValue: " $17,778.50",
      rewardsAPR: "50.66%",
      rewardsHour: "$8.23/hour",
    }

  ]
  const table2 = [
    {
      pair: "AZUR/WETH",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "Ethereum" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "861012",
      owner: "0x3fbe",
      poolAsset: "$2,557.07",
      Pnl: "$109.70",
      APR: "656.5%",
      feeAPR: "735.1%",
      age: "20.5 d",
    },
    {
      pair: "WETH/FARTHER",
      fee: "0.05%",
      networks: [
        { src: tableimg5, alt: "greenbase" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "3410723",
      owner: "0x3fbe",
      poolAsset: "$35,590.54",
      Pnl: "$110.78",
      APR: "116.3%",
      feeAPR: "140.1%",
      age: "13.2 d",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "1.00%",
      networks: [
        { src: tableimg6, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "973013",
      poolAsset: "$10,827.43",
      owner: "0x6b1a",
      Pnl: "$4,794.24",
      APR: "33.62%",
      feeAPR: "35.58%",
      age: "804.8 d",
    },
    {
      pair: "WMATIC/BONSAI",
      fee: "0.30%",
      networks: [
        { src: tableimg2, alt: "greenpolygon" },
        { src: tableimg1, alt: "Uniswap" },
      ],
      NFTid: "973013",
      owner: "0x6b1a",
      poolAsset: "$27,193.17",
      Pnl: "$210.61",
      APR: "3.78%",
      feeAPR: "90.35%",
      age: "7.8 d",
    }


  ]
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">


        <header className="p-4  text-white text-center w-full fixed top-0 left-0">
          Header
        </header>


        <main >
          <div className="flex flex-col flex-1 gap-8 mx-auto mt-8 mb-8 w-full max-w-full sm:min-w-full  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 md:px-8 lg:px-16 overflow-y-auto border border-red-800 ">
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col w-full gap-3 px-4 md:px-0 font-Roboto_Mono">
                <h2 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
                  Degens follow degens.
                </h2>
                <p className="text-xs md:text-sm text-gray-300">
                  Explore positions and pools from other traders and discover new opportunities.
                  Learn from the boldest to stay ahead in the market.
                </p>
              </div>
              <div className="flex flex-col min-w-[320px] overflow-x-scroll overflow-y-hidden md:overflow-visible
                md:min-w-[480px] relative z-[1] px-3 md:px-0">
      <div className="flex flex-col w-full md:w-auto relative gap-2 -mt-2 font-Roboto_Mono">
        <div className="flex items-start justify-between  md:sticky md:top-[52px] py-2 md:z-[11] text-xs
              text-gray-20 px-4 z-[10] w-[1200px] md:w-full">
          <div className="w-44 md:w-60 flex items-center text-left sticky left-1 text-gray-300 md:bg-gray-100 md:static md:left-auto md:bg-transparent md:mr-0 before:content-['']
                before:block before:w-4 before:h-[12px] before:absolute before:-left-4 before:bg-gray-100
                md:before:hidden">
            pool/fee tier
          </div>
          <div className="w-20 flex items-center justify-start">
            <a href="/#/top-positions?sort=nft_id" className="text-gray-300 visited:text-gray-300 hover:text-white leading-none 
             hover:no-underline">
              NFT id</a>
              </div>
              <div className="w-16 flex items-center justify-start"><a href="/#/top-positions?sort=nft_id" className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
               hover:no-underline">
                owner</a>
                </div>
                <div className="w-32 flex items-center justify-end"><a href="/#/top-positions?sort=underlying_value" className="text-gray-300 visited:text-gray-300 hover:text-white
                leading-none hover:no-underline">
                  pool assets</a>
                  </div>
                  <div className="w-32 flex items-center justify-center"><a href="/#/top-positions?sort=pnl" className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
                  hover:no-underline">PnL</a>
                  </div>
                  <div className="w-24 flex items-center justify-center"><a href="/#/top-positions?sort=apr" className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
                  hover:no-underline">APR</a>
                  </div>
                  <div className="w-20 flex items-center justify-end"><a href="/#/top-positions?sort=fee_apr" className="text-gray-300 visited:text-gray-300 hover:text-white
                  leading-none hover:no-underline">
                    fee APR</a>
                    </div>
                    <div className="w-[72px] flex items-center justify-end"><a href="/#/top-positions?sort=age" className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
                                                 hover:no-underline">age</a></div>
        </div>
        {table2.map((row, index) => (
          <div key={index} className="flex flex-row justify-between items-center h-[64px] rounded-lgg bg-gray-dark border border-gray-80 transition-all md:hover:bg-gray-dark/50 md:hover:border-gray-70 px-4 rounded">
            <div className="flex sticky left-1 bg-gradient-to-r from-gray-dark from-75% to-transparent before:content-[''] before:block before:w-4 before:h-[60px] before:absolute before:-left-4 before:-top-[7px] before:z-index-5 before:rounded-l-[12px] before:bg-gray-dark md:static md:bg-transparent md:before:hidden w-52">
              <div className="flex flex-col gap-2">
                <div className="flex flex-row gap-1 items-baseline hover:no-underline text-white hover:text-green-20">
                  <span className="flex shrink-0 truncate font-bold text-base leading-none">{row.pair}</span>
                  <span className="flex shrink-0 text-xs font-normal text-gray-20 leading-none">{row.fee}</span>
                 <div className="flex items-center gap-3">
                  <div className="flex items-center gap-2">
                    {row.networks.map((network, i) => (
                      <Image key={i} src={network.src} alt={network.alt} className="w-5 h-5" />
                    ))}
                  </div>
                </div>
                </div>
               
              </div>
            </div>
            <div className="flex justify-end w-20">
              <div className="text-sm text-red-500 visited:text-red-400 hover:text-red-200 leading-none hover:no-underline">
              {row.NFTid}
              </div>
            </div>
            <div className="flex justify-end w-16">
              <div className="text-sm text-red-500 visited:text-red-400 hover:text-red-200 leading-none hover:no-underline">{row.owner}</div>
            </div>
            <div className="flex justify-end w-32">
              <div className="text-sm text-white font-bold">{row.poolAsset}</div>
            </div>
            <div className="flex justify-end w-32">
              <div className="text-sm font-bold text-red-200">
                {row.Pnl}
              </div>
            </div>
            <div className="flex justify-end w-24">
              <div className="text-sm font-bold text-red-200">
                {row.APR}
              </div>
            </div>
            <div className="flex justify-end w-20 ">
              <div className="text-sm text-white font-bold">
                {row.feeAPR}
                
              </div>
            </div>
            <div className="flex justify-end w-[72px]">
              <div className="text-sm text-gray-100">20.5 d</div>
            </div>
          </div>
        ))}
      </div>
    </div>
              <div className="flex flex-col md:flex-row gap-3 w-fit px-4 md:px-0">
                <button className="flex relative items-center justify-between bg-red-500 border border-red-500 text-gray-dark hover:bg-green-20 hover:border-red-300 rounded-lgg h-7 w-fit">
                  <div className="flex truncate relative w-full  items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">Explore incentives</div>
                </button>
              </div>
            </div>
            {/* section */}
            <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col w-full gap-3 px-4 md:px-0 font-Roboto_Mono">
                <h2 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
                  Don’t miss out on incentives
                </h2>
                <p className="text-xs md:text-sm text-gray-300">
                  Uncover liquidity incentive programs and explore opportunities to earn rewards.
                </p>
              </div>
              <div className="flex flex-col min-w-[320px] overflow-x-scroll overflow-y-hidden md:overflow-visible
                md:min-w-[480px] relative z-[1] px-3 md:px-0">
                <div className="flex flex-col w-full md:w-auto relative gap-2 -mt-2 font-Roboto_Mono">
                  <div className="flex items-start justify-between text-gray-300 md:sticky md:top-[52px] py-2 md:z-[11] text-xs
                    text-gray-20 px-4 z-[10] w-[1200px] md:w-full">
                    <div className="flex items-center text-left sticky left-1 
                md:bg-gray-100 md:static md:left-auto md:bg-transparent md:mr-0 before:content-[''] before:block
                before:w-4 before:h-[12px] before:absolute before:-left-4 before:bg-gray-100 md:before:hidden w-52">
                      pool/fee tier
                    </div>
                    <div className="w-36 flex items-center text-left">duration UTC time</div>
                    <div className="w-36 justify-end flex items-center">pool TVL</div>
                    <div className="w-24 justify-end flex items-center">vesting</div>
                    <div className="w-24 justify-center flex items-center">reward token</div>
                    <div className="w-44 justify-end flex items-center">total rewards</div>
                    <div className="w-32 justify-end flex items-center">rewards APR</div>
                  </div>
                  {table.map((row, index) => (
                    <div key={index} className="flex flex-row justify-between items-center h-[64px] rounded-lgg bg-gray-dark border border-gray-80 transition-all md:hover:bg-gray-dark/50 md:hover:border-gray-70 px-4">
                      <div className="flex sticky left-1 bg-gradient-to-r from-gray-dark from-75% to-transparent before:content-[''] before:block before:w-4 before:h-[60px] before:absolute before:-left-4 before:-top-[7px] before:z-index-5 before:rounded-l-[12px] before:bg-gray-dark md:static md:bg-transparent md:before:hidden w-52">
                        <div className="flex flex-col gap-2">
                          <div className="flex flex-row gap-1 items-baseline hover:no-underline text-white hover:text-green-20">
                            <span className="flex shrink-0 truncate font-bold text-base leading-none">{row.pair}</span>
                            <span className="flex shrink-0 text-xs font-normal text-gray-20 leading-none">{row.fee}</span>
                          </div>
                          <div className="flex items-center gap-3">
                            <div className="flex items-center gap-2">
                              {row.networks.map((network, i) => (
                                <Image key={i} src={network.src} alt={network.alt} className="w-5 h-5" />
                              ))}
                            </div>
                            <div className={" bg-blue-500 text-white flex w-fit text-xs px-1.5 rounded-[5px] font-bold items-center h-[18px] uppercase"}>
                              {row.status}
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="w-36 text-white text-xs">
                        <div className="flex flex-col gap-1">
                          <span className="leading-none">{row.duration}</span>
                        </div>
                      </div>
                      <div className="w-36 flex gap-1 justify-end">
                        <span className="text-white text-sm leading-none font-bold">{row.poolTVL}</span>
                      </div>
                      <div className="w-24 flex justify-end">
                        <span className="text-sm leading-none text-gray-300">{row.vesting}</span>
                      </div>
                      <div className="w-24 flex justify-center">
                        <div className="flex h-6 items-center">
                          <div className="flex items-center text-red-500 hover:text-green-20 text-sm !no-underline">{row.rewardToken}</div>
                        </div>
                      </div>
                      <div className="w-44 rewards-data">
                        <div className="flex flex-col gap-1 w-full items-end">
                          <div className="flex w-full font-bold text-sm text-white truncate justify-end leading-none">{row.totalRewards}</div>
                          <div className="flex text-xs text-gray-300 font-normal">approx {row.approxValue}</div>
                        </div>
                      </div>
                      <div className="w-32 flex flex-col items-end ">
                        <div className="flex flex-col gap-1 items-end">
                          <span className="tetx-sm text-white font-bold leading-none">{row.rewardsAPR}</span>
                          <span className="text-xs text-gray-300 leading-none font-normal">{row.rewardsHour}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>






              <div className="flex flex-col md:flex-row gap-3 w-fit px-4 md:px-0">
                <button className="flex relative items-center justify-between bg-red-500 border border-red-500 text-gray-dark hover:bg-green-20 hover:border-red-300 rounded-lgg h-7 w-fit">
                  <div className="flex truncate relative w-full  items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">Explore incentives</div>
                </button>
              </div>
            </div>



            {/* section */}
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
            {/* Last Section */}
            <div className="flex flex-col flex-1 w-full h-fit gap-6">
              <div className="flex flex-col gap-3 px-4 md:px-0">
                <span className="flex w-fit h-fit uppercase-text font-Roboto_Mono font-bold leading-none mb-5 bg-red-500 text-black rounded px-2 py-[3px]">What's new on revert?</span>
                <h2 className="text-white text-base md:text-xl leading-none font-bold font-Roboto_Mono">Discover what’s new on our blog.</h2>
              </div>

              <div className="flex flex-col flex-1 mx-auto mt-16 mb-16  ">
                <div className="flex flex-col w-full gap-6 px-4 py-6 md:p-8 bg-gray-900 border border-gray-700 rounded-lg">
                  <div className="flex flex-col gap-8">
                    {articles.map((article, index) => (
                      <div key={index} className="flex flex-col gap-4 font-Roboto_Mono">
                        <div className="flex flex-col md:flex-row gap-2 md:gap-8 md:items-baseline">
                          <Link href={article.link} className="text-sm md:text-base text-red-500 font-Roboto_Mono font-bold hover:text-red-300 hover:no-underline">
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
