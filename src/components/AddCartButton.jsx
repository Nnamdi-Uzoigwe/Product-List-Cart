
import { FaMinus, FaPlus } from "react-icons/fa";

const AddCartButton = ({ product, onAddToCart, onUpdateQuantity, quantity }) => {
  const handleAddClick = () => {
    if (quantity === 0) {
      onAddToCart(product); 
    }
  };
  

  const handleIncrease = (e) => {
    e.stopPropagation();
    onUpdateQuantity(product.id, quantity + 1);
  };

  const handleDecrease = (e) => {
    e.stopPropagation(); 
    if (quantity >= 1) {
      onUpdateQuantity(product.id, quantity - 1); 
    } else {
      onUpdateQuantity(product.id, 0); 
    }
  };

  return (
    <div
      className={`cursor-pointer ${quantity > 0 ? "bg-customRed" : "bg-white"} rounded-3xl font-semibold py-2 px-4 border-[1px] border-gray-400 hover:border-customRed w-[60%] absolute left-14 bottom-[-20px]`}
      onClick={quantity === 0 ? handleAddClick : (e) => e.stopPropagation()}
    >
      {quantity > 0 ? (
        <div className="flex justify-between items-center bg-inherit">
          <div className="decrease text-lg bg-inherit hover:bg-white border-2 border-white rounded-full p-[3px]" onClick={handleDecrease}>
            <FaMinus className="bg-inherit text-white hover:text-customRed" />
          </div>

          <p className="text-lg bg-inherit text-white">{quantity}</p>

          <div className="increase text-lg bg-inherit hover:bg-white border-2 border-white rounded-full p-[3px]" onClick={handleIncrease}>
            <FaPlus className="bg-inherit text-white hover:text-customRed" />
          </div>
        </div>
      ) : (
        <p className="text-lg bg-white">🛒 Add to Cart</p>
      )}
    </div>
  );
};

export default AddCartButton;
