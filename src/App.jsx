import { useState } from "react"
import ProductCart from "./sections/ProductCart"
import ProductList from "./sections/ProductList"
import data from "./data.json"
import Footer from "./components/Footer"

export default function App() {
  const [cart, setCart] = useState([])


  const handleRemoveItem = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId)); 
};

    const handleResetCart = () => {
      setCart([]); 
    };

  const handleAddToCart = (product) => {
    setCart((prevCart) => {
      const productIndex = prevCart.findIndex((item) => item.id === product.id);
  
      if (productIndex === -1) {
       
        return [...prevCart, { ...product, quantity: 1 }];
      } else {
      
        const updatedCart = [...prevCart];
        updatedCart[productIndex].quantity += 1;
        return updatedCart;
      }
    });
  };


  const handleUpdateQuantity = (productId, newQuantity) => {
    setCart((prevCart) => {
      if (newQuantity === 0) {
        return prevCart.filter((item) => item.id !== productId);
      }

      return prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: newQuantity } : item
      );
    });
  };


 

  return (
    <div className="">
      <div className="px-8 extraLarge:px-24 flex items-center large:items-start flex-col large:grid grid-cols-3 lg:grid-cols-6 gap-8 w-full py-20">
          <div className="col-span-2 lg:col-span-4">
            <ProductList 
              products={data} 
              onAddToCart={handleAddToCart} 
              onUpdateQuantity={handleUpdateQuantity}
              cart={cart}
              
            />
          </div>
          
          <div className="col-span-1 lg:col-span-2">
            <ProductCart 
              cart={cart} 
              onUpdateQuantity={handleUpdateQuantity} 
              onRemoveItem={handleRemoveItem} 
              onResetCart={handleResetCart}
            />
          </div>
      </div>
      <Footer />

    </div>
  )
}


