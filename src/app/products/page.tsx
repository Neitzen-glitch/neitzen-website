import ProductCard from "@/components/ProductCard";

export default function Products() {
    return (
        <section className="py-24 max-w-6x1 mx-auto px-6">
            <h1 className="text-4x1 font-bold mb-10">
                Products
            </h1>

            <div className="grid md:grid-cols-3 gap-8">
                <ProductCard
                    title="AIDA"
                    desc="Business support and scaling platform"
                    slug = "aida"
                />
                <ProductCard
                    title="Neitzen Core"
                    desc="Distributed infrastructure tools"
                    slug = "core"
                />
                <ProductCard
                    title="Neitzen Labs"
                    desc="Experimental research systems"
                    slug = "labs"
                />
            </div>
        </section>
    )
}