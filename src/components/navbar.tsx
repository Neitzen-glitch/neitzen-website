"use client"

//import { headers } from "next/headers"
import Link from "next/link"
import { useState } from "react"

export default function Navbar() {
    const [open, setOpen] = useState<string | null>(null)

    return (
        <header className="sticky top-3 z-50 h-14 md:h-16 backdrop-blur-lg bg-black/60 border-b border-white/10">
            <nav className="maw-w-7x1 mx-auto flex items-center justify-between px-6 h-13">
                {/*Logo*/}
                <Link href="text-lg md:text-xl font-semibold tracking-tight">
                    Neitzen
                </Link>

                <div className="hidden md:flex items-center gap-8 text-sm md:text-base text-gray-300 relative">

                    {/* PRODUCTS */}
                    <div onMouseEnter={() => setOpen("products")} onMouseLeave={() => setOpen(null)} className="relative">
                        <span className="cursor-pointer hover:text-white">
                            Products ▾
                        </span>
                        {open === "products" && (
                            <div className="absolute top-8 left-0 w-64 bg-[#0f1117] border border-white/10 rounded-xl p-4 space-y-3 shadow-xl">
                                <Link href="/products/aida" className="block hover:text-white">
                                    <p className="font-medium">
                                        AIDA
                                    </p>
                                    <p>
                                        Business System Support
                                    </p>
                                </Link>

                                <Link href="/products/core" className="block hover:text-white">
                                    <p className="font-medium">
                                        Core
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Infrastructure tools
                                    </p>
                                </Link>

                                <Link href="/products/labs" className="block hover:text-white">
                                    <p className="font-medium">
                                        Labs
                                    </p>
                                    <p className="text-xs text-gray-400">
                                        Research systems
                                    </p>
                                </Link>
                            </div>
                        )}
                    </div>

                    {/* VISION */}
                    <div onMouseEnter={() => setOpen("vision")} onMouseLeave={() => setOpen(null)} className="relative">

                        <span className="cursor-pointer hover:text-white">
                            Vision ▾
                        </span>

                        {open === "vision" && (
                            <div className="absolute top-8 left-0 w-56 bg-[#0f1117] border border-white/10 rounded-xl p-4 space-y-2 shadow-xl">
                                <Link href="/about" className="block hover-text-white">
                                    About Us
                                </Link>

                                <Link href="/aims" className="block hover:text-white">
                                    Aims
                                </Link>

                                <Link href="/pilot" className="block hover:text-white">
                                    Pilot Programs
                                </Link>

                            </div>
                        )}
                    </div>

                    {/* simple links */}
                    <Link href="/blog" className="hover:text-white">
                        Blog
                    </Link>
                    
                    <Link href="/newsletter" className="hover:text-white">
                        Newsletter
                    </Link>
                </div>


                {/* CTA */}
                <Link href="/products" className="hidden md:inline-block bg-white text-black px-4 py-2 ounded-lg text-sm font-medium hover:opacity-80 transition">
                    Get Started
                </Link>

                {/* Mobile Hamburger */}
                <div className="flex md:hidden">
                        <button className="text-gray-300 text-xl">
                            ≡
                        </button>
                </div>
            </nav>
        </header>
    )
}