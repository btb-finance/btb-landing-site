import React from 'react'
import { FaArrowRight } from "react-icons/fa";
import arrowdown from "@/Assets/images/home/arrowdown.gif";
import Image from "next/image";



const Hero = () => {
  return (
    <div className="text-white space-y-4 ">
      <h1 className=" text-xl md:text-[28px] leading-8 md:leading-10 font-bold">
        Actionable analytics for
        <br className="hidden md:block" />
        <span className="block sm:inline">AMM liquidity providers</span>
      </h1>

      <p className="text-sm sm:text-base text-gray-300">
        Powerful analytics, automation, lending, and management tools{" "}
        <br className="hidden sm:block" />
        for liquidity providers in AMM protocols.
      </p>

      <div className="flex flex-col sm:flex-row items-start sm:items-center space-y-4 sm:space-y-0 sm:space-x-9 pt-4 sm:pt-7">
        <button className="bg-customRed text-customDark border-2 border-transparent px-4 sm:px-5 py-2 sm:py-3 rounded-lg text-sm whitespace-nowrap hover:bg-red-400 transition-all duration-200 w-full sm:w-auto">
          Connect account
        </button>

        <div className="hidden sm:block w-px h-8 bg-gray-400" />

        <div className="group flex w-full sm:w-[500px] rounded-md bg-black border border-gray-500 hover:border-gray-100 focus-within:border-customRed transition-all duration-200">
          <input
            type="text"
            placeholder="Ethereum address or ENS"
            className="flex-1 text-white bg-transparent rounded-l-md font-bold p-2 placeholder-gray-400 focus:outline-none"
          />
          <button className="bg-[#06171E] text-gray-500 focus:outline-none p-3 px-4 font-bold rounded-r-md hover:bg-gray-700 transition-all duration-200">
            GO
          </button>
        </div>
      </div>

      <div className="flex items-center space-x-1 text-customRed justify-center md:justify-start">
        <a className="flex items-center text-sm hover:text-red-300">
          View example wallet
          <FaArrowRight className="ml-2" />
        </a>
      </div>

      <div className="flex absolute inset-x-0 md:pt-10 justify-center items-center text-center gap-2 text-xs sm:text-sm leading-none text-red-200">
        <a>Scroll down</a>
        <Image
          src={arrowdown}
          alt="logo"
          width={25}
          height={25}
          unoptimized
          className="cursor-pointer text-red-200"
        />
      </div>

      <div className="absolute pt-9 md:pt-24  w-full sm:w-[90%] left-1/2 transform -translate-x-1/2">
        <div className="flex flex-col sm:flex-row items-center justify-between px-4 py-3 gap-2 bg-gradient-to-r from-[rgba(56,6,6,0.4)] to-[rgba(237,30,40,0.4)] md:rounded-full">
          <div className="flex items-center gap-3">
            <span className="text-white text-base font-semibold leading-none">
              Earn revert points
            </span>
          </div>

          <span className="text-green-10 text-xs font-normal text-start md:text-center">
            Start earning points seamlessly by using Reverts onchain tools.
          </span>

          <button className="flex justify-center items-center border border-red-700 text-white hover:bg-neonRed hover:border-customRed rounded-lg w-fit py-1 px-4">
            <span className="font-bold uppercase leading-none text-[11px]">
              Learn More
            </span>
          </button>
        </div>
      </div>
    </div>
    
  )
}

export default Hero