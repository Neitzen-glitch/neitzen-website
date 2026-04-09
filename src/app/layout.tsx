"use client";

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Search, User, ChevronRight, Globe, Menu, X, LogOut } from 'lucide-react';
import { createClient } from '@/app/utils/supabase/client';
import { useRouter } from 'next/navigation';
import type { User as SupabaseUser } from '@supabase/supabase-js';
import './globals.css';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);
  const [user, setUser] = useState<SupabaseUser | null>(null);

  const supabase = createClient();
  const router = useRouter();

  useEffect(() => {
    // Check initial session
    const checkUser = async () => {
      const { data: { user } } = await supabase.auth.getUser();
      setUser(user);
    };
    checkUser();

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((_event, session) => {
      setUser(session?.user ?? null);
    });

    return () => subscription.unsubscribe();
  }, [supabase.auth]);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleSignOut = async () => {
    await supabase.auth.signOut();
    setIsUserMenuOpen(false);
    router.push('/');
  };

  // Helper to centralize route management
  const getRoute = (name: string) => {
    const routes: Record<string, string> = {
      'AIDA OS': '/aida-os',
      'Products': '/products',
      'Solutions': '/solutions',
      'Pricing': '/pricing',
      'Support': '/support',
      'Generative Sites': '/features/generative-sites',
      'AI Marketing': '/features/ai-marketing',
      'Neitzen Cloud': '/business/cloud',
      'For Startups': '/business/startups',
      'Documentation': '/docs',
      'API Reference': '/docs/api',
      'Contact Neitzen': '/contact',
      'Privacy': '/privacy',
      'Terms of use': '/terms',
      'Trademarks': '/trademarks'
    };
    return routes[name] || '#';
  };

  return (
    <html lang="en">
      <body className="min-h-screen bg-white text-black font-sans flex flex-col antialiased" suppressHydrationWarning>
        
        {/* GLOBAL NAVBAR */}
        <header className="sticky top-0 z-50 bg-white w-full border-b border-gray-200">
          <nav className="max-w-[1600px] mx-auto px-4 md:px-10 flex items-center justify-between h-14 text-[13px]">
            
            {/* Left Side: Logo + Mobile Menu Toggle */}
            <div className="flex items-center h-full">
              <button 
                className="md:hidden mr-2 p-2 hover:bg-gray-100 rounded-sm cursor-pointer relative z-50 flex items-center justify-center active:bg-gray-200" 
                onClick={toggleMenu}
                aria-label="Toggle Menu"
                type="button"
              >
                {isMenuOpen ? <X size={20} /> : <Menu size={20} />}
              </button>

              <Link href="/" className="mr-2 md:mr-6 flex items-center cursor-pointer">
                <span className="font-semibold text-[16px] md:text-[18px] tracking-tight text-[#262626]">
                  Neitzen Inc.
                </span>
              </Link>

              {/* Desktop Links */}
              <div className="hidden md:flex items-center h-full space-x-1 text-black font-medium">
                {['AIDA OS', 'Products', 'Solutions', 'Pricing', 'Support'].map((link) => (
                  <Link 
                    key={link} 
                    href={getRoute(link)} 
                    className="px-4 h-full flex items-center hover:underline hover:underline-offset-[6px] decoration-2 cursor-pointer"
                  >
                    {link}
                  </Link>
                ))}
              </div>
            </div>

            {/* Right Side */}
            <div className="flex items-center h-full gap-1 md:gap-2 text-black font-medium">
              <div className="hidden lg:flex items-center h-full mr-2">
                <Link href="/all-neitzen" className="px-4 h-full flex items-center hover:underline hover:underline-offset-[6px] decoration-2 cursor-pointer">
                  All Neitzen <ChevronRight size={14} className="ml-1 rotate-90" />
                </Link>
              </div>
              
              <button className="p-2 hover:bg-gray-100 rounded-sm cursor-pointer" title="Search">
                <Search size={20} className="text-black stroke-[2.5]" />
              </button>
              
              {/* AUTH STATE UI */}
              {user ? (
                <div className="relative">
                  <button 
                    onClick={() => setIsUserMenuOpen(!isUserMenuOpen)}
                    className="p-1 hover:bg-gray-100 rounded-full transition-colors cursor-pointer"
                    title="User menu"
                  >
                    <User size={24} className="text-black border-2 border-black rounded-full p-0.5" />
                  </button>

                  {/* SIGN OUT DROPDOWN */}
                  {isUserMenuOpen && (
                    <div className="absolute right-0 mt-2 w-48 bg-white border border-gray-200 shadow-lg py-2 z-[60]">
                      <div className="px-4 py-2 border-b border-gray-100">
                        <p className="text-[11px] text-gray-500 truncate">{user.email}</p>
                      </div>
                      <button 
                        onClick={handleSignOut}
                        className="w-full text-left px-4 py-2 hover:bg-gray-50 flex items-center gap-2 text-red-600 font-medium cursor-pointer"
                        title="Sign out"
                      >
                        <LogOut size={16} /> Sign out
                      </button>
                    </div>
                  )}
                </div>
              ) : (
                <Link href="/auth/signin" className="flex items-center gap-2 p-2 hover:bg-gray-100 rounded-sm group cursor-pointer">
                  <span className="hidden sm:inline text-[13px]">Sign in</span>
                  <User size={24} className="text-black border-2 border-black rounded-full p-0.5" />
                </Link>
              )}
            </div>
          </nav>

          {/* MOBILE DROPDOWN MENU */}
          {isMenuOpen && (
            <div className="block md:hidden bg-white shadow-lg border-t border-gray-100 w-full">
              <nav className="flex flex-col font-medium text-[#262626]">
                {['AIDA OS', 'Products', 'Solutions', 'Pricing', 'Support'].map((link) => (
                  <Link
                    key={link}
                    href={getRoute(link)}
                    onClick={() => setIsMenuOpen(false)}
                    className="py-4 px-6 border-b border-gray-100 hover:bg-gray-50 text-[15px] text-left w-full transition-colors block"
                  >
                    {link}
                  </Link>
                ))}
                <Link 
                  href="/all-neitzen"
                  onClick={() => setIsMenuOpen(false)}
                  className="py-4 px-6 text-left hover:bg-gray-50 flex items-center justify-between border-b border-gray-100 w-full transition-colors block"
                >
                  All Neitzen <ChevronRight size={16} />
                </Link>
              </nav>
            </div>
          )}
        </header>

        {/* MAIN CONTENT AREA */}
        <main className="grow w-full bg-white relative">
          {children}
        </main>

        {/* GLOBAL FOOTER */}
        <footer className="bg-[#f2f2f2] text-[#616161] text-[12px] mt-10 md:mt-20">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Whats new</h4>
              <ul className="space-y-3">
                <li><Link href={getRoute('AIDA OS')} className="hover:underline cursor-pointer">AIDA OS</Link></li>
                <li><Link href={getRoute('Generative Sites')} className="hover:underline cursor-pointer">Generative Sites</Link></li>
                <li><Link href={getRoute('AI Marketing')} className="hover:underline cursor-pointer">AI Marketing</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Business</h4>
              <ul className="space-y-3">
                <li><Link href={getRoute('Neitzen Cloud')} className="hover:underline cursor-pointer">Neitzen Cloud</Link></li>
                <li><Link href={getRoute('For Startups')} className="hover:underline cursor-pointer">For Startups</Link></li>
                <li><Link href={getRoute('Solutions')} className="hover:underline cursor-pointer">Solutions</Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-gray-800 mb-4">Developer</h4>
              <ul className="space-y-3">
                <li><Link href={getRoute('Documentation')} className="hover:underline cursor-pointer">Documentation</Link></li>
                <li><Link href={getRoute('API Reference')} className="hover:underline cursor-pointer">API Reference</Link></li>
              </ul>
            </div>
          </div>

          <div className="max-w-[1600px] mx-auto px-6 md:px-10 py-6 flex flex-col md:flex-row items-center justify-between text-[11px] gap-4">
            <div className="flex items-center gap-2 cursor-pointer hover:underline">
              <Globe size={14} /> English (Nigeria)
            </div>
            <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
              <Link href={getRoute('Contact Neitzen')} className="hover:underline cursor-pointer">Contact Neitzen</Link>
              <Link href={getRoute('Privacy')} className="hover:underline cursor-pointer">Privacy</Link>
              <Link href={getRoute('Terms of use')} className="hover:underline cursor-pointer">Terms of use</Link>
              <Link href={getRoute('Trademarks')} className="hover:underline cursor-pointer">Trademarks</Link>
              <span>© Neitzen Inc. 2026</span>
            </div>
          </div>
        </footer>
      </body>
    </html>
  );
}