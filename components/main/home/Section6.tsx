import React from 'react';
import Image from 'next/image';
import exit from '@/assets/images/home/auto-exit-img-2.svg';

const Section6 = () => {
  return (
    <div className='max-w-full  h-auto md:h-screen flex flex-col md:flex-row mx-auto  md:gap-x-28 -mt-40 md:-mt-72 mb-20 sm:mb-20'>
  
      <div className='basis-full md:basis-[55%] order-1'>
        <div className='space-y-8'>
          <div className='space-y-5'>

          <div className='space-y-5'>
      <div className="space-x-5 mb-10 mt-16">
        <button className=" border border-neonRed px-1.5 py-0.5  text-neonRed bg-[#47091f] rounded-lg hover:bg-red-900">Auto-Exit</button>

        
      </div> 

            <h1 className="text-white text-xl md:text-[28px] leading-8 md:leading-10  font-bold">
            Automate exits with Auto-exit.


            </h1>

            <p className="text-sm sm:text-base text-gray-300">
            Automate your exit strategy with Auto-Exit. Set your target exit prices to automate your exits, ensuring peace of mind and minimizing losses.
            </p>
          </div>
          <div className='py-7'>
          <div className="flex text-xs bg-gray-900 w-fit h-7 px-3 rounded-full text-gray-200 items-center gap-2">
            <span className="text-sm text-gray-20">Audited by </span>

            <a href=""  className="text-sm text-red-500 hover:text-red-200 hover:no-underline">CODE4ARENA, </a>
            <a href=""  className="text-sm text-red-500 hover:text-red-200 hover:no-underline">HYDN, </a>
            
            <span className="text-sm text-gray-20">and </span>
            <a href=""  className="text-sm text-red-500 hover:text-red-200 hover:no-underline">PECKSHIELD</a>
            </div>
            </div>
            
          
        </div>
      </div>
    </div>
      {/* Image Section */}
      <div className=' md:basis-[45%] order-2  -mt-16 sm:-mt-16 md:mt-5'>
        <Image
          src={exit}
          height={550}
          width={550}
          alt='image'
          
        />
      </div>
    </div>
  );
}

export default Section6;

