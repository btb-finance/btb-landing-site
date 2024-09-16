import Footer from "@/components/layout/Footer";
import Hero from "@/components/main/home/Hero";
import Section2 from "@/components/main/home/Section2";
import Section3 from "@/components/main/home/Section3";
import Section4 from "@/components/main/home/Section4";
import Section5 from "@/components/main/home/Section5";
import Section6 from "@/components/main/home/Section6";
import Section7 from "@/components/main/home/Section7";
import Footer2 from "@/components/layout/Footer2";
import Section8 from "@/components/main/home/Section8";
import Section9 from "@/components/main/home/Section9";
import Section10 from "@/components/main/home/Section10";
import Section11 from "@/components/main/home/Section11";
import Section12 from "@/components/main/home/Section12";
export default function Home() {
  return (
    <>
      <div className="flex flex-col min-h-screen items-center ">
        <div
          className="font-roboto flex flex-col min-h-full bg-[#06171E] md:pt-8 px-4 sm:px-6 pt-6 md:px-28   justify-start"
          style={{ paddingTop: "130px" }}
        >
          <Hero />
          <Section2 />
          <Section3 />
          <Section4 />
          <Section5 />
          <Section6 />
          <Section7 />
        </div>

        <main>
          <div className="flex flex-col flex-1 gap-8 mx-auto mt-8 mb-8 w-full max-w-full sm:min-w-full  md:max-w-screen-md lg:max-w-screen-lg xl:max-w-screen-xl px-4 md:px-8 lg:px-16 overflow-y-auto">
            <Section8 />
            <Section9 />
            <Section10 />
            <Section11 />
            <Section12 />
          </div>
        </main>
        <Footer2 />
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
}
