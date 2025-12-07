import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/layout/Header";
import Stripe from "@/components/layout/Stripe";
import Footer from "@/components/layout/Footer";
import SocialSidebar from "@/components/layout/SocialSidebar";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "CIP Study Abroad",
  description: "Your gateway to world-class education abroad",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <SocialSidebar />
        <Header />
        <Stripe />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
