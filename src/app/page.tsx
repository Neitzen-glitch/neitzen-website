import Link from 'next/link';
import Image from 'next/image';
import { ChevronRight } from 'lucide-react';

export default function Home() {
  return (
    <div className="w-full bg-white">
      
      {/* HERO SECTION */}
      <section className="relative w-full max-w-400 mx-auto px-0 md:px-10 mt-2">
        <div className="relative w-full min-h-113 md:h-125 overflow-hidden rounded-sm flex items-center bg-gray-100">
          
          {/* THE BACKGROUND IMAGE */}
          <Image
            src="/bg1.jpg"
            alt="Neitzen AIDA OS Background"
            fill
            priority
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
              <button className="bg-[#0067b8] hover:bg-[#005da6] text-white font-semibold py-2 px-4 md:px-6 rounded-sm transition-all duration-200 text-xs md:text-sm">
                Get started
              </button>
              <Link href="#" className="text-[#0067b8] font-semibold hover:underline flex items-center gap-1 group text-xs md:text-sm">
                Learn about AIDA <ChevronRight size={14} className="group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* ICON QUICK LINKS */}
      <section className="py-12 md:py-16 max-w-400 mx-auto px-6 md:px-10">
        <div className="grid grid-cols-2 sm:grid-cols-4 md:flex md:flex-wrap md:justify-center gap-8 md:gap-16">
          {[
            { name: 'Generative Websites', color: 'bg-blue-600' },
            { name: 'Ad Account Creation', color: 'bg-green-600' },
            { name: 'Social Management', color: 'bg-orange-600' },
            { name: 'SEO Optimization', color: 'bg-purple-600' }
          ].map((item, index) => (
            <div key={index} className="flex flex-col items-center gap-3 cursor-pointer group text-center">
              <div className="w-10 h-10 flex items-center justify-center transition-transform group-hover:-translate-y-1">
                <div className={`w-8 h-8 ${item.color} rounded-sm shadow-sm`} /> 
              </div>
              <span className="text-[#0067b8] font-semibold text-[13px] leading-tight underline-offset-4 group-hover:underline">
                {item.name}
              </span>
            </div>
          ))}
        </div>
      </section>

      {/* PRODUCT CARDS GRID */}
      <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 md:gap-6 px-6 md:px-10 max-w-400 mx-auto mb-20">
        {[1, 2, 3, 4].map((item) => (
          <div key={item} className="flex flex-col group cursor-pointer">
            <div className="relative w-full h-48 mb-4 overflow-hidden rounded-sm bg-slate-100">
              <div className="absolute inset-0 group-hover:scale-105 transition-transform duration-500" />
            </div>
            <h3 className="text-[18px] md:text-[20px] font-semibold mb-2 text-[#262626]">Automate Operations</h3>
            <p className="text-[#616161] mb-4 text-[14px] md:text-[15px] leading-relaxed grow">
              Let the system handle the heavy lifting of running your digital presence while you focus on growth.
            </p>
            <Link href="#" className="text-[#0067b8] font-semibold hover:underline flex items-center gap-1 text-[14px] md:text-[15px]">
              Learn more <ChevronRight size={16} />
            </Link>
          </div>
        ))}
      </section>

    </div>
  );
}