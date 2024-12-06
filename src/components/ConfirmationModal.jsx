
import React from "react";
import { FaRegCircleCheck } from "react-icons/fa6";

export default function Modal({ orderDetails, totalPrice, onStartNewOrder, onClose }) {
  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex justify-center items-center z-20 overflow-scroll">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[80%] md:w-[35%]">
        <FaRegCircleCheck className="text-green-500 text-4xl bg-white mb-8" />
        <h2 className="text-3xl font-bold text-black mb-2 bg-white">Order Confirmed</h2>
        <p className="bg-white text-gray-500 mb-8">We hope you enjoy your food!</p>
        <div className="">
          <ul className="p-4">
            {orderDetails.map((item) => (
              <li key={item.id} className="flex justify-between border-b-2 border-gray-400 py-4">
                <div className="flex gap-3">
                    <img src={item.image.thumbnail} alt="" className="w-[50px]" />
                    <div className="flex flex-col">
                        <p className="font-semibold">{item.name} </p>
                        <p>x{item.quantity}<span className="ml-4">@ ${item.price.toFixed(2)}</span></p>
                    </div>
                    
                </div>
                
                <span className="font-semibold">${(item.price * item.quantity).toFixed(2)}</span>
              </li>
            ))}
          </ul>
          <div className="flex justify-between mt-4 p-4">
            <p className="font-semibold">Order Total:</p>
            <p className="text-xl font-semibold">${totalPrice}</p>
          </div>
        </div>

        <div className="bg-white mt-6">
          <button
            onClick={onStartNewOrder}
            className="bg-customRed hover:bg-orange-800 text-lg text-white py-2 px-6 rounded-[30px] w-full"
          >
            Start New Order
          </button>
          
        </div>
      </div>
    </div>
  );
}
