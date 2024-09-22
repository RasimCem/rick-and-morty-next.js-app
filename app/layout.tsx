"use client";
//import type { Metadata } from "next";
import "@/app/globals.css";
import { Navbar, Footer } from "@/components";
import { BioRhyme, Montserrat, Open_Sans } from "next/font/google";

//👇 Configure our font object
const montserrat = Montserrat({
  subsets: ['latin'],
  display: 'swap',
})

// export const metadata: Metadata = {
//   title: "Rick and Morty",
//   description: "Rick and Morty APP",
// };

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={montserrat.className} >
        <Navbar />
        <div className="relative isolate px-6 md:pt-14 md: pb-20">
          <div className="mx-auto max-w-4xl ">
            {children}
          </div>
        </div>
        <Footer />
      </body>
    </html>
  );
}
