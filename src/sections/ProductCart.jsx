import { GiCancel } from "react-icons/gi";
import Modal from "../components/ConfirmationModal";
import { useState } from "react";

export default function ProductCart({ cart, onRemoveItem, onResetCart }) {
    const [isModalOpen, setIsModalOpen] = useState(false);  
    const [orderDetails, setOrderDetails] = useState(null)
    
    const filteredCart = cart.filter(item => item.quantity > 0);

    const totalQuantity = filteredCart.reduce((total, item) => total + item.quantity, 0);

    const totalPrice = filteredCart.reduce((total, item) => total + item.price * item.quantity, 0).toFixed(2);

  const handleConfirmOrder = () => {
    setOrderDetails(filteredCart);
    setIsModalOpen(true); 
  };

  
  const handleStartNewOrder = () => {
    setIsModalOpen(false); 
    onResetCart(); 
  };

    const handleRemoveItem = (productId) => {
        onRemoveItem(productId); 
    };


    
    
    return (
        <div className="bg-white shadow-lg p-6 rounded-xl">
            <h1 className="text-customRed text-3xl font-bold bg-inherit mb-6">Your Cart ({totalQuantity})</h1>

            {filteredCart.length === 0 ? (
                <div className="flex flex-col justify-center items-center bg-inherit mt-4 mb-4">
                    <img src='/assets/images/illustration-empty-cart.svg' alt="" className="bg-inherit w-[35%]" />
                    <p className="bg-inherit text-orange-950 font-semibold">Your Added items will appear here</p>
                </div>
            ) : (
                <div className="bg-inherit">
                    <ul>
                        {filteredCart.map((item) => (
                            <li key={item.id}>
                                <div className="bg-white flex justify-between p-4 items-center border-b-[1px] border-gray-300 ">
                                    <div>
                                        <h4 className="font-semibold text-lg mb-0 bg-white">{item.name}</h4>
                                        <div className="flex bg-white">
                                            <p className="text-xl text-customRed font-bold bg-white">{item.quantity}x</p>
                                            <p className="mx-3 font-semibold text-lg text-gray-500 bg-white">@ ${item.price.toFixed(2)}</p>
                                            <p className="font-semibold text-lg text-gray-700 bg-white">${(Number(item.price) * Number(item.quantity)).toFixed(2)}</p>
                                        </div>
                                    </div>

                                    <div className="bg-white">
                                        <GiCancel 
                                            className="text-[28px] text-gray-400 hover:text-gray-700 cursor-pointer bg-white" 
                                            onClick={() => handleRemoveItem(item.id)}
                                        />
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>

                    <div className="order-total mt-10 flex justify-between items-center bg-white">
                        <p className="font-semibold text-lg bg-inherit">Order Total:</p>
                        <h3 className="text-3xl font-semibold bg-inherit">${totalPrice}</h3> 
                    </div>
                    <div className="p-4 flex items-center justify-center my-6 text-lg">
                        🌳 <p className="ml-2">This is a<b> carbon-neutral </b>delivery</p> 
                    </div>
                    <button className="bg-customRed hover:bg-orange-800 text-white py-2 px-6 rounded-[30px] w-[100%] text-lg" onClick={handleConfirmOrder}>Confirm Order</button>
                </div>
            )
            
            }

            {/* Modal */}
            {isModalOpen && (
                <Modal
                    orderDetails={orderDetails}
                    totalPrice={totalPrice}
                    onStartNewOrder={handleStartNewOrder}
                />
            )}
            
        </div>
    )
}