import React from "react";

function CartTotalItem({total}) {
  return (
    <div className="grid border-[0.2em] shadow-lg p-5 sm:p-10 py-0 sm:py-5 sm:gap-y-5 items-center justify-center grid-rows-2 sm:grid-rows-[auto] w-[50%]">
      <div className="flex sm:flex-row flex-col gap-3 sm:gap-5 items-center">
        <h1 className="font-titleFont text-[22px] sm:text-[18px] font-bold">
          Subtotal
        </h1>
        <p className="font-semibold font-titleFont text-[19px]">${total}</p>
      </div>
      <div className="flex sm:flex-row flex-col gap-5">
        <h1 className="font-titleFont text-[22px] text-center sm:text-start sm:text-[18px] font-bold">
          Shipping
        </h1>
        <p className="font-bodyFont text-[16px] text-center sm:text-start mb-2">
          It is a long established fact that a reader will be distracted by the
          readable content of a page when looking at its layout.
        </p>
      </div>
      <div className="flex items-center py-3">
        <span className="flex-grow border-t border-gray-300"></span>
      </div>
      <div className="flex font-titleFont items-center py-3 justify-between sm:flex-row flex-col">
        <h1 className="font-titleFont text-[22px] sm:text-[18px] font-semibold">
          Total:
        </h1>
        <p className="font-semibold text-[19px]">${total}</p>
      </div>
    </div>
  );
}

export default CartTotalItem;
