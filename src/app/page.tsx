'use client';

import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight, X } from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '@/app/utils/supabase/client';

interface Product {
  title: string;
  subtitle: string;
  description: string;
  image: string;
  link: string;
  features: string[];
}

export default function Home() {
  const [selectedProduct, setSelectedProduct] = useState<Product | null>(null);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const supabase = createClient();
    
    // Set initial state
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    // Listen for auth changes
    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  const products = [
    {
      title: 'AIDA',
      subtitle: 'Business OS',
      description: 'The intelligent operating system that unifies your entire business. Manage operations, automate workflows, and scale effortlessly with AI-powered insights.',
      image: '/aida2.webp',
      link: '/aida-os',
      features: ['Unified Business Management', 'AI-Powered Automation', 'Real-time Analytics Dashboard', 'Multi-team Collaboration', 'Enterprise Security']
    },
    {
      title: 'Neon AI',
      subtitle: 'AI Intelligence',
      description: 'Advanced artificial intelligence for predictive analytics, natural language processing, and autonomous decision-making. Powered by next-gen neural architectures.',
      image: '/image9.webp',
      link: '#',
      features: ['Predictive Analytics', 'Natural Language Processing', 'Autonomous Decision Making', 'Real-time Learning', 'Custom Model Training']
    },
    {
      title: 'Data Bank',
      subtitle: 'Data Center',
      description: 'Enterprise-grade distributed data infrastructure with real-time sync, advanced analytics, and 99.99% uptime guarantees. Your data, always accessible.',
      image: '/image10.webp',
      link: '#',
      features: ['99.99% Uptime SLA', 'Real-time Data Sync', 'Advanced Analytics', 'Geographic Redundancy', 'Compliance Ready']
    },
    {
      title: 'Kree',
      subtitle: 'Game & Entertainment',
      description: 'Complete game development and interactive entertainment platform. Build immersive experiences with powerful tools, cloud deployment, and monetization.',
      image: '/image8.webp',
      link: '#',
      features: ['Game Development Suite', 'Cloud Deployment', 'Monetization Tools', 'Multiplayer Framework', 'Asset Marketplace']
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-6xl mx-auto px-0 md:px-10 mt-2">
        {/* FIX APPLIED HERE: Replaced min-h-screen with min-h-[450px] to prevent mobile stretching */}
        <div className="relative w-full min-h-112.5 md:min-h-125 overflow-hidden rounded-sm flex items-center bg-gray-100">
          
          {/* THE BACKGROUND IMAGE */}
          <Image
            src="/bg1.webp"
            alt="Neitzen AIDA OS Background"
            fill
            priority
            quality={85} // Reduced from 100 to 85 (unnoticeable quality drop, huge size saving)
            sizes="100vw" // Tells the browser exactly how wide the image will be
            className="object-cover object-right z-0"
          />

          {/* FLOATING TEXT BOX - NOW FULLY RESPONSIVE */}
          <div className="relative z-10 
            bg-white/85 backdrop-blur-md 
            shadow-2xl rounded-sm 
            w-[85%] sm:w-[65%] md:w-[45%] lg:max-w-sm 
            p-8 sm:p-10 
            ml-6 md:ml-12 
            my-10 md:my-0
            border border-white/20">
            
            <h1 className="text-xl sm:text-2xl md:text-3xl font-semibold mb-3 text-[#262626] leading-tight">
              The Ultimate Business OS
            </h1>
            
            <p className="text-xs sm:text-sm text-[#262626] mb-6 md:mb-8 leading-relaxed">
              Launch your online presence, manage SEO, and automate marketing instantly with AIDA. 
              Designed for the next generation of founders.
            </p>
            
            <div className="flex flex-wrap gap-3 md:gap-4 items-center">
              {!isLoggedIn && (
                <Link href="/auth/signup" className="bg-[#0067b8] hover:bg-[#005da6] text-white font-semibold py-2 px-4 md:px-6 rounded-sm transition-all duration-200 text-xs md:text-sm inline-block">
                  Get started
                </Link>
              )}
              <Link href="/aida-os" className="text-[#0067b8] font-semibold hover:underline flex items-center gap-1 group text-xs md:text-sm">
                Learn about AIDA <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ICON QUICK LINKS */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-8 md:gap-16">
          {[
            { name: 'AIDA', color: 'bg-black', logo: '/aida.webp' },
            { name: 'Neon AI', color: 'bg-white', logo: '/logo.webp' },
            { name: 'Data Bank', color: 'bg-gray-200', logo: '/logo3.webp' },
            { name: 'Kree', color: 'bg-gray-200', logo: '/logo2.webp' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3 text-center pointer-events-none">
              <div className="w-10 h-10 flex items-center justify-center">
                <div className={`relative w-8 h-8 ${item.color} rounded-sm shadow-sm overflow-hidden`}>
                  <Image
                    src={item.logo}
                    alt={item.name}
                    fill
                    className="object-contain p-1"
                  />
                </div>
              </div>
              <span className="text-[#0067b8] font-semibold text-[13px] leading-tight">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CARDS GRID */}
      <section id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-6 md:px-10 max-w-6xl mx-auto mb-20">
        {products.map((product, index) => (
          <div key={index} className="flex flex-col group cursor-pointer">
            <div className={`relative w-full h-60 mb-4 overflow-hidden rounded-sm flex items-center justify-center ${
              index === 0 ? 'bg-black' : 'bg-slate-100'
            }`}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-contain p-4 group-hover:scale-105 transition-transform duration-500"
              />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-1 text-[#262626]">{product.title}</h3>
            <p className="text-[#0067b8] text-[12px] md:text-[13px] font-medium mb-3">{product.subtitle}</p>
            <p className="text-[#616161] mb-4 text-[14px] md:text-[15px] leading-relaxed grow">
              {product.description}
            </p>
            <button 
              onClick={() => setSelectedProduct(product)}
              className="text-[#0067b8] font-semibold hover:underline flex items-center gap-1 text-[14px] md:text-[15px]"
            >
              Learn more <ChevronRight size={16} />
            </button>
          </div>
        ))}
      </section>

      {/* MODAL */}
      {selectedProduct && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4">
          <div className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative">
            {/* Close Button */}
            <button
              onClick={() => setSelectedProduct(null)}
              className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
              aria-label="Close modal"
            >
              <X size={24} className="text-gray-600" />
            </button>

            {/* Modal Content */}
            <div className="p-8">
              {/* Product Image */}
              <div className={`relative w-full h-80 mb-6 overflow-hidden rounded-lg ${
                selectedProduct.title === 'AIDA' ? 'bg-black' : 'bg-slate-100'
              }`}>
                <Image
                  src={selectedProduct.image}
                  alt={selectedProduct.title}
                  fill
                  sizes="(max-width: 1024px) 100vw, 50vw"
                  className="object-cover"
                />
              </div>

              {/* Product Details */}
              <div>
                <h2 className="text-4xl font-bold mb-2 text-gray-900">{selectedProduct.title}</h2>
                <p className="text-blue-600 font-semibold mb-4 text-lg">{selectedProduct.subtitle}</p>
                <p className="text-gray-700 text-lg leading-relaxed mb-6">
                  {selectedProduct.description}
                </p>
              </div>

              {/* Features List */}
              <div className="mb-6">
                <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                  {selectedProduct.features.map((feature: string, idx: number) => (
                    <li key={idx} className="flex items-start gap-3">
                      <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                      <span className="text-gray-700">{feature}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* CTA Button */}
              <button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200">
                Get Started
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}