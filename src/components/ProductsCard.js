import React from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
function ProductsCard({ product }) {
  const navigate = useNavigate();
  const _id = product.title;
  const idToString = (_id) => {
    return String(_id).toLowerCase().split(" ").join("");
  }
  const rootId = idToString(_id);
  const handleDetailsClick = () => {
    navigate(`/product/${rootId}`, {
      state: {
        item: product
      }
    })
  }
  return (
    <div className="group relative">
      <div onClick={handleDetailsClick} className="w-full rounded-t-2xl h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className="w-full rounded-b-2xl border-[1px] px-2 py-3">
        <div className="flex justify-between items-center">
          <h2 className="font-titleFont text-[17px] font-bold">
            {product.title}
          </h2>
        </div>
        <div className="flex gap-2 relative overflow-hidden">
          <div className="text-sm relative w-28 gap-2 justify-end">
            <p className="line-through text-gray-400">${product.oldPrice}</p>
            <p className="p-1 font-semibold text-[16px]">${product.price}</p>
          </div>
          <p className="absolute z-20 w-[100px] flex items-center gap-1 top-0 right-0 text-gray-500 hover:text-black transform -translate-x-6 group-hover:translate-x-0 transition-transform cursor-pointer py-1 duration-500">
            <span>
              <BiShoppingBag className="w-6 h-6" />
            </span>
            Add to Cart
          </p>
        </div>
        <div>
          {product.category}
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && <p className="bg-black rounded-tl-xl rounded-bl-2xl text-white font-semibold font-titleFont px-6 py-1">Sale</p>}
          </div>
      </div>
    </div>
  );
}

export default ProductsCard;
