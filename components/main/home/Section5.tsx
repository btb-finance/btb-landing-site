import React from "react";
import Image from "next/image";
import range from "@/Assets/images/home/move-range-img (1).png";

const Section5 = () => {
  return (
    <div className="max-w-full  h-auto md:h-screen flex flex-col md:flex-row mx-auto  md:gap-x-28 -mt-40 md:-mt-72 mb-20 sm:mb-20">
      <div className="basis-full md:basis-[55%] order-1">
        <div className="space-y-8">
          <div className="space-y-5">
            <div className="space-y-5">
              <div className="space-x-5 mb-10 mt-16">
                <button className=" border border-neonRed px-1.5 py-0.5  text-neonRed bg-[#47091f] rounded-lg hover:bg-red-900">
                  Move-Range
                </button>
              </div>

              <h1 className="text-white text-xl md:text-[28px] leading-8 md:leading-10  font-bold">
                Keep your positions in-range.
              </h1>

              <p className="text-sm sm:text-base text-gray-300">
                Your liquidity consistently in-range with Manual move range and
                Reverts Auto-Range, ensuring you never miss out on pool fees.
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

      <div className=" md:basis-[45%] order-2  -mt-16 sm:-mt-16 md:mt-5">
        <Image src={range} height={550} width={550} alt="image" />
      </div>
    </div>
  );
};

export default Section5;
