import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  decrementQuantity,
  deleteCart,
  incrementQuantity,
} from "../redux/homeSlice";
import { TbTrashFilled } from "react-icons/tb";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";
function ShoppingCartItem({ props }) {
  const dispatch = useDispatch();
  const [selected, setSelected] = useState([]);
  const deleteSelectedProducts = () => {
    selected.map((item) => dispatch(deleteCart(item)));
    console.log(selected);
  };
  const handleSelectProductClick = (item) => {
    if (selected.includes(item._id)) {
      setSelected(selected.filter((id) => id !== item._id));
    } else {
      setSelected((prevSelected) => [...prevSelected, item._id]);
    }
    console.log(selected);
  };
  return (
    <div className="px-3">
      <div className="w-full mb-2 flex items-start justify-end">
        <button
          onClick={deleteSelectedProducts}
          className="bg-black sm:w-[20%] w-[20%] h-[30px] sm:h-[50px] duration-300 flex items-center justify-center gap-3 hover:bg-red-600 rounded-lg px-3 py-2 text-white border"
        >
          Delete{" "}
          <span>
            <TbTrashFilled />
          </span>
        </button>
      </div>
      <div className="text-center py-2 items-center border-t border-b grid grid-rows-1 grid-cols-4 mb-2">
        <h1 className="font-titleFont font-semibold text-[17px]">Foto</h1>
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
            <div className="items-center flex cursor-pointer justify-start">
              {selected.includes(item._id) ? (
                <HiCheckCircle
                  onClick={() => handleSelectProductClick(item)}
                  className="w-[25px] h-[25px] rounded-full"
                />
              ) : (
                <HiOutlineCheckCircle
                  onClick={() => handleSelectProductClick(item)}
                  className="w-[25px] h-[25px] rounded-full hover:bg-black duration-300 hover:text-white"
                />
              )}
            </div>
            <div className="flex items-center justify-center">
              <img
                className="rounded-lg"
                src={item.image}
                alt="productImg"
                width={"150px"}
              />
            </div>
          </div>
          <div className="text-center font-bodyFont">{item.title}</div>
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
          <div className="text-center font-semibold">
            ${item.price * item.quantity}
          </div>
        </div>
      ))}
    </div>
  );
}

export default ShoppingCartItem;
