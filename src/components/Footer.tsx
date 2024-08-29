export default function Footer(){
    return(
        <> 
        <footer className="grid grid-cols-12 ">
            <div className="sm:col-span-3 border-t border-r border-gray-800" >
              <div className="grid grid-cols-12 gap-2 m-2">
                <div className="sm:col-span-3  text-white text-sx flex items-center justify-center">
                     Revert 2024
                </div>
                <div className="sm:col-span-9  ">
                   <div className="grid grid-cols-12 gap-2 m-2 ">
                      <div className="sm:col-span-3 text-white text-sx flex items-center justify-center">Twitter</div>
                      <div className="sm:col-span-3 text-white text-sx flex items-center justify-center">Discord</div>
                      <div className="sm:col-span-3 text-white text-sx flex items-center justify-center">Telegram</div>
                      <div className="sm:col-span-3 text-white text-sx flex items-center justify-center">Blog</div>
                   </div>
                </div>
               </div>
            </div>
            <div className="sm:col-span-6 hidden md:block  border-t border-gray-800"></div>
            <div className="sm:col-span-3  border-t border-l border-gray-800" >
               <div className="grid grid-col-12 gap-2 ">
                <div className="sm:col-span-3  border-r text-white text-sx flex items-center justify-center">v.584e4a9</div>
                <div className="sm:col-span-3  border-r text-white text-sx flex items-center justify-center">Block</div>
                <div className="sm:col-span-6  border-r text-white text-sx flex items-center justify-center">ETHEREUM 4.114EWEI</div>
               </div>
            </div>
        </footer>
        </>
        
    )
   
}