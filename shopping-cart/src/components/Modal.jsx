import React from "react";
import { useDispatch } from "react-redux";
import { clearCart } from "../../features/cart/cartSlice";
import { closeModal } from "../../features/cart/modalSlice";

const Modal = () => {
  const dispatch = useDispatch();

  // handle clearing of cart
  const handleRemove = () => {
    dispatch(clearCart());
    dispatch(closeModal(true));
  };
  return (
    <div className="fixed inset-0 flex justify-center items-center bg-transparent transition-opacity duration-300 ease-in-out">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <p className="modal-title text-lg text-center mb-4 text-gray-800">
          Are you sure you want to remove all items?
        </p>
        <div className="flex justify-center space-x-4">
          <button
            onClick={() => dispatch(closeModal())}
            className="btn px-4 py-2 text-white rounded-md focus:outline-none focus:ring-2 "
          >
            Cancel
          </button>
          <button
            onClick={handleRemove}
            className=" px-4 py-2 border border-red-500 text-red-500 rounded-md hover:text-white hover:bg-red-500 focus:outline-none focus:ring-2 focus:ring-offset-2"
          >
            Remove
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
