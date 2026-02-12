import Link from "next/link"

type ProductCardProps = {
    title: string
    desc: string
    slug: string    
}

export default function ProductCard({ title, desc, slug}: ProductCardProps) {
    return(
        <Link href={`/products/${slug}`}>
        <div className="bg-[#111522] p-8 rounded-2x1 border border-gray-800 hover:scale-105 transition cursor-pointer">
            <div className="h-20 bg-white/10 rounded-lg mb-5" />
            <h3 className="text-x1 font-semibold mb-2">
                {title}
            </h3>
            <p className="text-gray-400 text-sm">
                {desc}
            </p>
        </div>
        </Link>
    )
}