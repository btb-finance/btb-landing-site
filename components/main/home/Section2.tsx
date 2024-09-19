import React from 'react'
import Image from 'next/image';
import uniswap from "@/assets/images/home/uniswap.svg";
import eth from "@/assets/images/home/red-eth.svg";
import bnb from "@/assets/images/home/red-bnb.svg";
import arbi from "@/assets/images/home/arbi.svg";
import base from "@/assets/images/home/red-base.svg";
import op from "@/assets/images/home/red-op.svg";
import polygon from "@/assets/images/home/red-polygon.svg";
import sushiswap from "@/assets/images/home/sushiswap-red.svg";
import forge from "@/assets/images/home/forge-red.svg";
import pancake from "@/assets/images/home/red-pancake.svg";
import evmos from "@/assets/images/home/evmos.svg";
import balancer from "@/assets/images/home/balancer.svg";
import curve from "@/assets/images/home/curve.svg";
import velodrome from "@/assets/images/home/velodrome.svg";
import aerodrome from "@/assets/images/home/aerodrome.svg";
import maverik from "@/assets/images/home/maverik.svg";
import ambient from "@/assets/images/home/ambient.svg";
import camelot from "@/assets/images/home/camelot.svg";
import traderjoe from "@/assets/images/home/traderjoe.svg";
import quickswap from "@/assets/images/home/quickswap-red.svg"

const Section2 = () => {
  return (
    <div className="flex flex-col mt-64  mb-3 font-roboto">
    <div className="flex justify-start">
      <div className="">
        <h2 className="text-black border border-customRed bg-customRed p-0.5 rounded-md font-bold">
          OPTIMIZE LIQUIDITY. ANALYZE. MANAGE. EARN
        </h2>
      </div>
    </div>
    <div className="text-white space-y-4 mt-8 text-left">
      <h1 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
        Comprehensive analysis for top AMM protocols.
      </h1>

      <p className="text-sm sm:text-base text-gray-300">
        Get a detailed breakdown on LP positions for major AMM protocols on
        Ethereum, Polygon, Arbitrum, Optimism, BNB, Base, and EVMOS.
      </p>
    </div>

    <div className="mt-10">
      <h2 className="text-customRed">LIVE CHANGES</h2>
    </div>
    <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-3 gap-4 p-5 mt-5 mb-10 font-roboto ">
      <div className="flex space-x-9  items-center">
        <Image src={uniswap} height={70} width={70} alt="img" />
        <div>
          <h1 className="font-bold text-white text-[15px] leading-[38px] sm:text-[24px] sm:leading-[44px] text-wrap">
            Uniswap_v3
          </h1>
          <div className="flex gap-2 mt-2">
            <Image src={eth} height={25} width={25} alt="img" />
            <Image src={polygon} height={25} width={25} alt="img" />
            <Image src={op} height={25} width={25} alt="img" />
            <Image src={base} height={25} width={25} alt="img" />
            <Image src={bnb} height={25} width={25} alt="img" />
            <Image src={arbi} height={25} width={25} alt="img" />
          </div>
        </div>
      </div>

      <div className="flex space-x-8 items-center">
        <Image src={uniswap} height={70} width={70} alt="img" />
        <div>
          <h1 className="font-bold text-white text-[15px] leading-[38px] sm:text-[24px] sm:leading-[44px] text-wrap">
            Uniswap_v2
          </h1>
          <div className="flex gap-2 mt-2">
            <Image src={eth} height={25} width={25} alt="img" />
          </div>
        </div>
      </div>

      <div className="flex space-x-8 items-center">
        <Image src={sushiswap} height={70} width={70} alt="img" />
        <div>
          <h1 className="font-bold text-white text-[15px] leading-[38px] sm:text-[24px] sm:leading-[44px] text-wrap">
            Uniswap_v3
          </h1>
          <div className="flex gap-2 mt-2">
            <Image src={eth} height={25} width={25} alt="img" />
            <Image src={arbi} height={25} width={25} alt="img" />
          </div>
        </div>
      </div>

      <div className="flex space-x-8 items-center md:mt-6">
        <Image src={pancake} height={70} width={70} alt="img" />
        <div>
          <h1 className="font-bold text-white text-[15px] leading-[38px] sm:text-[24px] sm:leading-[44px] text-wrap">
            Pancakeswap
          </h1>
          <div className="flex gap-2 mt-2">
            <Image src={bnb} height={25} width={25} alt="img" />
          </div>
        </div>
      </div>

      <div className="flex space-x-8 items-center md:mt-6">
        <Image src={forge} height={70} width={70} alt="img" />
        <div>
          <h1 className="font-bold text-white text-[15px] leading-[38px] sm:text-[24px] sm:leading-[44px] text-wrap">
            Forge
          </h1>
          <div className="flex gap-2 mt-2">
            <Image src={evmos} height={25} width={25} alt="img" />
          </div>
        </div>
      </div>
    </div>
    <div className="  ">
      <div className="">
        <h2 className="text-red-300">COMING SOON</h2>
      </div>

      <div className=" grid grid-cols-2 sm:grid-cols-2 md:grid-cols-5 mt-5 gap-6">
        <div className="flex items-center space-x-4">
          <Image src={uniswap} height={40} alt="img" />
          <h2 className="text-red-300">Uniswap_v4</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={balancer} height={40} alt="img" />
          <h2 className="text-red-300">Balancer</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={aerodrome} height={40} alt="img" />
          <h2 className="text-red-300">Aerodrome</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={curve} height={40} alt="img" />
          <h2 className="text-red-300">Curve</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={maverik} height={40} alt="img" />
          <h2 className="text-red-300">Maverik</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={ambient} height={40} alt="img" />
          <h2 className="text-red-300">Ambient</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={velodrome} height={40} alt="img" />
          <h2 className="text-red-300">Velodrome</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={camelot} height={40} alt="img" />
          <h2 className="text-red-300">Camelot</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={traderjoe} height={40} alt="img" />
          <h2 className="text-red-300">Trader Joe</h2>
        </div>

        <div className="flex items-center space-x-4">
          <Image src={quickswap} height={40} alt="img" />
          <h2 className="text-red-300">QuickSwap</h2>
        </div>
      </div>
    </div>
  </div>
  )
}

export default Section2