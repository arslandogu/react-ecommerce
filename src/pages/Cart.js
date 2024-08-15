import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";
import CartTotalItem from "../components/CartTotaltem";
function Cart() {
  const productData = useSelector((state) => state.home.productData);
  console.log(productData);
  const [totalAmount, setTotalAmount] = useState("");
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.quantity * item.price;
      return price;
    });

    console.log(price);
    setTotalAmount(price);
  },[productData])
  return (
    <div className="sm:grid mb-10 sm:mb-2 max-w-screen-2xl mx-auto flex h-full flex-wrap lg:grid-cols-2 items-center">
      <div className="flex h-full items-center flex-col w-full">
        <div className="flex items-center py-10 justify-between">
          <h1 className="font-titleFont font-semibold text-[25px]">
            Shopping Cart
          </h1>
        </div>
        <div className="md:w-[100%] sm:min-w-[50%] w-full py-5 border-[0.2em] shadow-lg mb-8">
          <div className="items-center justify-between">
            <ShoppingCartItem props={productData} />
          </div>
        </div>
      </div>
      <div className="flex flex-col w-[100%] items-center">
        <div className="flex items-center py-10 justify-between">
          <h1 className="font-titleFont font-semibold text-[25px]">
            Cart Totals
          </h1>
        </div>
        <div className="flex items-center flex-col justify-center flex-grow-0 max-h-[80%]">
          <CartTotalItem total={totalAmount} />
        <div className="mt-5 px-5 w-[70%] flex items-center justify-center">
                <button
                  className="bg-gray-900 w-[40%] h-[60px] duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border"
                >
                  Checkout
                </button>
              </div>
        </div>
      </div>
    </div>
  );
}

export default Cart;
