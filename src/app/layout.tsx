import type { Metadata } from "next";
import { Bricolage_Grotesque } from "next/font/google";
import DarkModeProvider from "@/provider/DarkModeProvider";
import Header from "@/components/Header";
import { Analytics } from "@vercel/analytics/react"

import "./globals.css";

const bricolage_grotesque_init = Bricolage_Grotesque({
  subsets: ["latin"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "UGsnippet",
  description: "Designed and Developed by Fardeen",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <DarkModeProvider>
        <body
          className={`${bricolage_grotesque_init.className} dark:bg-black bg-gray-100 min-h-screen`}
        >
          <Header />
          {children}
          <Analytics />
        </body>
      </DarkModeProvider>
    </html>
  );
}
