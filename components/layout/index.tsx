import Head from "next/head";
import React from "react";
import roboto from "@/assets/fonts/font";
import Navbar from "./Navbar";

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
        <main className={`${roboto}`}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
