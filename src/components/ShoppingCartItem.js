import React from "react";
import { useDispatch } from "react-redux";
import { decrementQuantity, deleteCart, incrementQuantity } from "../redux/homeSlice";
import {MdOutlineClose } from "react-icons/md";
function ShoppingCartItem({ props }) {
  const dispatch = useDispatch();

  return (
    <div className="px-3 py-1">
      <div className="text-center border-b grid grid-rows-1 grid-cols-4">
        <h1 className="mb-3 font-titleFont font-semibold text-[17px]">Foto</h1>
        <h1 className="font-titleFont font-semibold text-[17px]">İsim</h1>
        <h1 className="font-titleFont font-semibold text-[17px]">Ücret</h1>
        <h1 className="font-titleFont font-semibold text-[17px]">Adet</h1>
      </div>
      {props.map((item) => (
        <div
          key={item._id}
          className="text-center grid grid-cols-4 justify-between p-3 items-center"
        >
          <div className="p-2 grid grid-cols-[1fr,5fr] gap-5 items-center justify-center">
          <div onClick={()=>dispatch(deleteCart(item._id))} className="items-center flex cursor-pointer justify-start">
            <MdOutlineClose className="w-6 h-6" />
            </div>
            <div className="flex items-center justify-center">
            <img className="rounded-lg" src={item.image} alt="productImg" width={"150px"} />
              </div>
          </div>
          <div className="text-center font-bodyFont">{item.title}</div>
          <div className="text-center font-semibold">
            ${item.price * item.quantity}
          </div>
          <div className="flex items-center justify-center gap-3 text-md font-semibold">
            <button
              onClick={() => {
                dispatch(decrementQuantity({ _id: item._id }));
              }}
              className="bg-white  flex items-center justify-center border w-8 h-7 px-2 rounded-2xl hover:bg-black text-black hover:text-white duration-300"
            >
              -
            </button>
            <span>{item.quantity}</span>
            <button
              onClick={() => {
                dispatch(incrementQuantity({ _id: item._id }));
              }}
              className="bg-white border w-8 h-7 flex items-center justify-center px-2 rounded-2xl hover:bg-black text-black hover:text-white duration-300"
            >
              +
            </button>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartItem;
