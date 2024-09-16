import footerLink from "@/utils/homejs/footerLink"
import Image from "next/image"
import btblogo from "@/assets/images/Logo/btblogo.png"
export default function Footer2(){
    return(
        <>
         <div className="flex w-full h-[260px] md:h-[104px] bg-color items-center relative border-t border-t-gray-700 pb-10 md:pb-6">
          <div className="flex flex-col md:flex-row w-full h-fit md:h-4 px-4 md:px-8 justify-between items-center gap-10 font-Roboto_Mono">
            <div className="flex w-fit items-center md:items-baseline gap-5 md:gap-10 text-gray-300 text-[11px] relative text-xs">
            <div className="flex flex-col items-center justify-center ">
                <Image src={btblogo} alt="btblogo" width={20} height={20}  />
                </div>
              <div className="flex flex-1 items-center justify-center md:items-baseline"> 
                btb-finance © 2024 | ALL RIGHTS RESERVED
                </div>
            </div>
            <div className="flex flex-wrap gap-5 md:gap-6 md:justify-end text-gray-300 text-xs uppercase order-first md:order-last">
            {footerLink.map((link, index) => (
        <div key={index} className="w-1/4 md:w-fit text-left">
          <a
            className="hover:text-white hover:no-underline"
            href={"#"}
            target={"_blank"}
            
          >
            {link.text}
          </a>
        </div>
      ))}
            </div>
          </div>
        </div>
        </>
    )
}