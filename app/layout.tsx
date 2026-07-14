import type { Metadata } from "next";
import { Inter, Poppins } from "next/font/google";
import "./globals.css";
import NavBar from "./component/Navbar";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Viks Enterprise Ltd",
  description:
    "A UK-based company dedicated to delivering innovative solutions across technology, professional services and creative industries.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${poppins.variable} h-full antialiased`}
    >
      <NavBar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
