import React from 'react';
import Button from './Button';
import Image from 'next/image';
import manage from '@/Assets/images/home/manage-img.svg';
import logo from '@/Assets/images/home/btblogo.png';

const Section3 = () => {
  return (
    <div className='max-w-full h-auto md:h-screen md:py-[80px]  flex flex-col md:flex-row mx-auto mt-12 sm:mt-12 md:mt-0 gap-y-8 md:gap-x-28 '>

      <div className='basis-full md:basis-[55%] order-1'>
        <div className='space-y-8'>
          <div className='space-y-5'>
            <h1 className="text-white text-xl md:text-[27px] leading-8 md:leading-10 font-bold">
              Create and manage LP positions.
            </h1>

            <p className="text-sm sm:text-base text-gray-300">
              Manage all your LP positions with ease and automation from one trusty dashboard. Deposit, Withdraw, Collect, Move-Range, Auto-Exit, and Compound fees.
            </p>
          </div>

          <div className='space-y-5'>
            <Button />

            <div className='flex text-[10px]  md:text-[11px]  bg-red-950 px-2 py-0.5 rounded-full text-gray-200 items-center gap-2 w-[230px] md:w-[240px] '>
              <Image
                src={logo}
                height={15}
                width={15}
                alt='logo'
              />
              Earn points managing positions
            </div>
          </div>
        </div>
      </div>

      
      <div className='basis-full md:basis-[45%] order-2'>
        <Image
          src={manage}
          height={500}
          width={500}
          alt='image'
        />
      </div>
    </div>
  );
}

export default Section3;
