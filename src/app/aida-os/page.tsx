"use client";

import { supabase } from '@/app/utils/supabase/supabase';
import React, { useState, useRef, useEffect } from 'react';
import Image from 'next/image';
import { motion, useScroll, useSpring, useTransform } from 'framer-motion';
import { 
  ArrowRight, Globe, Zap, BarChart3, Settings, 
  Cpu, MousePointer2, Share2, ShieldCheck, Rocket, Layers 
} from 'lucide-react';

export default function AidaProductPage() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);
  const [scrollDirection, setScrollDirection] = useState('down');
  const lastScrollRef = useRef(0);
  const throttleTimerRef = useRef<NodeJS.Timeout | undefined>(undefined);

  // Scroll logic for the "Trail" effect
  const { scrollYProgress } = useScroll();
  const scaleY = useSpring(scrollYProgress, {
    stiffness: 150,
    damping: 40,
    restDelta: 0.05,
    mass: 0.3
  });

  // Track scroll direction with minimal throttling
  useEffect(() => {
    const handleScroll = () => {
      const currentScroll = window.scrollY;
      if (throttleTimerRef.current) return;

      if (currentScroll > lastScrollRef.current) {
        setScrollDirection('down');
      } else {
        setScrollDirection('up');
      }
      lastScrollRef.current = currentScroll;

      throttleTimerRef.current = setTimeout(() => {
        throttleTimerRef.current = undefined;
      }, 16); // ~60fps
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => {
      window.removeEventListener('scroll', handleScroll);
      if (throttleTimerRef.current) clearTimeout(throttleTimerRef.current);
    };
  }, []);


  const handleWaitlistSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  
  const { data, error } = await supabase
    .from('waitlist')
    .insert([{ email }]);

  if (error) {
    console.error('Error joining waitlist:', error.message);
    // Optional: Add a toast notification for errors
  } else {
    setSubmitted(true);
    setEmail('');
  }
  };

  const fadeInUp = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeInOut" as const } }
  };

  // Animated section component with staggered children entrance
  const ScrollFlowSection = ({ children, fromLeft = true }: { children: React.ReactNode, fromLeft?: boolean }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({ target: ref, offset: ["start center", "center start"] });

    // Softer, gentler movement
    const startX = fromLeft ? -30 : 30;
    const endX = 0;

    const x = useTransform(scrollYProgress, [0, 1], [startX, endX], { clamp: true });
    const opacity = useTransform(scrollYProgress, [0, 0.4, 0.6, 1], [0, 1, 1, 0]);

    const containerVariants = {
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: {
          staggerChildren: 0.12,
          delayChildren: 0.05,
          duration: 0.5
        }
      },
      exit: {
        opacity: 0,
        transition: { duration: 0.3 }
      }
    };

    const childVariants = {
      hidden: { 
        opacity: 0, 
        x: fromLeft ? -20 : 20 
      },
      visible: {
        opacity: 1,
        x: 0,
        transition: { 
          duration: 0.5
        }
      },
      exit: {
        opacity: 0,
        x: fromLeft ? 20 : -20,
        transition: { duration: 0.3 }
      }
    };

    // Handle both single elements and fragments
    const childArray = React.Children.toArray(children);

    return (
      <motion.div
        ref={ref}
        variants={containerVariants}
        initial="hidden"
        whileInView="visible"
        exit="exit"
        viewport={{ once: false, amount: 0.3 }}
        style={{ willChange: 'transform, opacity' }}
      >
        {childArray.length > 1 ? (
          childArray.map((child, index) => (
            <motion.div key={index} variants={childVariants}>
              {child}
            </motion.div>
          ))
        ) : (
          <motion.div variants={childVariants}>
            {children}
          </motion.div>
        )}
      </motion.div>
    );
  };

  // 3D Floating Icon Component
  const FloatingIcon = ({ children, color }: { children: React.ReactNode, color: string }) => (
    <motion.div
      animate={{ y: [0, -8, 0] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", repeatType: "loop" }}
      className={`p-4 rounded-2xl bg-white/[0.03] border border-white/10 mb-6 group-hover:border-${color}/50 transition-colors shadow-2xl`}
      style={{ willChange: 'transform' }}
    >
      <motion.div
        whileHover={{ rotateY: 20, rotateX: -10, scale: 1.1 }}
        className={`text-${color}`}
        style={{ willChange: 'transform' }}
      >
        {children}
      </motion.div>
    </motion.div>
  );

  // UPDATED: Sleeker, modern graphic with "Fill" and "Scan" effect
  const FeatureGraphic = ({ src, alt }: { src: string, alt: string }) => (
    <div 
      className="relative w-full h-[280px] group overflow-hidden border border-white/10 bg-[#0f0f0f]"
      style={{ borderRadius: '24px 0 24px 0' }}
    >
      {/* Ambient Glows */}
      <div className="absolute -top-20 -left-20 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full group-hover:bg-emerald-500/20 transition-colors duration-700" />
      <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-[#0067b8]/10 blur-[80px] rounded-full group-hover:bg-[#0067b8]/20 transition-colors duration-700" />
      
      {/* Image Container */}
      <div className="relative z-10 w-full h-full overflow-hidden">
        <Image 
          src={src} 
          alt={alt} 
          fill 
          className="object-cover opacity-60 group-hover:opacity-100 group-hover:scale-105 transition-all duration-1000 grayscale-[0.5] group-hover:grayscale-0" 
        />
        
        {/* Modern "Scan" Effect Overlay */}
        <div className="absolute inset-0 bg-[linear-gradient(to_bottom,transparent_0%,rgba(255,255,255,0.03)_50%,transparent_100%)] bg-[length:100%_4px] pointer-events-none" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0a0a] via-transparent to-transparent opacity-60" />
      </div>
    </div>
  );

  return (
    <div className="bg-[#0a0a0a] min-h-screen text-white relative overflow-hidden">
      
      {/* THE TRAIL: Animated scroll path */}
      <div className="absolute left-1/2 top-[100vh] bottom-0 w-[1px] -translate-x-1/2 z-0 hidden md:block">
        <div className="h-full w-full bg-white/5 relative">
          <motion.div 
            style={{ scaleY }}
            className="absolute top-0 left-0 w-full bg-gradient-to-b from-transparent via-[#0067b8] to-emerald-500 origin-top h-full"
          />
        </div>
      </div>

      {/* AMBIENT BACKGROUND EFFECT */}
      <div className="absolute inset-0 pointer-events-none z-0">
        <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-emerald-500/10 blur-[120px] rounded-full mix-blend-screen" />
        <div className="absolute top-[20%] right-0 w-[400px] h-[600px] bg-white/[0.03] blur-[100px] rounded-full" />
        <div className="absolute inset-0 bg-gradient-to-b from-emerald-500/[0.02] via-transparent to-transparent" />
      </div>

      <div className="relative z-10">
        {/* HERO SECTION */}
        <section className="relative pt-24 pb-20 px-6 md:px-10 max-w-[1600px] mx-auto flex flex-col items-center text-center">
          <motion.div initial="hidden" animate="visible" variants={fadeInUp} className="max-w-4xl mx-auto flex flex-col items-center">
            <div className="mb-8">
              <Image src="/aida2.png" alt="AIDA Text Logo" width={200} height={60} className="object-contain" />
            </div>
            <h1 className="text-3xl md:text-5xl font-bold text-white tracking-tight leading-[1.1] mb-6">
              The intelligent operating system <br className="hidden md:block"/> for modern businesses.
            </h1>
            <p className="text-base md:text-lg text-gray-400 mb-10 max-w-2xl">
              AIDA unifies your online presence, operations, autonomous marketing, and business intelligence into one seamless workspace.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 mb-12">
              <button onClick={() => document.getElementById('early-access')?.scrollIntoView({ behavior: 'smooth' })} className="bg-[#0067b8] text-white px-8 py-3 font-semibold hover:bg-[#005da6] transition-colors flex items-center justify-center gap-2">
                Get Early Access <ArrowRight size={18} />
              </button>
              <button className="bg-transparent text-white border border-gray-700 px-8 py-3 font-semibold hover:bg-white/5 transition-colors">
                Explore Features
              </button>
            </div>
          </motion.div>
        </section>

        {/* RE-ADDED CARD SECTION WITH 3D ICONS */}
        <section className="px-6 md:px-10 max-w-[1600px] mx-auto pb-24">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { title: "Online Presence", icon: <Globe size={32} />, color: "emerald-400", desc: "Instantly launch conversion-optimized digital footprints." },
              { title: "Operations", icon: <Settings size={32} />, color: "blue-400", desc: "Automate core workflows and manage entire backend systems." },
              { title: "Autonomous Marketing", icon: <Zap size={32} />, color: "purple-400", desc: "Growth engines that run 24/7 without human intervention." },
              { title: "Business Intelligence", icon: <BarChart3 size={32} />, color: "pink-400", desc: "Data-driven insights to model churn and predict revenue." }
            ].map((card, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                whileHover={{ y: -10 }}
                className="group p-8 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-all cursor-default relative overflow-hidden"
              >
                <div className={`absolute top-0 right-0 w-24 h-24 bg-${card.color}/10 blur-[40px] rounded-full`} />
                <FloatingIcon color={card.color}>{card.icon}</FloatingIcon>
                <h3 className="text-lg font-bold mb-3">{card.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{card.desc}</p>
              </motion.div>
            ))}
          </div>
        </section>

        {/* METRICS SECTION */}
        <section className="bg-[#111111]/40 backdrop-blur-sm border-y border-white/5 py-16">
          <div className="max-w-[1600px] mx-auto px-6 md:px-10 grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "10x", label: "Faster Deployment" },
              { value: "24/7", label: "Autonomous Marketing" },
              { value: "0", label: "Coding Required" },
              { value: "100%", label: "Data Ownership" },
            ].map((stat, i) => (
              <motion.div key={i} initial={{ opacity: 0, scale: 0.9 }} whileInView={{ opacity: 1, scale: 1 }} viewport={{ once: true }} transition={{ delay: i * 0.1, duration: 0.4 }}>
                <div className="text-4xl font-bold text-[#0067b8] mb-2">{stat.value}</div>
                <div className="text-sm font-medium text-gray-500 uppercase tracking-wide">{stat.label}</div>
              </motion.div>
            ))}
          </div>
        </section>

        {/* COMPREHENSIVE FEATURES SECTION */}
        <section className="py-24 max-w-[1400px] mx-auto px-6 md:px-10 space-y-48 relative">
          
          {/* 01: ONLINE PRESENCE */}
          <div className="grid md:grid-cols-2 gap-20 items-center relative">
            <ScrollFlowSection fromLeft={true}>
              <div className="order-2 md:order-1">
                <FeatureGraphic src="/image1.svg" alt="AIDA Site Engine" />
              </div>
            </ScrollFlowSection>
            <ScrollFlowSection fromLeft={false}>
              <>
                <div className="flex items-center gap-3 mb-4 text-[#0067b8]">
                  <Globe size={24} />
                  <span className="font-mono text-xs uppercase tracking-widest">Digital Infrastructure</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">AIDA Site Engine: Beyond No-Code.</h2>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  Stop building websites; start generating conversion machines. AIDA uses semantic understanding to build high-performance storefronts that adapt to your brand identity instantly.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><Cpu size={16} className="text-emerald-400" /> Core Features</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• Generative UI Auto-Layout</li>
                      <li>• Dynamic Content Injection</li>
                      <li>• Global Edge Deployment</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><Rocket size={16} className="text-purple-400" /> Advantages</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• 99+ Lighthouse Performance</li>
                      <li>• Native SEO Schema Support</li>
                      <li>• Auto-Scaling CDN Hosting</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-emerald-500/5 border-l-2 border-emerald-500 text-xs italic text-emerald-200/80">
                  <strong>Collaboration:</strong> Feeds live traffic data directly into the BI engine for instant heatmapping and churn analysis.
                </div>
              </>
            </ScrollFlowSection>
          </div>

          {/* 02: OPERATIONS */}
          <div className="grid md:grid-cols-2 gap-20 items-center relative">
            <ScrollFlowSection fromLeft={true}>
              <>
                <div className="flex items-center gap-3 mb-4 text-[#0067b8]">
                  <Settings size={24} />
                  <span className="font-mono text-xs uppercase tracking-widest">Core Operations</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">AIDA Core: The Nervous System.</h2>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  Centralize your entire business logic. From inventory syncing to complex client relationships, AIDA Core removes the need for 10+ different SaaS subscriptions.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><Layers size={16} className="text-emerald-400" /> Sub-Systems</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• Unified Customer CRM</li>
                      <li>• Real-time Inventory Sync</li>
                      <li>• Multi-Channel Auth</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><ShieldCheck size={16} className="text-purple-400" /> Operational Perks</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• Zero-Latency Back-Office</li>
                      <li>• Role-Based Access Control</li>
                      <li>• Automated Billing/Invoices</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-purple-500/5 border-l-2 border-purple-500 text-xs italic text-purple-200/80">
                  <strong>Collaboration:</strong> Syncs customer behavior with the Marketing engine to trigger personalized automated campaigns.
                </div>
              </>
            </ScrollFlowSection>
            <ScrollFlowSection fromLeft={false}>
              <FeatureGraphic src="/image2.svg" alt="AIDA Operations" />
            </ScrollFlowSection>
          </div>

          {/* 03: AUTONOMOUS MARKETING */}
          <div className="grid md:grid-cols-2 gap-20 items-center relative">
            <ScrollFlowSection fromLeft={true}>
              <div className="order-2 md:order-1">
                <FeatureGraphic src="/image3.svg" alt="AIDA Marketing" />
              </div>
            </ScrollFlowSection>
            <ScrollFlowSection fromLeft={false}>
              <>
                <div className="flex items-center gap-3 mb-4 text-[#0067b8]">
                  <Zap size={24} />
                  <span className="font-mono text-xs uppercase tracking-widest">Growth Engine</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">AIDA Growth: Marketing on Autopilot.</h2>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  Stop hiring agencies. AIDA Growth creates content, manages socials, and runs email campaigns based on real-time market trends and user behavior.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><MousePointer2 size={16} className="text-emerald-400" /> Automation Tools</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• AI Social Scheduler</li>
                      <li>• Smart Email Sequencing</li>
                      <li>• Ad Copy Generator</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><Share2 size={16} className="text-purple-400" /> Strategic Perks</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• 24/7 Global Engagement</li>
                      <li>• Predictive A/B Testing</li>
                      <li>• Viral Trend Monitoring</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-blue-500/5 border-l-2 border-[#0067b8] text-xs italic text-blue-200/80">
                  <strong>Collaboration:</strong> Pulls product assets directly from the Site Engine to create consistent ads without human intervention.
                </div>
              </>
            </ScrollFlowSection>
          </div>

          {/* 04: BUSINESS INTELLIGENCE */}
          <div className="grid md:grid-cols-2 gap-20 items-center relative">
            <ScrollFlowSection fromLeft={true}>
              <>
                <div className="flex items-center gap-3 mb-4 text-[#0067b8]">
                  <BarChart3 size={24} />
                  <span className="font-mono text-xs uppercase tracking-widest">Decision Matrix</span>
                </div>
                <h2 className="text-3xl font-bold mb-6">AIDA Lens: High-Definition Insights.</h2>
                <p className="text-gray-400 mb-8 text-base leading-relaxed">
                  Data is useless without clarity. AIDA Lens translates billions of data points from your operations and marketing into actionable growth strategies.
                </p>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><BarChart3 size={16} className="text-emerald-400" /> Intelligence Suite</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• Predictive Churn Modeling</li>
                      <li>• LTV Forecasting</li>
                      <li>• Sentiment Analysis</li>
                    </ul>
                  </div>
                  <div>
                    <h4 className="text-white font-bold mb-2 flex items-center gap-2 text-sm"><ShieldCheck size={16} className="text-purple-400" /> Advantages</h4>
                    <ul className="text-xs text-gray-400 space-y-2">
                      <li>• Real-time KPI Dashboards</li>
                      <li>• Automated Fraud Detection</li>
                      <li>• Competitive Benchmarking</li>
                    </ul>
                  </div>
                </div>
                <div className="p-4 bg-emerald-500/5 border-l-2 border-emerald-500 text-xs italic text-emerald-200/80">
                  <strong>Collaboration:</strong> Acts as the "Brain" that instructs the Growth engine to pivot strategies when conversion dips.
                </div>
              </>
            </ScrollFlowSection>
            <ScrollFlowSection fromLeft={false}>
              <FeatureGraphic src="/image4.svg" alt="AIDA Intelligence" />
            </ScrollFlowSection>
          </div>
        </section>

        {/* EARLY ACCESS FORM */}
        <section id="early-access" className="py-24 max-w-3xl mx-auto px-6 md:px-10 text-center relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full z-0" />
          <div className="relative z-10">
            <Image src="/aida.png" alt="AIDA Logo icon" width={64} height={64} className="mx-auto mb-6 rounded-lg shadow-sm" />
            <h2 className="text-2xl font-bold text-white mb-4">Be the first to experience AIDA.</h2>
            <p className="text-gray-400 mb-8 text-sm">Join the exclusive waitlist. We are rolling out access to a select group of businesses ahead of our official launch.</p>
            {submitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="bg-green-900/20 border border-green-800 text-green-400 p-6 rounded-lg">
                <h3 className="font-bold text-base mb-2">You're on the list!</h3>
                <p className="text-sm">Keep an eye on your inbox. We'll be in touch soon.</p>
              </motion.div>
            ) : (
              <form onSubmit={handleWaitlistSubmit} className="flex flex-col sm:flex-row gap-3">
                <input type="email" required placeholder="Enter your work email" value={email} onChange={(e) => setEmail(e.target.value)} className="flex-1 px-4 py-3 bg-white/[0.03] border border-white/10 text-white focus:outline-none focus:border-[#0067b8] transition-colors rounded-lg" />
                <button type="submit" className="bg-white text-black px-8 py-3 font-semibold hover:bg-gray-200 transition-colors whitespace-nowrap rounded-lg">Request Access</button>
              </form>
            )}
          </div>
        </section>
      </div>
    </div>
  );
}