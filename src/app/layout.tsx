"use client"; // Added this to allow the menu toggle to work

import { useState } from 'react'; // Added for the menu logic
import Link from 'next/link';
import { Search, User, ChevronRight, Globe, Menu, X } from 'lucide-react';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <html lang="en">
      <body className="min-min-h-screen bg-white text-black font-sans flex flex-col antialiased">
        
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
          <nav className="max-w-400 mx-auto px-4 md:px-10 flex items-center justify-between h-14 text-[13px]">
            
            {/* Left Side: Logo + Mobile Menu Toggle */}
            <div className="flex items-center h-full">
              <button 
                className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-sm" 
                onClick={() => setIsMenuOpen(!isMenuOpen)}
                aria-label="Toggle Menu"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <Link href="/" className="mr-2 md:mr-6 flex items-center">
                <span className="font-semibold text-[16px] md:text-[18px] tracking-tight text-[#262626]">
                  Neitzen Inc.
                </span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center h-full space-x-1 text-black font-medium">
                {['AIDA OS', 'Features', 'Solutions', 'Pricing', 'Support'].map((link) => (
                  <Link 
                    key={link} 
                    href="#" 
                    className="px-4 h-full flex items-center hover:underline hover:underline-offset-[6px] decoration-2"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center h-full gap-1 md:gap-2 text-black font-medium">
              <div className="hidden lg:flex items-center h-full mr-2">
                <button className="px-4 h-full flex items-center hover:underline hover:underline-offset-[6px] decoration-2">
                  All Neitzen <ChevronRight size={14} className="ml-1 rotate-90" />
                </button>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-sm" title="Search">
                <Search size={20} className="text-black stroke-[2.5]" />
              </button>
              
              <button className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-sm group">
                <span className="hidden sm:inline text-[13px]">Sign in</span>
                <User size={24} className="text-black border-2 border-black rounded-full p-0.5" />
              </button>
            </div>
          </nav>

          {/* MOBILE DROPDOWN MENU */}
          {isMenuOpen && (
            <div className="md:hidden bg-[#f2f2f2] border-b border-gray-200 py-4 px-6 flex flex-col space-y-4 font-medium text-[#262626]">
              {['AIDA OS', 'Features', 'Solutions', 'Pricing', 'Support'].map((link) => (
                <Link key={link} href="#" onClick={() => setIsMenuOpen(false)} className="hover:underline">
                  {link}
                </Link>
              ))}
              <hr className="border-gray-300" />
              <button className="text-left hover:underline flex items-center justify-between">
                All Neitzen <ChevronRight size={14} />
              </button>
            </div>
          )}
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="grow w-full bg-white">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#f2f2f2] text-[#616161] text-[12px] mt-10 md:mt-20">
          <div className="max-w-400 mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">What's new</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:underline">AIDA OS</Link></li>
                <li><Link href="#" className="hover:underline">Generative Sites</Link></li>
                <li><Link href="#" className="hover:underline">AI Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Business</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:underline">Neitzen Cloud</Link></li>
                <li><Link href="#" className="hover:underline">For Startups</Link></li>
                <li><Link href="#" className="hover:underline">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Developer</h4>
              <ul className="space-y-3">
                <li><Link href="#" className="hover:underline">Documentation</Link></li>
                <li><Link href="#" className="hover:underline">API Reference</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-400 mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-[11px] gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <Globe size={14} /> English (Nigeria)
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href="#" className="hover:underline">Contact Neitzen</Link>
              <Link href="#" className="hover:underline">Privacy</Link>
              <Link href="#" className="hover:underline">Terms of use</Link>
              <Link href="#" className="hover:underline">Trademarks</Link>
              <span>© Neitzen Inc. 2026</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}