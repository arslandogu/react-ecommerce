import React, { useEffect } from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import { MdOutlineStar } from "react-icons/md";
import { useDispatch } from "react-redux";
import { addToCart } from "../redux/homeSlice";
import { ToastContainer, toast } from "react-toastify";
function Product() {
  const [details, setDetails] = useState({});
  const location = useLocation();
  const [qty, setQty] = useState(1);
  const dispatch = useDispatch();
  useEffect(() => {
    setDetails(location.state.item);
  }, [location.state.item]);

  return (
    <div>
      <div className="max-w-screen-xl mx-auto my-10 flex gap-10">
        <div className="w-2/5 relative">
          <img
            src={details.image}
            className="w-full h-[550px] object-cover"
            alt="productImage"
          />
          <div className="absolute top-4 right-0">
            {details.isNew && (
              <p className="bg-black rounded-tl-xl rounded-bl-2xl text-white font-semibold font-titleFont px-6 py-1">
                Sale
              </p>
            )}
          </div>
        </div>
        <div className="w-3/5 flex flex-col justify-center gap-12">
          <div>
            <h2 className="text-4xl font-semibold mb-2">{details.title}</h2>
            <div>
              <p className="line-through text-gray-400">${details.oldPrice}</p>
              <p className="font-semibold text-[22px]">${details.price}</p>
            </div>
          </div>
          <div className="flex items-center gap-2 text-base">
            <div className="flex items-center">
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <MdOutlineStar />
              <p className="text-[13px] text-gray-500 ml-1">(1 review)</p>
            </div>
          </div>
          <p className="text-base text-gray-500 -mt-3">{details.description}</p>
          <div>
            <div className="w-52 items-center flex justify-between p-3 border rounded-md">
              <p className="text-sm">Quantity</p>
              <div className="flex items-center gap-3 text-md font-semibold">
                <button
                  onClick={() => qty !== 1 && setQty(qty - 1)}
                  className="bg-white  flex items-center justify-center border w-8 h-7 px-2 rounded-2xl hover:bg-black text-black hover:text-white duration-300"
                >
                  -
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setQty(qty + 1)}
                  className="bg-white border w-8 h-7 flex items-center justify-center px-2 rounded-2xl hover:bg-black text-black hover:text-white duration-300"
                >
                  +
                </button>
              </div>
            </div>
            <div className="py-2 flex items-end justify-start">
              {/* Click izleme ekle, click tetiklenmesine animasyon ekle  */}
              <div className="mt-3">
                <button
                  onClick={() =>
                    dispatch(
                      addToCart({
                        _id: details._id,
                        title: details.title,
                        image: details.image,
                        price: details.price,
                        quantity: qty,
                        description: details.description,
                      })
                    ) & toast.success(`${details.title} is added`)
                  }
                  className="bg-gray-900 duration-300 hover:bg-gray-800 rounded-lg px-3 py-2 text-white border"
                >
                  Add to Cart
                </button>
              </div>
            </div>
            <p className="text-base text-gray-500">
              Category:{" "}
              <span className="font-medium text-black capitalize">
                {details.category}
              </span>
            </p>
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
      </div>
    </div>
  );
}

export default Product;
