"use client"//

import { useParams } from "next/navigation";

const Products = {
    aida: {
        title: "AIDA",
        desc: "Business support and scaling platform",
        details: "Automate campaigns, analyze data, an optimize marketing with generic AI and smart programs"
    },
    
    core: {
        title: "Neitzen Core",
        desc: " Infrastructure tools",
        details: "Scalable distributed infrastructure for your apps and systems"
    },

    labs: {
        title: "Neitzen Labs",
        desc: "Research systems",
        details: "Experimental software for AI and tech research."
    }
}

export default function ProductPage() {
    const { slug } = useParams() 
    const product = Products[slug as keyof typeof Products]

    if (!product) return <div>Product Not found</div>

    return (
        <section className="py-24 max-w-4x1 mx-auto px-6">
            <h1 className="text-4x1 font-bold mb-4">
                {product.title}
            </h1>
            <p className="text-gray-400 mb-6">
                {product.desc}
            </p>
            <p className="text-gray-300">
                (product.details)
            </p>
        </section>
    )
}