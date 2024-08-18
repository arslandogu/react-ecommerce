import React from "react";
import { logo } from "../assets/index";
import { TbShoppingBag } from "react-icons/tb";
import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";
import { useState, useEffect } from "react";
function Header() {
  const productData = useSelector((state) => state.home.productData);
  const userInfo = useSelector((state) => state.home.userInfo);
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 0) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  const liStyle = `text-base text-white font-bold hover:text-red-600 hover:underline underline-offset-2 decoration-[1px] cursor-pointer duration-300`;

  return (
    <div
      id="header"
      className={`mx-auto font-titleFont sm:px-10 px-5 bg-black text-white h-20 sticky top-0 z-50 transition-all duration-300 ease-in-out ${
        isScrolled ? "w-[85%] rounded-bl-xl rounded-br-xl" : "w-[100%]"
      } mx-auto`}
    >
      <div className="max-w-screen-2xl h-full mx-auto flex items-center justify-between">
        {isScrolled ? (
          <Link to="/">
          <div className="items-center cursor-pointer flex sm:mr-3 justify-center">
            <img src={logo} alt="logo" className="sm:w-16 w-0 rounded-2xl" />
          </div>
        </Link>
        ) : (
          <Link to="/">
            <div className="items-center cursor-pointer flex mr-3 justify-center">
              <img src={logo} alt="logo" className="w-16 rounded-2xl" />
            </div>
          </Link>
        )}

        <div className="flex items-center gap-8">
          <ul className="flex items-center gap-8">
            <li className={liStyle}>Home</li>
            <li className={liStyle}>Pages</li>
            <li className={liStyle}>Shop</li>
          </ul>
          <Link to="/cart">
            <div className="relative cursor-pointer">
              <TbShoppingBag color="white" className="w-8 h-8" />
              <span className="absolute w-8 top-3 left-0 text-sm flex items-center justify-center font-semibold">
                {productData.length}
              </span>
            </div>
          </Link>
          <Link to="/login">
            {userInfo ? (
              <div className="flex items-center justify-center gap-3 flex-row">
                <img
                  className="rounded-full w-10 h-10"
                  src={userInfo.image}
                  alt="profileImg"
                />
                <p
                  className={`font-titleFont text-[16px] font-semibold ${
                    isScrolled && "text-[14px]"
                  }`}
                >
                  {userInfo.name}
                </p>
              </div>
            ) : (
              <BsPersonCircle color="white" className="w-9 h-9" />
            )}
          </Link>
        </div>
      </div>
    </div>
  );
}

export default Header;
