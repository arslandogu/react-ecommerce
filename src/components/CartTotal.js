import React from "react";

function CartTotal() {
  return (
   <div className="grid border p-5 sm:p-10 gap-y-5 grid-rows-2 sm:grid-rows-[auto] w-[50%]">
  <div className="flex sm:flex-row flex-col gap-5 items-center">
    <h1 className="font-titleFont text-[18px] sm:text-[16px] font-semibold">Subtotal</h1>
    <p className="font-semibold text-[20px] sm:text-[18px]">$170</p>
  </div>
  <div className="flex sm:flex-row flex-col gap-5">
    <h1 className="font-titleFont text-[18px] text-center sm:text-start sm:text-[16px] font-semibold">Shipping</h1>
    <p className="font-bodyFont text-sm sm:text-[14px]">
      It is a long established fact that a reader will be distracted by the
      readable content of a page when looking at its layout.
    </p>
  </div>
  <div className="flex items-center">
    <span className="flex-grow border-t border-gray-300"></span>
  </div>
  <div className="flex items-center justify-between sm:flex-row flex-col">
    <h1 className="font-titleFont text-[16px] sm:text-[20px] font-semibold">Total:</h1>
    <p className="font-semibold text-[19px] sm:text-[19px]">$170</p>
  </div>
</div>
  );
}

export default CartTotal;
