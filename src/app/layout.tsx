import type { Metadata } from "next";
import { Poppins, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { NavBar } from "./components/layouts/nav-bar/nav-bar";
import { Footer } from "./components/layouts/footer/footer";

const poppins = Poppins({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: ["600"],
});
const nunito = Nunito_Sans({
  subsets: ["latin"],
  variable: "--font-secondary",
});

export const metadata: Metadata = {
  title: "Nishant Kaushik",
  description: "Portfolio website for Nishant Kaushik",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${poppins.variable} ${nunito.variable} h-full w-full`}
    >
      <body className="relative w-full sm:flex sm:flex-col sm:h-screen">
        <NavBar />
        <main className="sm:flex-1 sm:overflow-auto">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
