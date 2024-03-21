import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Team Wanderlust",
  description: "Team Wanderlust from IIIT Hyderabad, India",
};

export default function Layout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className + " flex flex-col flex-grow h-screen overflow-hidden"}>
        {children}
      </body>
    </html>
  );
}
