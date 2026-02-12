"use client"

import { useState } from "react"

export default function Newsletter() {
    const [email, setEmail] = useState("")
    const [status, setStatus] = useState("")

    const handleSubmit = async (e:React.FormEvent) => {
        e.preventDefault() 
        setStatus("Sending.....")
    
        const res = await fetch("/api/newsletter", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email })
        })

        if (res.ok) {
            setStatus("Subscribed 👍")
            setEmail("")
        } else {
            setStatus("Error, try again ❌")
        }
    }

    return (
        <section className="py-24 max-w-md mx auto px-6">
            <h1 className="text-4x1 font-bold mb-6">
                Join Our Newsletter
            </h1>

            <p className="text-gray-400 mb-6">
                Get Updates about Neitzen products, pilots, and blog posts
            </p>

            <form onSubmit={handleSubmit} className="flex flex-col gap-4">
                <input 
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={e => setEmail(e.target.value)} required
                    className=" p-4 rounded-lg borde border-gray-800 bg-[#111522] focus:outline-none" 
                />

                <button
                    type="submit"
                    className="bg-blue-600 hover:bg-blue-500 transition py-3 rounded-lg font-semibold"
                    >
                    Subscribe
                </button>
            </form>

            {status && <p className="mt-4 text-gray-400">{status}</p>}
        </section>
    )
}