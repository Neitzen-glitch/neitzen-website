/* eslint-disable react/no-unescaped-entities */

"use client";

import React from 'react';
import { motion, Variants } from 'framer-motion';
import { 
  BarChart3, ShoppingBag, 
  Zap, ShieldCheck, PlayCircle, 
  Cpu, Rocket, 
  Code2, Briefcase, Sparkles,
  Layers, Database, Activity
} from 'lucide-react';
import Link from 'next/link';

// --- Interfaces ---
interface Solution {
  title: string;
  icon: React.ReactNode;
  description: string;
  tags: string[];
  benefit: string;
}

interface Industry {
  name: string;
  icon: React.ReactNode;
}

// --- Animation Variants ---
const fadeInUp: Variants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
};

const staggerContainer: Variants = {
  hidden: { opacity: 0 },
  visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
};

// Floating animation fix: Ensure keys match the animate prop
const floating: Variants = {
  animate: {
    y: [0, -15, 0],
    transition: {
      duration: 4,
      repeat: Infinity,
      ease: "easeInOut"
    }
  }
};

export default function SolutionsPage() {
  const solutions: Solution[] = [
    {
      title: "Hyper-Personalized E-Commerce",
      icon: <ShoppingBag className="text-blue-600" size={28} />,
      description: "Replace static storefronts with agentic interfaces that predict user intent and generate custom landing pages in real-time.",
      tags: ["AIDA", "Neon AI"],
      benefit: "35% increase in conversion rates"
    },
    {
      title: "Intelligent Data Orchestration",
      icon: <BarChart3 className="text-teal-600" size={28} />,
      description: "Automate the flow of enterprise data from raw ingestion to actionable vector memory without manual pipeline management.",
      tags: ["Data Bank", "Infrastructure"],
      benefit: "Zero-latency data syncing"
    },
    {
      title: "Generative Media & Gaming",
      icon: <Sparkles className="text-purple-600" size={28} />,
      description: "Deploy interactive environments where NPCs remember past conversations and the world reacts to player choices.",
      tags: ["Kree", "Neon Engine"],
      benefit: "Infinite replayability"
    }
  ];

  const industries: Industry[] = [
    { name: "FinTech", icon: <ShieldCheck size={20} /> },
    { name: "Healthcare", icon: <Cpu size={20} /> },
    { name: "SaaS & Tech", icon: <Code2 size={20} /> },
    { name: "Creative Agencies", icon: <Briefcase size={20} /> }
  ];

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900 font-sans selection:bg-blue-100">
      
      {/* ================= HERO SECTION ================= */}
      <section className="relative pt-10 pb-20 px-6 bg-white border-b border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            
            {/* Left Content */}
            <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="text-left">
              <span className="inline-block px-4 py-1.5 mb-6 text-sm font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 rounded-full border border-blue-100">
                Solutions Ecosystem
              </span>
              <h1 className="text-5xl md:text-7xl font-extrabold tracking-tight mb-8 text-slate-900">
                Solve for <span className="text-blue-600">now</span>.<br />
                Scale for <span className="text-teal-500">whenever</span>.
              </h1>
              <p className="max-w-xl text-xl text-slate-600 leading-relaxed mb-10">
                The Neitzen Stack isn't just a set of tools—it's a modular framework designed to bridge the gap between human intent and autonomous execution.
              </p>
              <div className="flex flex-col sm:flex-row items-center gap-4">
                <Link href="/contact" className="px-8 py-4 bg-blue-600 text-white font-bold rounded-sm hover:bg-blue-700 transition-all shadow-lg shadow-blue-200 w-full sm:w-auto text-center">
                  Request a Demo
                </Link>
                <button className="px-8 py-4 bg-white text-slate-700 font-bold rounded-sm border border-slate-200 hover:bg-slate-50 transition-all flex items-center gap-2 w-full sm:w-auto justify-center">
                  <PlayCircle size={20} /> Watch Overview
                </button>
              </div>
            </motion.div>

            {/* Right Visual */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 1 }}
              className="relative hidden lg:flex items-center justify-center h-[500px]"
            >
              <div className="absolute inset-0 bg-gradient-to-tr from-blue-50 to-teal-50 rounded-full blur-3xl opacity-50" />
              
              {/* FIX: Floating variants applied correctly */}
              <motion.div variants={floating} animate="animate" className="relative z-10 w-full max-w-md">
                {/* Neon AI Layer */}
                <div className="absolute -top-10 -left-10 p-6 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl flex items-center gap-4 w-64 translate-x-4">
                  <div className="w-10 h-10 bg-blue-600 rounded-lg flex items-center justify-center text-white">
                    <Zap size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Engine</p>
                    <p className="font-bold text-slate-900">Neon Intelligence</p>
                  </div>
                </div>

                {/* Data Bank Layer */}
                <div className="absolute top-20 -right-10 p-6 bg-white/80 backdrop-blur-md border border-slate-200 shadow-xl rounded-2xl flex items-center gap-4 w-64 translate-y-8">
                  <div className="w-10 h-10 bg-teal-500 rounded-lg flex items-center justify-center text-white">
                    <Database size={20} />
                  </div>
                  <div>
                    <p className="text-xs font-bold text-slate-400 uppercase">Memory</p>
                    <p className="font-bold text-slate-900">Vector Data Bank</p>
                  </div>
                </div>

                {/* Main Hub */}
                <div className="p-10 bg-slate-900 rounded-3xl shadow-2xl border border-slate-800 flex flex-col items-center text-center">
                  <div className="w-20 h-20 bg-gradient-to-br from-blue-500 to-purple-600 rounded-2xl flex items-center justify-center text-white mb-6 shadow-lg">
                    <Layers size={40} />
                  </div>
                  <h3 className="text-white font-bold text-xl mb-2">Unified Solution</h3>
                  <p className="text-slate-400 text-sm">Orchestrating autonomous logic across all Neitzen nodes.</p>
                  
                  <div className="mt-8 flex gap-2">
                    <div className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
                    <div className="w-2 h-2 rounded-full bg-blue-400 animate-pulse delay-75" />
                    <div className="w-2 h-2 rounded-full bg-purple-400 animate-pulse delay-150" />
                  </div>
                </div>

                {/* Status Indicator */}
                <div className="absolute -bottom-6 left-1/2 -translate-x-1/2 px-4 py-2 bg-white border border-slate-200 shadow-lg rounded-full flex items-center gap-2 whitespace-nowrap">
                   <Activity size={14} className="text-blue-600" />
                   <span className="text-xs font-bold text-slate-700">Real-time Optimization Active</span>
                </div>
              </motion.div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* ================= INDUSTRY VERTICALS ================= */}
      <div className="bg-slate-900 py-6 overflow-hidden border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {industries.map((ind, i) => (
            <div key={i} className="flex items-center gap-2 text-slate-400 font-medium">
              {ind.icon}
              <span>{ind.name}</span>
            </div>
          ))}
        </div>
      </div>

      {/* ================= CORE SOLUTIONS GRID ================= */}
      <section className="py-24 px-6 max-w-7xl mx-auto">
        <div className="mb-16 text-left">
          <h2 className="text-3xl font-bold mb-4">Enterprise-grade outcomes</h2>
          <div className="w-20 h-1 bg-blue-600"></div>
        </div>

        <motion.div 
          initial="hidden" 
          whileInView="visible" 
          viewport={{ once: true }} 
          variants={staggerContainer}
          className="grid grid-cols-1 md:grid-cols-3 gap-8"
        >
          {solutions.map((sol, index) => (
            <motion.div 
              key={index} 
              variants={fadeInUp}
              className="group p-8 bg-white border border-slate-200 rounded-xl hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300 flex flex-col h-full"
            >
              <div className="mb-6 p-4 bg-slate-50 rounded-lg w-fit group-hover:bg-white group-hover:scale-110 transition-transform">
                {sol.icon}
              </div>
              <h3 className="text-2xl font-bold mb-4">{sol.title}</h3>
              <p className="text-slate-600 mb-8 flex-grow leading-relaxed">
                {sol.description}
              </p>
              
              <div className="pt-6 border-t border-slate-100 mt-auto">
                <div className="text-sm font-bold text-blue-600 mb-4 uppercase tracking-tighter">
                  Expected Impact: {sol.benefit}
                </div>
                <div className="flex flex-wrap gap-2">
                  {sol.tags.map((tag, tIndex) => (
                    <span key={tIndex} className="px-2 py-1 bg-slate-100 text-slate-500 text-xs font-mono rounded">
                      #{tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </section>

      {/* ================= THE "DREAM CAPTURE" WORKFLOW ================= */}
      <section className="py-24 bg-white border-y border-slate-200 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp}>
              <h2 className="text-4xl font-bold mb-6 leading-tight">
                From Abstract Idea <br />to <span className="text-blue-600 font-mono">Autonomous Action.</span>
              </h2>
              <div className="space-y-8">
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-blue-600 text-white flex items-center justify-center font-bold">1</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Intent Mapping</h4>
                    <p className="text-slate-600">Our agentic UI captures your goals via natural language, eliminating the need for complex dashboards.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-teal-500 text-white flex items-center justify-center font-bold">2</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Neural Routing</h4>
                    <p className="text-slate-600">Neon AI decomposes the task and routes data requirements to localized vector stores for maximum accuracy.</p>
                  </div>
                </div>
                <div className="flex gap-6">
                  <div className="flex-shrink-0 w-12 h-12 rounded-full bg-purple-600 text-white flex items-center justify-center font-bold">3</div>
                  <div>
                    <h4 className="text-xl font-bold mb-2">Live Deployment</h4>
                    <p className="text-slate-600">The Kree engine renders the experience or the system executes the business logic instantly across your infrastructure.</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, x: 50 }} 
              whileInView={{ opacity: 1, x: 0 }} 
              transition={{ duration: 0.8 }}
              className="relative aspect-square bg-slate-900 rounded-3xl p-8 shadow-3xl overflow-hidden"
            >
              <div className="absolute top-0 right-0 p-4">
                <div className="flex gap-2">
                  <div className="w-3 h-3 rounded-full bg-red-500" />
                  <div className="w-3 h-3 rounded-full bg-yellow-500" />
                  <div className="w-3 h-3 rounded-full bg-green-500" />
                </div>
              </div>
              
              <div className="mt-12 font-mono text-sm space-y-6">
                <div className="text-blue-400"># Start Agentic Pulse</div>
                <div className="p-4 bg-slate-800 rounded border border-slate-700 text-slate-300">
                  "I need to launch a dynamic storefront for my new sneaker brand that adapts its layout based on the user's past interaction with streetwear."
                </div>
                <div className="space-y-2">
                  <div className="flex items-center gap-2 text-teal-400">
                    <Zap size={14} /> <span>Analyzing Brand Aesthetics...</span>
                  </div>
                  <div className="flex items-center gap-2 text-teal-400">
                    <Zap size={14} /> <span>Fetching Vector User History...</span>
                  </div>
                  <div className="flex items-center gap-2 text-blue-400 animate-pulse">
                    <Rocket size={14} /> <span>Generating AIDA Frontend...</span>
                  </div>
                </div>
                <div className="text-green-400 font-bold pt-4">
                  SUCCESS: Instance deployed to global CDN in 1.4s.
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 px-6 bg-slate-50 text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeInUp} className="max-w-4xl mx-auto">
          <h2 className="text-4xl md:text-5xl font-extrabold mb-8 text-slate-900 tracking-tight">
            Stop building features. <br />Start building <span className="text-blue-600">solutions.</span>
          </h2>
          <p className="text-xl text-slate-600 mb-12">
            Join the enterprise teams already leveraging Neitzen to automate their core operations.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/auth/signup" className="px-10 py-5 bg-blue-600 text-white font-bold text-lg rounded-sm hover:shadow-xl transition-all">
              Build Your First Solution
            </Link>
            <Link href="/contact" className="px-10 py-5 bg-white text-slate-900 border border-slate-200 font-bold text-lg rounded-sm hover:bg-slate-50 transition-all">
              Talk to Sales
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}