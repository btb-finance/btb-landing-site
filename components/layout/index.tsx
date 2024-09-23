import Head from "next/head";
import React from "react";
import roboto from "@/assets/fonts/font";
import Navbar from "./Navbar";
import Footer2 from "./Footer2";
import Footer from "./Footer";

interface LayoutProps {
  children: React.ReactNode;
}

// const robotoMono = Roboto_Mono({ subsets: ["latin"],
//   variable:"--robotoMono",
//   weight:["100","200","300","400","500","600","700"]
//  });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>BTB Finance</title>
        </Head>
        <Navbar />
        <main className={`${roboto}`}>{children}<Footer2/><Footer/></main>
      </div>
    </>
  );
};

export default Layout;
