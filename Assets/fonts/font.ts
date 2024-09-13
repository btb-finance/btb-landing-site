import { Roboto_Mono } from "next/font/google";

const roboto_init = Roboto_Mono({
    weight: ['100', '300', '400'],
     subsets: ["latin"],
    variable: '--font-roboto'
    });

   export const roboto = roboto_init.variable