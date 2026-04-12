/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/jsx-no-comment-textnodes */
"use client";

import Link from 'next/link';
import Image from 'next/image';
import { motion, useScroll } from 'framer-motion';
import { 
  Network, Cpu, Shield, Database, 
  Zap, Layers, Activity, Lock, 
  Braces, Gamepad2, Sparkles, MonitorPlay, 
  ArrowRight, CheckCircle2, Terminal, Workflow, 
  Server, Key, Eye, Cloud
} from 'lucide-react';
import { useRef } from 'react';

const fadeUp = {
hidden: { opacity: 0, y: 30 },
visible: { opacity: 1, y: 0 }
};

export default function ComprehensiveProductsPage() {
  const containerRef = useRef(null);  
  // Base Animations - Fixed variant definitions to resolve IDE red lines
// 1. Define variants (Ideally OUTSIDE the component to prevent re-renders)

    <motion.div 
        variants={fadeUp}    // The object
        initial="hidden"     // Must match a key in fadeUp
        animate="visible"    // Must match a key in fadeUp
    >
        Content
    </motion.div>


  const stagger = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };

  return (
    <div ref={containerRef} className="w-full bg-white overflow-hidden text-slate-900">
      
      {/* ================= HERO ECOSYSTEM ================= */}
      <section className="relative w-full pt-20 pb-32 px-6 md:px-10 max-w-7xl mx-auto flex flex-col items-center text-center">
        <motion.div initial="hidden" animate="visible" variants={stagger} className="max-w-4xl">
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-semibold tracking-wide uppercase mb-8 border border-slate-200">
            <Activity size={16} className="text-blue-600" />
            <span>Neitzen Core Infrastructure</span>
          </motion.div>
          <motion.h1 variants={fadeUp} className="text-5xl md:text-7xl font-bold tracking-tight mb-8 leading-tight">
            The foundation of <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 via-teal-500 to-purple-600">
              artificial enterprise.
            </span>
          </motion.h1>
          <motion.p variants={fadeUp} className="text-xl md:text-2xl text-slate-600 mb-12 leading-relaxed max-w-3xl mx-auto">
            Beyond AIDA, Neitzen builds the raw engines of intelligence. Explore the neural frameworks, high-fidelity data lakes, and interactive engines powering our ecosystem.
          </motion.p>
        </motion.div>
      </section>

      {/* ================= NEON AI: THE BRAIN ================= */}
      {/* Updated Gradient: blue-100 for more obvious depth */}
      <section className="relative w-full bg-gradient-to-b from-blue-100 via-white to-slate-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          
          {/* Product Title Integrated (No sticky bar) */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center shadow-md">
              <Network className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-blue-900">Neon AI</h2>
          </div>

          {/* Neon Hero */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24 text-center md:text-left">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">Cognitive reasoning,<br/>delivered via API.</h3>
            <p className="text-xl text-slate-600 max-w-3xl">
              Neon AI is a proprietary reasoning engine designed to replace rigid code logic with fluid, self-correcting neural pathways. It doesn't just process data; it understands intent, predicts failure states, and dynamically routes tasks to the most efficient models.
            </p>
          </motion.div>

          {/* Neon Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start mb-24">
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="space-y-12">
              <div>
                <h4 className="text-2xl font-bold mb-4 flex items-center gap-3"><Cpu className="text-blue-600"/> Architecture Breakdown</h4>
                <div className="space-y-6">
                  {[
                    { title: "Dynamic Logic Resolver", desc: "Interprets abstract user prompts and breaks them into deterministic, executable code steps in real-time." },
                    { title: "Predictive Horizon Mapping", desc: "Analyzes systemic loads and anticipates data bottlenecks up to 15 steps ahead of execution." },
                    { title: "Contextual Memory State", desc: "Maintains secure, isolated vector states for long-term project memory without cross-contamination." }
                  ].map((item, i) => (
                    <div key={i} className="border-l-2 border-blue-300 pl-6">
                      <h5 className="font-semibold text-lg mb-2">{item.title}</h5>
                      <p className="text-slate-600">{item.desc}</p>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>

            {/* Visual Component mock */}
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-slate-900 rounded-2xl p-8 shadow-2xl text-slate-300 font-mono text-sm h-full border border-slate-700/50">
              <div className="flex gap-2 mb-6 border-b border-slate-700 pb-4">
                <div className="w-3 h-3 rounded-full bg-red-500"></div>
                <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
                <div className="w-3 h-3 rounded-full bg-green-500"></div>
              </div>
              <div className="space-y-4">
                <p><span className="text-blue-400">const</span> <span className="text-green-400">neonCore</span> = <span className="text-blue-400">new</span> <span className="text-yellow-400">NeonEngine</span>{`{`}</p>
                <p className="pl-4">mode: <span className="text-orange-400">'AUTONOMOUS'</span>,</p>
                <p className="pl-4">failover: <span className="text-blue-400">true</span>,</p>
                <p className="pl-4">maxLatency: <span className="text-orange-400">50</span> <span className="text-slate-500">// ms</span></p>
                <p>{`});`}</p>
                <br/>
                <p><span className="text-slate-500">// System interpreting multi-step business logic...</span></p>
                <p className="text-blue-300">➜ Analyzing dependencies...</p>
                <p className="text-blue-300">➜ Routing to localized vector store...</p>
                <p className="text-green-400 font-bold">✔ Execution path compiled in 12ms.</p>
              </div>
            </motion.div>
          </div>

          {/* Neon Sub-Features */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {[
              { icon: Zap, title: "Zero-Latency Caching", desc: "Frequent reasoning pathways are cached at the edge, reducing token spend and dropping response times to near-zero." },
              { icon: Workflow, title: "Multi-Agent Swarms", desc: "Deploy hundreds of micro-agents simultaneously to tackle complex data scraping or systemic audits." },
              { icon: Shield, title: "Hallucination Guardrails", desc: "Built-in cryptographic verification of facts before output generation." }
            ].map((feat, i) => (
              <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="bg-white/70 backdrop-blur-sm p-8 rounded-2xl border border-slate-200 hover:shadow-lg transition-shadow">
                <feat.icon className="text-blue-600 mb-6" size={32} />
                <h5 className="text-xl font-bold mb-3">{feat.title}</h5>
                <p className="text-slate-600 leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>


      {/* ================= DATA BANK: THE VAULT ================= */}
      {/* Updated Gradient: teal-100 to blue-100 for more obvious change */}
      <section className="relative w-full bg-gradient-to-b from-teal-100 via-white to-blue-100 border-t border-slate-200">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          
          {/* Product Title Integrated (No sticky bar) */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-teal-600 flex items-center justify-center shadow-md">
              <Database className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-teal-900">Data Bank</h2>
          </div>

          {/* Data Bank Hero */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24 text-right flex flex-col items-end">
            <h3 className="text-4xl md:text-5xl font-bold mb-6">High-fidelity data.<br/>Zero-trust security.</h3>
            <p className="text-xl text-slate-600 max-w-3xl">
              AI is only as intelligent as the data it consumes. Data Bank is our enterprise-grade storage and synthesis platform. It cleans, structures, and vectorizes massive datasets while maintaining military-grade compliance.
            </p>
          </motion.div>

          {/* Data Bank Architecture */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
            
            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="order-2 lg:order-1 relative h-[600px] bg-white/60 backdrop-blur-sm rounded-2xl border border-slate-200 p-8 overflow-hidden flex flex-col justify-between shadow-xl">
              <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-teal-500 via-transparent to-transparent"></div>
              <div className="relative z-10 space-y-6">
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100">
                  <Cloud className="text-teal-600" /> <span className="font-semibold">Raw Ingestion Layer</span>
                </div>
                <div className="flex justify-center"><ArrowRight className="text-slate-300 rotate-90" /></div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 ml-8">
                  <Layers className="text-teal-600" /> <span className="font-semibold">Semantic Cleansing</span>
                </div>
                <div className="flex justify-center ml-8"><ArrowRight className="text-slate-300 rotate-90" /></div>
                <div className="flex items-center gap-4 p-4 bg-white rounded-xl shadow-sm border border-slate-100 ml-16">
                  <Braces className="text-teal-600" /> <span className="font-semibold">Vector Indexing (768-dim)</span>
                </div>
                <div className="flex justify-center ml-16"><ArrowRight className="text-slate-300 rotate-90" /></div>
                <div className="flex items-center gap-4 p-4 bg-teal-600 text-white rounded-xl shadow-lg ml-24">
                  <Lock className="text-teal-100" /> <span className="font-semibold">Cold Storage Vault</span>
                </div>
              </div>
            </motion.div>

            <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="order-1 lg:order-2 space-y-12">
              <div>
                <h4 className="text-2xl font-bold mb-6 flex items-center gap-3"><Server className="text-teal-600"/> Core Capabilities</h4>
                <div className="space-y-6">
                  {[
                    { title: "Synthetic Edge-Case Generation", desc: "Automatically generates synthetic datasets to train models on rare, high-risk scenarios without needing real-world anomalies." },
                    { title: "Real-Time Vector Syncing", desc: "As your corporate data changes, Data Bank updates the vector embeddings globally in less than 50 milliseconds." },
                    { title: "Role-Based Access Control (RBAC)", desc: "Granular data gating. Ensure specific AI models only have access to department-level or user-level information." }
                  ].map((item, i) => (
                    <div key={i} className="flex gap-4">
                      <CheckCircle2 className="text-teal-500 shrink-0 mt-1" size={20} />
                      <div>
                        <h5 className="font-semibold text-lg">{item.title}</h5>
                        <p className="text-slate-600">{item.desc}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ================= KREE: THE EXPERIENCE ================= */}
      <section className="relative w-full bg-[#0a0a0a] text-white border-t border-slate-800">
        <div className="max-w-7xl mx-auto px-6 md:px-10 py-24">
          
          {/* Product Title Integrated (No sticky bar) */}
          <div className="flex items-center gap-3 mb-12">
            <div className="w-10 h-10 rounded-lg bg-purple-600 flex items-center justify-center shadow-[0_0_15px_rgba(147,51,234,0.3)]">
              <Gamepad2 className="text-white" size={20} />
            </div>
            <h2 className="text-2xl font-bold tracking-tight text-purple-400">Kree</h2>
          </div>

          {/* Kree Hero */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="mb-24 flex flex-col items-center text-center">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-purple-900/30 text-purple-400 text-sm font-semibold tracking-wide border border-purple-500/30 mb-8">
              <Sparkles size={16} /> Welcome to the Sandbox
            </div>
            <h3 className="text-4xl md:text-6xl font-bold mb-6 text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">
              Media, dynamically generated.
            </h3>
            <p className="text-xl text-slate-400 max-w-3xl">
              Kree is the bridge between generative AI and interactive entertainment. It provides a real-time rendering and logic framework to build dynamic worlds, reactive characters, and personalized media streams.
            </p>
          </motion.div>

          {/* Kree Features Grid */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={stagger} className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
            {[
              { icon: Eye, title: "Spatial Logic", desc: "AI models that understand 3D coordinates, physics, and user line-of-sight." },
              { icon: Terminal, title: "Reactive NPCs", desc: "Characters driven by Neon AI, capable of holding unscripted memory-based conversations." },
              { icon: MonitorPlay, title: "Asset Generation", desc: "Real-time generation of textures, audio, and UI elements based on player state." },
              { icon: Key, title: "Tokenized Gateways", desc: "Built-in monetization logic. Charge per interaction, subscription, or one-off access." }
            ].map((feat, i) => (
              <motion.div key={i} variants={fadeUp} className="bg-white/5 border border-white/10 p-6 rounded-2xl hover:bg-white/10 transition-colors">
                <feat.icon className="text-purple-400 mb-4" size={28} />
                <h5 className="text-lg font-bold mb-2">{feat.title}</h5>
                <p className="text-slate-400 text-sm leading-relaxed">{feat.desc}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Kree Massive Visual */}
          <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="w-full rounded-3xl overflow-hidden h-[500px] relative border border-white/10 bg-slate-900 group shadow-2xl shadow-purple-900/10">
             <Image 
                src="/image7.webp" 
                alt="Kree Platform Visualization" 
                fill 
                className="object-cover opacity-40 group-hover:opacity-60 group-hover:scale-105 transition-all duration-1000" 
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent flex items-end p-10">
                 <div className="max-w-2xl">
                    <h4 className="text-3xl font-bold mb-4">Build the unimaginable.</h4>
                    <p className="text-slate-300 mb-8">Access the Kree SDK and start deploying interactive environments directly to the web, powered by Next.js and WebGL.</p>
                    <Link href="/contact" className="bg-purple-600 text-white px-8 py-3 rounded-sm font-bold hover:bg-purple-500 transition-colors inline-flex items-center gap-2">
                        Get SDK Access <ArrowRight size={18} />
                    </Link>
                 </div>
              </div>
          </motion.div>
        </div>
      </section>

      {/* ================= FINAL CTA ================= */}
      <section className="py-32 bg-blue-600 text-white text-center">
        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeUp} className="max-w-4xl mx-auto px-6">
          <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Access the Neitzen Stack.</h2>
          <p className="text-blue-100 text-xl mb-12 max-w-2xl mx-auto">
            Ready to integrate advanced reasoning, secure data pipelines, or interactive engines into your business? 
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-6">
            <Link href="/auth/signup" className="bg-white text-blue-600 font-bold text-lg py-4 px-10 rounded-sm hover:bg-gray-50 transition-colors shadow-xl shadow-blue-900/20">
              Start Building Now
            </Link>
            <Link href="/contact" className="border-2 border-white/30 text-white font-bold text-lg py-4 px-10 rounded-sm hover:bg-white/10 transition-colors">
              Read the Docs
            </Link>
          </div>
        </motion.div>
      </section>

    </div>
  );
}