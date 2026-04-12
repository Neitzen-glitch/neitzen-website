
"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import * as Icons from 'lucide-react';
import Link from 'next/link';

// --- Interfaces ---
interface ContactChannel {
  title: string;
  description: string;
  actionText: string;
  link: string;
  icon: React.ReactNode;
}

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

export default function ContactPage() {
  const channels: ContactChannel[] = [
    {
      title: "Technical Support",
      description: "Get help with deployment, API integration, or troubleshooting.",
      actionText: "support@neitzen.tech",
      link: "mailto:support@neitzen.tech",
      icon: <Icons.LifeBuoy className="text-blue-600" size={24} />
    },
    {
      title: "Sales & Partnerships",
      description: "Discuss enterprise licensing, custom builds, and volume pricing.",
      actionText: "Contact Sales",
      link: "mailto:founder@neitzen.tech",
      icon: <Icons.MessageSquare className="text-teal-600" size={24} />
    },
    {
      title: "Documentation",
      description: "Explore our comprehensive guides and developer resources.",
      actionText: "View Docs",
      link: "/docs",
      icon: <Icons.FileText className="text-slate-600" size={24} />
    }
  ];

  return (
    <div className="min-h-screen bg-white text-slate-900 selection:bg-blue-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="pt-20 pb-16 px-6 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp}>
            <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6">
              How can we help you?
            </h1>
            <p className="max-w-2xl mx-auto text-xl text-slate-600 leading-relaxed">
              Find technical resources, contact our support agents, or explore partnership opportunities with Neitzen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* ================= CONTACT CHANNELS ================= */}
      <section className="py-20 px-6">
        <div className="max-w-7xl mx-auto">
          <motion.div 
            initial="hidden" 
            whileInView="visible" 
            viewport={{ once: true }}
            variants={staggerContainer}
            className="grid grid-cols-1 md:grid-cols-3 gap-8"
          >
            {channels.map((item, i) => (
              <motion.div 
                key={i} 
                variants={fadeInUp}
                className="p-8 border border-slate-200 rounded-xl hover:border-blue-300 hover:shadow-lg transition-all group"
              >
                <div className="mb-6">{item.icon}</div>
                <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                <p className="text-slate-600 mb-6 leading-relaxed">{item.description}</p>
                <Link 
                  href={item.link} 
                  className="inline-flex items-center gap-2 text-blue-600 font-bold group-hover:underline"
                >
                  {item.actionText} <Icons.ArrowRight size={16} />
                </Link>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* ================= MAIN CONTACT FORM & INFO ================= */}
      <section className="py-20 px-6 bg-slate-50">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            
            {/* Left: Contact Form */}
            <motion.div 
              initial={{ opacity: 0, x: -20 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="bg-white p-8 md:p-12 rounded-2xl border border-slate-200 shadow-sm"
            >
              <h2 className="text-3xl font-bold mb-8">Send us a message</h2>
              <form className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Full Name</label>
                    <input type="text" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="John Doe" />
                  </div>
                  <div>
                    <label className="block text-sm font-bold mb-2 text-slate-700">Work Email</label>
                    <input type="email" className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="name@company.com" />
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Subject</label>
                  <select title='options' className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all appearance-none">
                    <option>General Inquiry</option>
                    <option>Technical Support</option>
                    <option>Enterprise Sales</option>
                    <option>Billing</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm font-bold mb-2 text-slate-700">Message</label>
                  <textarea rows={5} className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded focus:ring-2 focus:ring-blue-500 outline-none transition-all" placeholder="How can we help?" />
                </div>
                <button className="w-full py-4 bg-slate-900 text-white font-bold rounded hover:bg-slate-800 transition-all shadow-md">
                  Submit Request
                </button>
              </form>
            </motion.div>

            {/* Right: Office & Links */}
            <div className="flex flex-col justify-center">
              <div className="space-y-12">
                <div>
                  <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                    <Icons.Globe className="text-blue-600" size={24} /> Global Presence
                  </h3>
                  <div className="space-y-6">
                    <div className="flex gap-4">
                      <Icons.MapPin className="text-slate-400 shrink-0" size={20} />
                      <div>
                        <p className="font-bold">Main Headquarters</p>
                        <p className="text-slate-600">Kaduna, Nigeria</p>
                      </div>
                    </div>
                    <div className="flex gap-4">
                      <Icons.Clock className="text-slate-400 shrink-0" size={20} />
                      <div>
                        <p className="font-bold">Support Hours</p>
                        <p className="text-slate-600">Monday — Friday: 9am – 6pm (WAT)</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div className="pt-8 border-t border-slate-200">
                  <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-6">Security & Trust</h3>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Icons.Shield size={18} className="text-green-600" /> 
                      <span>GDPR Compliant</span>
                    </div>
                    <div className="flex items-center gap-2 text-slate-700 font-medium">
                      <Icons.Shield size={18} className="text-green-600" /> 
                      <span>SOC2 Certified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>


    </div>
  );
}