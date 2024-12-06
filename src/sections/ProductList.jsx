import ProductCard from "../components/ProductCard";

export default function ProductList({ products, onAddToCart, onUpdateQuantity, cart }) {
    return (
        <div className="">
            <h1 className="text-4xl font-semibold mb-8">Desserts</h1>

            <div className="flex flex-col sm:grid grid-cols-2 medium:grid-cols-3 gap-8">
                {
                    products.map((product) => (
                        <ProductCard 
                            key={product.id}
                            product={product}
                            onAddToCart={onAddToCart}
                            onUpdateQuantity={onUpdateQuantity}
                            cart={cart}
                        />
                    ))
                }
            </div>
        </div>
    )
}