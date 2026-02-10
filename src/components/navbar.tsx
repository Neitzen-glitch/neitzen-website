import Link from "next/link";

export default function Navbar() {
    return(
        <nav className="flex items-center justify-between items-center px-10 py-6 border-b border-gray-800">
            <h1 className="text-xl font-bold">Neitzen</h1>
            <div className="flex gap-6 text-sm">
                <Link href="/">Home</Link>
                <Link href="/vision">Vision</Link>
                <Link href="/products">Products</Link>
                <Link href="/blog">Blog</Link>
                <Link href="/aim">Aim</Link>
                <Link href="/research">Research</Link>
                <Link href="/pilots">Pilots</Link>
                <Link href="/about">About</Link>
            </div>
        </nav>
    )
}