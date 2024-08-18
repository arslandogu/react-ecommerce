import React, { useEffect, useState } from "react";
import { useSelector } from "react-redux";
import ShoppingCartItem from "../components/ShoppingCartItem";
import CartTotalItem from "../components/CartTotaltem";
import { cartEmpty } from "../assets";
import { toast, ToastContainer } from "react-toastify";
import StripeCheckout from "react-stripe-checkout";
import axios from "axios";
function Cart() {
  const productData = useSelector((state) => state.home.productData);
  const userInfo = useSelector((state) => state.home.userInfo);
  const [totalAmount, setTotalAmount] = useState("");
  const [payNow, setPayNow] = useState(false);
  useEffect(() => {
    let price = 0;
    productData.map((item) => {
      price += item.quantity * item.price;
      return price;
    });

    setTotalAmount(price);
  }, [productData]);
  const handleCheckoutClick = () => {
    if (userInfo && (totalAmount !== 0)) {
      setPayNow(true);
    } else if(totalAmount === 0){
      toast.error("Cart is empty");
    } else {
      toast.error("Please Sign In to Checkout")
    }
  };
  const payment = async (token) => {
    await axios.post("http://localhost:8000/pay", {
      amount: totalAmount,
      token: token,
    });
  };
  return (
    <div className="sm:grid px-7 mb-10 sm:mb-2 max-w-screen-2xl mx-auto flex h-full flex-wrap lg:grid-cols-2 items-center">
      <div className="flex h-full items-center flex-col w-full">
        <div className="flex items-center py-10 justify-between">
          <h1 className="font-titleFont font-semibold text-[25px]">
            Shopping Cart
          </h1>
        </div>
        <div className="sm:min-w-[50%] w-full py-2 border-[0.2em] shadow-lg mb-8">
          <div className="items-center justify-between">
            {productData.length !== 0 ? (
              <ShoppingCartItem props={productData} />
            ) : (
              <div className="flex py-2 flex-col items-center justify-center">
                <img
                  className="w-full relative h-full object-cover"
                  src={cartEmpty}
                  alt="cartIsEmpty"
                />
                <p className="font-semibold text-black text-[25px]">
                  Cart is Empty
                </p>
              </div>
            )}
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
          <div className="mt-5 mb-2 px-5 w-[70%] flex items-center justify-center">
            <button
              onClick={handleCheckoutClick}
              className="bg-gray-900 w-[40%] h-[60px] duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border"
            >
              Checkout
            </button>
          </div>
          {payNow && !totalAmount !== 0 && (
            <div className="flex items-center justify-center">
              <StripeCheckout
                stripeKey="pk_test_51Poy06C1fD8uqa4D49C1hDklnTutBSNZwMXUoIQeyvyO5g6JR6SePVgkxq0ybpir1wnwKpBwZAHdHl9VScoYoGPj0046n3ISks"
                name="Ecommerce Example"
                amount={totalAmount * 100}
                label="Pay"
                description={`Your Payment amount is $${totalAmount}`}
                token={payment}
              />
            </div>
          )}
        </div>
      </div>
      <ToastContainer
        position="top-left"
        autoClose={2000}
        hideProgressBar={false}
        closeOnClick
        newestOnTop={false}
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="dark"
      />
    </div>
  );
}

export default Cart;
