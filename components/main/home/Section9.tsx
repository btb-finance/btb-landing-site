import table2 from "@/utils/home/table2";
import Image from "next/image";
import Link from "next/link";

export default function Section9() {
  return (
    <>
      <div className="flex flex-col w-full gap-8">
        <div className="flex flex-col w-full gap-3 px-4 md:px-0 font-Roboto_Mono">
          <h2 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
            Degens follow degens.
          </h2>
          <p className="text-xs md:text-sm text-gray-300">
            Explore positions and pools from other traders and discover new
            opportunities. Learn from the boldest to stay ahead in the market.
          </p>
        </div>
        <div
          className="flex flex-col min-w-[320px] overflow-x-scroll overflow-y-hidden md:overflow-visible
  md:min-w-[480px] relative z-[1] px-3 md:px-0"
        >
          <div className="flex flex-col w-full md:w-auto relative gap-2 -mt-2 font-Roboto_Mono">
            <div
              className="flex items-start justify-between  md:sticky md:top-[52px] py-2 md:z-[11] text-xs
text-gray-20 px-4 z-[10] w-[1200px] md:w-full"
            >
              <div
                className="w-44 md:w-60 flex items-center text-left sticky left-1 text-gray-300 md:bg-gray-100 md:static md:left-auto md:bg-transparent md:mr-0 before:content-['']
  before:block before:w-4 before:h-[12px] before:absolute before:-left-4 before:bg-gray-100
  md:before:hidden"
              >
                pool/fee tier
              </div>
              <div className="w-20 flex items-center justify-start">
                <Link
                  href="/#/top-positions?sort=nft_id"
                  className="text-gray-300 visited:text-gray-300 hover:text-white leading-none 
hover:no-underline"
                >
                  NFT id
                </Link>
              </div>
              <div className="w-16 flex items-center justify-start">
                <Link
                  href="/#/top-positions?sort=nft_id"
                  className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
 hover:no-underline"
                >
                  owner
                </Link>
              </div>
              <div className="w-32 flex items-center justify-end">
                <Link
                  href="/#/top-positions?sort=underlying_value"
                  className="text-gray-300 visited:text-gray-300 hover:text-white
  leading-none hover:no-underline"
                >
                  pool assets
                </Link>
              </div>
              <div className="w-32 flex items-center justify-center">
                <Link
                  href="/#/top-positions?sort=pnl"
                  className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
    hover:no-underline"
                >
                  PnL
                </Link>
              </div>
              <div className="w-24 flex items-center justify-center">
                <Link
                  href="/#/top-positions?sort=apr"
                  className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
    hover:no-underline"
                >
                  APR
                </Link>
              </div>
              <div className="w-20 flex items-center justify-end">
                <Link
                  href="/#/top-positions?sort=fee_apr"
                  className="text-gray-300 visited:text-gray-300 hover:text-white
    leading-none hover:no-underline"
                >
                  fee APR
                </Link>
              </div>
              <div className="w-[72px] flex items-center justify-end">
                <Link
                  href="/#/top-positions?sort=age"
                  className="text-gray-300 visited:text-gray-300 hover:text-white leading-none
                                   hover:no-underline"
                >
                  age
                </Link>
              </div>
            </div>
            {table2.map((row, index) => (
              <div
                key={index}
                className="flex flex-row justify-between items-center h-[64px] rounded-lgg bg-gray-dark border border-gray-80 transition-all md:hover:bg-gray-dark/50 md:hover:border-gray-70 px-4 rounded"
              >
                <div className="flex sticky left-1 bg-gradient-to-r from-gray-dark from-75% to-transparent before:content-[''] before:block before:w-4 before:h-[60px] before:absolute before:-left-4 before:-top-[7px] before:z-index-5 before:rounded-l-[12px] before:bg-gray-dark md:static md:bg-transparent md:before:hidden w-52">
                  <div className="flex flex-col gap-2">
                    <div className="flex flex-row gap-1 items-baseline hover:no-underline text-white hover:text-green-20">
                      <span className="flex shrink-0 truncate font-bold text-base leading-none">
                        {row.pair}
                      </span>
                      <span className="flex shrink-0 text-xs font-normal text-gray-20 leading-none">
                        {row.fee}
                      </span>
                      <div className="flex items-center gap-3">
                        <div className="flex items-center gap-2">
                          {row.networks.map((network, i) => (
                            <Image
                              key={i}
                              src={network.src}
                              alt={network.alt}
                              className="w-5 h-5"
                            />
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
                  <div className="text-sm text-red-500 visited:text-red-400 hover:text-red-200 leading-none hover:no-underline">
                    {row.owner}
                  </div>
                </div>
                <div className="flex justify-end w-32">
                  <div className="text-sm text-white font-bold">
                    {row.poolAsset}
                  </div>
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
            <div className="flex truncate relative w-full  items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">
              Explore incentives
            </div>
          </button>
        </div>
      </div>
    </>
  );
}
