import React from "react";
import Button from "./Button";
import Image from "next/image";
import borrow from "@/Assets/images/home/borrow-red.svg";

const Section4 = () => {
  return (
    <div className="max-w-full  h-auto md:h-screen flex flex-col md:flex-row mx-auto  md:gap-x-28 md:-mt-52 mb-20 sm:mb-20">
      <div className="basis-full md:basis-[55%] order-1">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="space-y-5">
              <div className="space-x-5 mb-10 mt-16">
                <button className=" border border-neonRed px-1.5 py-0.5  text-neonRed bg-[#47091f] rounded-lg hover:bg-red-900">
                  Landing
                </button>

                <button className="bg-blue-950 text-blue-300 border-2 border-blue-600 px-1.5 py-0.5 rounded-lg text-sm transition-colors hover:text-white hover:bg-blue-900">
                  Borrow
                </button>
              </div>

              <h1 className="text-white text-xl md:text-[28px] leading-8 md:leading-10  font-bold">
                Collateralize LP Positions.
              </h1>

              <p className="text-sm sm:text-base text-gray-300">
                Secure loans with LP positions as collateral while retaining
                management of your liquidity.
              </p>
            </div>
            <div className="py-7">
              <Button />
            </div>
          </div>
        </div>
      </div>

      <div className=" md:basis-[45%] order-2  -mt-16 sm:-mt-16 md:mt-5 lg:-mt-10">
        <Image src={borrow} height={550} width={550} alt="image" />
      </div>
    </div>
  );
};

export default Section4;
