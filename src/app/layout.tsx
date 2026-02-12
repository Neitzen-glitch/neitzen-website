import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";



export const metadata: Metadata = {
  title: "Neitzen",
  description: "Building foundational software for the future of humanity.",
  keywords: [
    "Neitzen",
    "Software",
    "Future",
    "Humanity",
    "Technology",
    "Innovation",
    "AI",
    "Machine Learning",
    "Data Science",
    "AIDA"
  ],
  authors: [{ name: "Neitzen" }],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className="bg-[#0B0F19] text-white min-h-screen flex flex-col">
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
