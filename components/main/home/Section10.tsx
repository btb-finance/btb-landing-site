import table from "@/utils/homejs/table";
import Image from "next/image";

export default function Section10(){
    return(
        <>
         <div className="flex flex-col w-full gap-8">
              <div className="flex flex-col w-full gap-3 px-4 md:px-0 font-Roboto_Mono">
                <h2 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
                  Don’t miss out on incentives
                </h2>
                <p className="text-xs md:text-sm text-gray-300">
                  Uncover liquidity incentive programs and explore opportunities to earn rewards.
                </p>
              </div>
              <div className="w-full">
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
              </div>
             






              <div className="flex flex-col md:flex-row gap-3 w-fit px-4 md:px-0">
                <button className="flex relative items-center justify-between bg-red-500 border border-red-500 text-gray-dark hover:bg-green-20 hover:border-red-300 rounded-lgg h-7 w-fit">
                  <div className="flex truncate relative w-full  items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">Explore incentives</div>
                </button>
              </div>
            </div>
        </>
    )
}