import React, { useState } from "react";
import { BiShoppingBag } from "react-icons/bi";
import { useNavigate } from "react-router-dom";
import { addToCart } from "../redux/homeSlice";
import { useDispatch } from "react-redux";
import { ToastContainer, toast } from "react-toastify";

function ProductsCard({ product }) {
  const [mouseEnter, setMouseEnter] = useState(false);
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
  const dispatch = useDispatch();
  return (
    <div className="group relative">
      <div onClick={handleDetailsClick} className="w-full rounded-t-2xl h-96 cursor-pointer overflow-hidden">
        <img
          className="w-full h-full object-cover group-hover:scale-110 duration-500"
          src={product.image}
          alt="productImage"
        />
      </div>
      <div className="w-full rounded-b-2xl border-[1px] py-3">
        <div className="flex justify-between items-center">
          <h2 className="font-titleFont px-3 text-[17px] font-bold">
            {product.title}
          </h2>
        </div>
        <div className="flex gap-2 relative overflow-hidden">
          <div className="text-sm relative px-4 w-28 gap-2 justify-end">
            <p className="line-through text-gray-400">${product.oldPrice}</p>
            <p className="px-1 font-semibold text-[18px]">${product.price}</p>
          </div>
          <p onClick={() => dispatch(addToCart({
            _id: product._id,
            title: product.title,
            image: product.image,
            price: product.price,
            quantity: 1,
            description:product.description
          })) & toast.success(`${product.title} is added`)} onMouseLeave={()=>setMouseEnter(false)} onMouseEnter={()=>setMouseEnter(true)} className="absolute z-20 w-[140px] bg-black flex items-center text-nowrap gap-1 top-0 right-0 text-white px-3 rounded-tl-full rounded-bl-full transform translate-x-12 group-hover:-translate-x-0 transition-transform cursor-pointer py-1 duration-500">
            <span>
              <BiShoppingBag className="w-7 h-7" />
            </span>
            {mouseEnter && <span>Add to Cart</span>}
          </p>
        </div>
        <div className="absolute top-4 right-0">
          {product.isNew && <p className="bg-black rounded-tl-xl rounded-bl-2xl text-white font-semibold font-titleFont px-6 py-1">Sale</p>}
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

export default ProductsCard;
