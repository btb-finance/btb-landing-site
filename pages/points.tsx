"use client"

import Image from "next/image"
import Img1 from "@/assets/images/points/points-btns.svg"
import Img2 from "@/assets/images/points/coins.svg"
import dataTable from "@/utils/points.js/dataTable"
import faqData from "@/utils/points.js/faqData"
export default function Points() {
    return (
        <>
            <div className="pt-20 pb-20 pl-8 pr-8 w-full bg-color font-Roboto_Mono">
                <div className="flex flex-col gap-10">
                    <div className="flex flex-col gap-5 md:gap-8">
                        <div className="w-auto flex justify-between gap-5 flex-col md:flex-row md:mx-4 md:pt-8 max-w-[1480px] px-4 md:px-0">
                            <div className="flex flex-col gap-1">
                                <div className="flex text-white text-lg md:text-xl font-bold leading-8 flex-wrap">
                                    btb-finance Points
                                </div>
                            </div>
                        </div>
                        <div className="flex flex-col bg-gray-950 border border-gray-500 rounded md:rounded gap-5 px-4  pt-4 md:px-6 md:pt-5 pb-8">
                            <h2 className="flex text-white text-lg font-bold">How to earn BTB points?</h2>
                            <div className="flex flex-col md:flex-row md:justify-between gap-y-5 gap-x-8">
                                <div className="flex flex-col  w-full h-fit gap-6">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-base font-bold leading-none text-red-400">Just use btb-finance</h3>
                                            <p className="text-gray-400">Earn points by using the different Revert onchain tools.</p>
                                        </div>
                                        <Image src={Img1} alt="first" className="w-3/4 md:w-[256px] max-w-none" />
                                    </div>
                                </div>
                                <div className="border-b border-gray-400 w-full md:w-0 md:border-none"></div>
                                <div className=" border-gray-400 w-0.5   md:border-l"></div>
                                <div className="flex flex-col w-full h-fit gap-6">
                                    <div className="flex flex-col gap-5 items-center">
                                        <div className="flex flex-col gap-2">
                                            <h3 className="text-base text-red-400 font-bold leading-none">Boost btb-finance points earned</h3>
                                            <p className="text-gray-400">Earn 1.5x more points by using Revert onchain tools during Phase 1 of the revert points program.</p>
                                        </div>
                                        <div className="flex w-full max-w-[360px] justify-center items-center h-[60px] rounded-[20px] gap-4 md:mt-2
                              bg-red-600">
                                            <div><Image src={Img2} alt="second" className="h-[52px]" /></div>

                                            <div className="flex flex-col gap-1">
                                                <div className="text-white text-[18px] font-bold leading-[18px]">Multiplier 1.5x</div>
                                                <div className="text-white text-[10px] font-normal leading-none">for new btb-finance points accrued.</div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                                <div className="border-b border-gray-400 w-full md:w-0 md:border-none"></div>
                                <div className=" border-gray-400 w-0.5  md:border-l"></div>

                                <div className="flex flex-col w-full h-fit gap-6">
                                    <div className="flex flex-col gap-5">
                                        <div className="flex flex-col gap-4">
                                            <div className="flex flex-col gap-2">
                                                <h3 className="text-base text-red-400 font-bold leading-none">Team up for extra points</h3>
                                                <p className="text-gray-400">Share your revert referral link and earn 5% of all the revert points your referrals generate. Updated every 7 days.</p>
                                            </div>
                                            <div className="flex w-full max-w-[248px] h-10 px-4 py-2 my-1 bg-gray-700 rounded-xl justify-start
                                 items-baseline gap-1.5">
                                                <div className="text-gray-400 text-2xl font-semibold leading-none">0</div>
                                                <div className="text-gray-400 text-sm leading-none">referral pts</div>
                                            </div>
                                        </div>
                                        <button className="flex relative items-center justify-between bg-red-500 border border-red-500 text-gray-900 hover:bg-red-400 hover:border-red-400 rounded h-7 w-fit">
                                            <div className="flex truncate relative w-full items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">Connect account</div>
                                        </button>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="flex flex-col gap-8 md:grid md:grid-cols-2 md:gap-12">
                        <div className="flex flex-col w-full gap-6 md:gap-8">
                            <div className="flex flex-col md:flex-row justify-between gap-5 md:mx-4 max-w-[1480px] px-4 md:px-0">
                                <div className="flex flex-col gap-1">
                                    <h2 className="flex text-white text-lg md:text-xl font-bold leading-8 flex-wrap">Leaderboard last 30d</h2>
                                </div>

                            </div>
                            <div className="w-full">
                                <div className="flex flex-col min-w-[320px] overflow-x-scroll overflow-y-hidden
                                md:overflow-visible md:min-w-[480px] relative z-[1] px-3 md:px-0">
                                    <div className="flex flex-col w-full md:w-auto relative gap-2 -mt-2">
                                        <div className="flex items-start justify-between text-gray-400 md:sticky md:top-[120px] py-2
                                             z-[8] text-xs text-gray-20 pl-4 pr-8  h-7 w-full md:w-full rounded-md  ">
                                            <div className="flex  items-center">place</div>
                                            <div className="flex  items-center">owner</div>
                                            <div className="flex  items-center">points earned</div>
                                        </div>
                                        <div className="flex flex-col gap-2 pr-4 md:p-0 w-[400px] md:w-full">
                                            {dataTable.map((item) => (
                                                <div key={item.rank} className="flex justify-between items-center h-10 px-4 rounded-md transition-all
                                          bg-gray-dark border border-gray-80 md:hover:bg-color relative
                                          md:hover:border-gray-700">
                                                    <div className="flex justify-center sticky left-1 bg-gradient-to-r from-gray-dark
                           md:from-transparent from-75% to-transparent before:bg-gray-dark
                           before:content-[''] before:block before:w-4 before:h-7 before:absolute
                           before:-left-4 before:-top-[2px] before:z-index-5 before:bg-gray-dark
                           md:static md:bg-transparent md:before:hidden w-20">
                                                        <div className="flex items-center justify-center text-white">{item.rank}</div>
                                                    </div>
                                                    <div className="flex items-center justify-center text-red-400">{item.address}</div>
                                                    <div className="flex items-center justify-center text-white">{item.points}  <span className="text-gray-400">pts</span></div>
                                                </div>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </div>





                        </div>
                        <div className="flex flex-col w-full gap-6">
                            <div className="flex flex-col md:flex-row justify-between gap-5 md:mx-4 max-w-[1480px] px-4 md:px-0">
                                <div className="flex flex-col gap-1">
                                    <h2 className="flex text-white text-lg md:text-xl font-bold leading-8 flex-wrap">FAQ</h2>
                                </div>

                            </div>
                            <div className="flex flex-col bg-gray-dark border border-gray-80 md:rounded-md gap-5 px-4 py-6 md:px-6">
                                <div className="last-tx-table relative flex flex-col gap-5">
                                    <div className="flex flex-col gap-4">
                                        {faqData.map((item, index) => (
                                            <div key={index} className="flex flex-col gap-1">
                                                <div className="text-sm text-red-400 leading-5">{item.question}</div>
                                                <div className="text-xs md:text-sm text-gray-400 md:leading-[18px] leading-5 pl-3">{item.answer}</div>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                </div>


            </div>
        </>
    )
}