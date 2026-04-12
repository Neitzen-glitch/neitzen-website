"use client";

import Link from 'next/link';
import Image from 'next/image';
import { 
  ChevronRight, X, TrendingUp, 
  Orbit, 
  BrainCircuit, 
  Cpu, 
  Layers,
  Microscope
} from 'lucide-react';
import { useState, useEffect } from 'react';
import { createClient } from '@/app/utils/supabase/client';
import { motion, AnimatePresence } from 'framer-motion';

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
    
    supabase.auth.getSession().then(({ data: { session } }) => {
      setIsLoggedIn(!!session);
    });

    const { data: { subscription } } = supabase.auth.onAuthStateChange((event, session) => {
      setIsLoggedIn(!!session);
    });

    return () => {
      subscription?.unsubscribe();
    };
  }, []);

  // Animation Variants for Optimization
  const fadeInUp = {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.5 }
  };

  const staggerContainer = {
    animate: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const products = [
    {
      title: 'AIDA',
      subtitle: 'Business Intelligence OS',
      description: 'Neitzen’s flagship assistive platform. An intelligent operating system designed to automate business presence, SEO, and complex operations for business owners.',
      image: '/aida2.webp',
      link: '/aida-os',
      features: ['Agentic Task Automation', 'AI-Driven SEO', 'Operational Autopilot', 'Multi-channel Marketing']
    },
    {
      title: 'Neon AI',
      subtitle: 'Neural Architecture',
      description: 'Advanced assistive intelligence leveraging Neitzen’s internal AGI research to provide autonomous decision-making and predictive data processing.',
      image: '/image5.webp',
      link: '/products',
      features: ['Neural Logic Engines', 'Predictive Analysis', 'Autonomous Decisioning', 'Proprietary Research Models']
    },
    {
      title: 'Data Bank',
      subtitle: 'Model Training Infrastructure',
      description: 'The foundation of intelligence. High-fidelity data synthesis and infrastructure used for training large-scale models with 99.99% reliability.',
      image: '/image6.webp',
      link: '/products',
      features: ['Dataset Synthesis', 'Real-time Sync', 'Model Training Ready', 'Enterprise Data Security']
    },
    {
      title: 'Kree',
      subtitle: 'Interactive Entertainment',
      description: 'A platform merging the internet and AI to build immersive, interactive experiences and assistive software for the next generation of digital media.',
      image: '/image7.webp',
      link: '/products',
      features: ['AI Experience Suite', 'Cloud Deployment', 'Monetization Framework', 'Interactive Framework']
    }
  ];

  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-6xl mx-auto px-0 md:px-10 mt-2">
        <motion.div 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1 }}
          className="relative w-full min-h-112.5 md:min-h-125 overflow-hidden rounded-sm flex items-center bg-gray-100"
        >
          <Image
            src="/bg1.webp"
            alt="Neitzen AIDA OS Background"
            fill
            priority
            quality={85}
            sizes="100vw"
            className="object-cover object-right z-0"
          />

          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.3, duration: 0.8, ease: "easeOut" }}
            className="relative z-10 
              bg-white/85 backdrop-blur-md 
              shadow-2xl rounded-sm 
              w-[85%] sm:w-[65%] md:w-[45%] lg:max-w-sm 
              p-8 sm:p-10 
              ml-6 md:ml-12 
              my-10 md:my-0
              border border-white/20"
          >
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
          </motion.div>
        </motion.div>
      </section>

      {/* ICON QUICK LINKS */}
      <section className="py-12 md:py-16 max-w-6xl mx-auto px-6 md:px-10">
        <motion.div 
          variants={staggerContainer}
          initial="initial"
          whileInView="animate"
          viewport={{ once: true }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-8 md:gap-12"
        >
          {[
            { name: 'Advancement', icon: TrendingUp, color: 'text-blue-600' },
            { name: 'Research', icon: Microscope, color: 'text-purple-600' },
            { name: 'Intelligence', icon: BrainCircuit, color: 'text-amber-500' },
            { name: 'Development', icon: Cpu, color: 'text-emerald-600' },
            { name: 'Software', icon: Layers, color: 'text-indigo-600' },
            { name: 'Technology', icon: Orbit, color: 'text-slate-700' }
          ].map((item, index) => (
            <motion.div 
              key={index}
              variants={fadeInUp}
              className="flex flex-col items-center gap-4 text-center group cursor-default"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-full bg-gray-50 border border-gray-100 shadow-sm group-hover:shadow-md group-hover:bg-white transition-all duration-300">
                <item.icon 
                  size={24} 
                  className={`${item.color} group-hover:scale-110 transition-transform duration-300`} 
                  strokeWidth={1.5}
                />
              </div>
              <span className="text-[#262626] font-medium text-[13px] md:text-[14px] tracking-wide uppercase">
                {item.name}
              </span>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* PRODUCT CARDS GRID */}
      <section id="products" className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-6 md:px-10 max-w-6xl mx-auto mb-20">
        {products.map((product, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
            className="flex flex-col group cursor-pointer"
          >
            <div className={`relative w-full h-60 mb-4 overflow-hidden rounded-sm flex items-center justify-center ${
              index === 0 ? 'bg-black' : 'bg-black'
            }`}>
              <Image
                src={product.image}
                alt={product.title}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className={`transition-transform duration-500 group-hover:scale-105 ${
                  product.title === 'AIDA' ? 'object-contain p-10' : 'object-cover'
                }`}
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
          </motion.div>
        ))}
      </section>

      {/* MODAL */}
      <AnimatePresence>
        {selectedProduct && (
          <motion.div 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          >
            <motion.div 
              initial={{ scale: 0.9, opacity: 0, y: 20 }}
              animate={{ scale: 1, opacity: 1, y: 0 }}
              exit={{ scale: 0.9, opacity: 0, y: 20 }}
              transition={{ type: "spring", damping: 25, stiffness: 300 }}
              className="bg-white rounded-lg shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-y-auto relative"
            >
              <button
                onClick={() => setSelectedProduct(null)}
                className="absolute top-4 right-4 p-2 hover:bg-gray-100 rounded-lg transition-colors z-10"
                aria-label="Close modal"
              >
                <X size={24} className="text-gray-600" />
              </button>

              <div className="p-8">
                <div className={`relative w-full h-80 mb-6 overflow-hidden rounded-lg ${
                  selectedProduct.title === 'AIDA' ? 'bg-black' : 'bg-slate-100'
                }`}>
                  <Image
                    src={selectedProduct.image}
                    alt={selectedProduct.title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 50vw"
                    className={selectedProduct.title === 'AIDA' ? 'object-contain p-12' : 'object-cover'}
                  />
                </div>

                <div>
                  <h2 className="text-4xl font-bold mb-2 text-gray-900">{selectedProduct.title}</h2>
                  <p className="text-blue-600 font-semibold mb-4 text-lg">{selectedProduct.subtitle}</p>
                  <p className="text-gray-700 text-lg leading-relaxed mb-6">
                    {selectedProduct.description}
                  </p>
                </div>

                <div className="mb-6">
                  <h3 className="text-xl font-bold mb-4 text-gray-900">Key Features</h3>
                  <ul className="grid grid-cols-1 md:grid-cols-2 gap-3">
                    {selectedProduct.features.map((feature: string, idx: number) => (
                      <motion.li 
                        initial={{ opacity: 0, x: -10 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ delay: idx * 0.05 }}
                        key={idx} 
                        className="flex items-start gap-3"
                      >
                        <div className="w-2 h-2 bg-blue-600 rounded-full mt-2 shrink-0" />
                        <span className="text-gray-700">{feature}</span>
                      </motion.li>
                    ))}
                  </ul>
                </div>

                <Link 
                  href={selectedProduct.link}
                  className="w-full block text-center bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-6 rounded-lg transition-colors duration-200"
                >
                  Get Started
                </Link>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}