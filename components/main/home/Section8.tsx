import data from "@/utils/home/data"

export default function Section8(){
    return(
        <>
          <div className="flex flex-col w-full gap-8">
            <div className="flex flex-col w-full gap-3 px-4 md:px-0 font-Roboto_Mono">
              <h2 className="text-white text-xl md:text-[28px] leading-8 md:leading-10 font-bold">Backtest LP positions.</h2>
              <p className="text-xs md:text-sm text-gray-300">Access historical performance data based on selected parameters while creating
                <br className="no-visible-mobile" />
                a position to make better decisions.
              </p>
            </div>
            <div className="flex flex-col  w-fit h-fit px-4 py-6 rounded md:p-6 md:rounded-lg gap-5 bg-gray-900 border border-gray-700 ">
              <div className="flex flex-col gap-2">
                <h3 className="text-base text-white leading-none">WETH/USDC Backtesting</h3>
                <p className="text-sm text-gray-300">This is a simulation based on historical data. It is not a prediction.</p>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-x-4 gap-y-6 md:gap-x-8">
                {data.map((item, index) => (
                  <div key={index} className="flex flex-col w-full md:w-[200px] gap-2">
                    <div className="text-xs text-gray-300 leading-none">{item.label}</div>
                    <div className={`text-xl leading-none font-bold ${item.color}`}>{item.percentage}</div>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex flex-col md:flex-row gap-3 w-fit px-4 md:px-0">
              <button className="flex relative rounded items-center justify-between bg-red-500 border border-red-500 text-gray-dark hover:bg-green-20 hover:border-red-300 rounded-lgg h-7 w-fit">
                <div className="flex truncate relative w-full  items-center pl-3 pr-3 font-bold leading-none text-sm justify-center">Create position</div>
              </button>
            </div>
          </div>
        </>
    )
}