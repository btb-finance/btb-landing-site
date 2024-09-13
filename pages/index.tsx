import React from 'react';
import Hero from '../components/main/home/Hero'
import Section2 from '@/components/main/home/Section2';
import Section3 from '@/components/main/home/Section3';
import Section4 from '@/components/main/home/Section4';
import Section5 from '@/components/main/home/Section5';
import Section6 from '@/components/main/home/Section6';
import Section7 from '@/components/main/home/Section7';


const Index = () => {
  return (
    <div className="font-roboto flex flex-col min-h-full bg-[#06171E] md:pt-8 px-4 sm:px-6 pt-6 md:px-28   justify-start" style={{ paddingTop: '130px' }}>
      <Hero/>
      <Section2/>
      <Section3/>
      <Section4/>
      <Section5/>
      <Section6/>
      <Section7/>
</div>  
  )
};

export default Index;
