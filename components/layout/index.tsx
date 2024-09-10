import Head from "next/head";
import React from "react";
import { Roboto_Mono } from "next/font/google";

interface LayoutProps {
  children: React.ReactNode;
}

const robotoMono = Roboto_Mono({ subsets: ["latin"],
  variable:"--robotoMono",
  weight:["100","200","300","400","500","600","700"]
 });

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <>
      <div>
        <Head>
          <title>BTB Finance</title>
        </Head>
        <main className={robotoMono.variable}>{children}</main>
      </div>
    </>
  );
};

export default Layout;
