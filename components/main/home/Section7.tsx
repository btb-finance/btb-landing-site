import React from "react";
import Image from "next/image";
import compound from "@/assets/images/home/auto-compound-img-1.svg";

const Section7 = () => {
  return (
    <div className="max-w-full  h-auto md:h-screen flex flex-col md:flex-row mx-auto  md:gap-x-28 -mt-40 md:-mt-72 sm:-mb-28 ">
      <div className="basis-full md:basis-[55%] order-1">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="space-y-5">
              <div className="space-x-5 mb-10 mt-16">
                <button className=" border border-purple-600 px-1.5 py-0.5 text-sm text-[#e0b8ff] bg-black rounded-md hover:bg-purple-900">
                  Compound
                </button>
              </div>

              <h1 className="text-white text-xl md:text-[28px] leading-8 md:leading-10  font-bold">
                Boost earnings with Auto-Compounding.
              </h1>

              <p className="text-sm sm:text-base text-gray-300">
                Auto-Compounding allows to automate the compounding of accrued
                fees. Depending on the fee APR and position size, this can
                significantly enhance returns.
              </p>
            </div>
            <div className="py-7">
              <div className="flex text-xs bg-gray-900 w-fit h-7 px-3 rounded-full text-gray-200 items-center gap-2">
                <span className="text-sm text-gray-20">Audited by </span>

                <a
                  href=""
                  className="text-sm text-red-500 hover:text-red-200 hover:no-underline"
                >
                  CODE4ARENA,{" "}
                </a>
                <a
                  href=""
                  className="text-sm text-red-500 hover:text-red-200 hover:no-underline"
                >
                  HYDN,{" "}
                </a>

                <span className="text-sm text-gray-20">and </span>
                <a
                  href=""
                  className="text-sm text-red-500 hover:text-red-200 hover:no-underline"
                >
                  PECKSHIELD
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Image Section */}
      <div className=" md:basis-[45%] order-2  -mt-16 sm:-mt-16 md:mt-5">
        <Image src={compound} height={550} width={550} alt="image" />
      </div>
    </div>
  );
};

export default Section7;
