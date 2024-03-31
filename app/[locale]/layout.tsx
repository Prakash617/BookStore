import "./globals.css";

import type { Metadata } from "next";
import { Inter } from "next/font/google";
import Navbar from "@/components/Layout/Navbar";
import Footer from "@/components/Layout/Footer";
import SideCart from "@/components/Layout/SideCart";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
    title: "Create Next App",
    description: "Generated by create next app",
};

export default function RootLayout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return (
        <html lang="en">
            <body className={inter.className}>
                <Navbar />
                {/* <SideCart open={false} setOpen={undefined}/> */}
                {children}
                <Footer />
            </body>
        </html>
    );
}