import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className=" bg-color text-white text-center w-full fixed bottom-0 left-0 flex items-center justify-between h-5 font-Roboto_Mono z-50">
        <div className=" color flex-1 flex items-center justify-between h-full sm:flex w-full sm:w-3/4 lg:w-2/3  border-t-2 border-l-2 border-gray-800">
          <div className=" flex items-center justify-center h-full text-xs whitespace-nowrap min-w-0 flex-shrink-0 px-2">
            btb-finance &copy; 2024
          </div>
          <div className="  flex items-center justify-between h-full w-full text-xs">
            <div className="flex-1 flex items-center justify-center mx-2">
              <Link href={"#"} className="hover:text-white">TWITTER</Link>
            </div>
            <div className="flex-1 flex items-center justify-center mx-2">
            <Link href={"#"} className="hover:text-white">DISCORD</Link>
            </div>
            <div className="flex-1 flex items-center justify-center mx-2">
            <Link href={"#"} className="hover:text-white">TELEGRAM</Link>
            </div>
            <div className="flex-1 flex items-center justify-center mx-2">
            <Link href={"#"} className="hover:text-white">BLOG</Link>
            </div>
          </div>
        </div>

        <div className="color flex items-center justify-center h-full sm:flex w-full sm:w-3/4 lg:w-2/3 text-xs border-t-2 border-l-2 border-gray-800"></div>

        <div className="color flex-1  flex items-center justify-between h-full border-t-2 border-l-2 border-gray-800">
          <div className="sm:flex flex items-center justify-center h-full text-xs whitespace-nowrap min-w-0 flex-shrink-0 px-2">
            v.0.1.0
          </div>
          <div className=" flex items-center justify-center h-full border-l-2 border-gray-800 text-xs whitespace-nowrap min-w-0 flex-shrink-0 px-2">
            BLOCK
          </div>
          <div className=" flex items-center justify-center h-full border-l-2 border-gray-800 text-xs whitespace-nowrap min-w-0 flex-shrink-0 px-2">
            SOLANA speed 1.118 GWEI
          </div>
        </div>
      </footer>
    </>
  );
}
