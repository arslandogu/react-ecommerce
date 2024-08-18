import React from "react";
import ProductsCard from "./ProductsCard";

function Products({ products }) {
  return (
    <div className="py-10">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-2xl bg-black text-white py-2 w-80 text-center rounded-2xl">
          Most Popular
        </h1>
        <span className="w-20 h-[3px] bg-black" />
      </div>
      <div className="max-w-screen-xl mx-auto sm:py-10 py-5 grid sm:grid-cols-4 grid-cols-2 px-3 gap-8 sm:gap-10">
        {products.map((productItem) => (
          <ProductsCard product={productItem} key={productItem._id} />
        ))}
      </div>
    </div>
  );
}

export default Products;
