import type { Metadata } from "next";
import "./globals.css";
import NavBar from "./component/Navbar";

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
      className={`h-full antialiased`}
    >
      <NavBar />
      <body className="min-h-full flex flex-col">{children}</body>
    </html>
  );
}
