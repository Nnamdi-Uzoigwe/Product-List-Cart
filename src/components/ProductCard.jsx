import AddCartButton from "./AddCartButton"

const ProductCard = ({ product, onAddToCart, onUpdateQuantity, cart }) => {
    const cartItem = cart.find((item) => item.id === product.id);
    const productQuantity = cartItem ? cartItem.quantity : 0;

    return (
        <div className="h-[400px] rounded-t-[15px] w-[280px] overflow-hidden  cursor-pointer">
            <div className="img relative mb-10 z-10">
                  <img src={product.image.desktop} alt="" className="h-[250px] w-[280px]" />  
                  <AddCartButton 
                    product={product}
                    onAddToCart={onAddToCart}
                    onUpdateQuantity={onUpdateQuantity}
                    quantity={productQuantity}
                  />
            </div>
           
           <p className="text-gray-500">{product.category}</p>
           <p className="text-lg font-semibold my-2">{product.name}</p>
           <p className="text-customRed font-semibold text-lg">${product.price.toFixed(2)}</p>
        </div>
    )
}

export default ProductCard
