import React from "react";
import { logo, payment } from "../assets/index";
import { DiGithubBadge } from "react-icons/di";
import { FaLinkedin } from "react-icons/fa";
import { BsPersonFill } from "react-icons/bs";
import { BsPaypal } from "react-icons/bs";
import { CiDeliveryTruck } from "react-icons/ci";
function Footer() {
  return (
    <div className="bg-black p-6 text-white py-16 justify-between font-titleFont">
      <div className="mx-auto max-w-screen-xl grid grid-cols-3">
        <div className="flex flex-col gap-6">
          <img src={logo} alt="logo" className="w-32 rounded-2xl" />
          <p className="text-white text-md tracking-wide">© Free</p>
          <img src={payment} alt="logo" className="w-72 rounded-2xl" />
          <div className="text-gray-500 text-[28px] cursor-pointer flex gap-4">
            <DiGithubBadge className=" hover:text-white duration-300" />
            <FaLinkedin className=" hover:text-blue-500 duration-300" />
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Contact Me</h2>
          <div className="text-base text-[15px] flex flex-col gap-4">
            <p>E-mail: arslandoguu@icloud.com</p>
            <p>Phone: +90 5555555555</p>
          </div>
        </div>
        <div>
          <h2 className="text-2xl font-semibold text-white mb-4">Profile</h2>
          <div className="text-base text-[15px] flex flex-col gap-4">
            <p className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white duration-300">
              <span>
                <BsPersonFill className="text-[18px]" />
              </span>{" "}
              My Account
            </p>
            <p className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white duration-300">
              <span>
                <BsPaypal className="text-[18px]" />
              </span>{" "}
              Checkout
            </p>
            <p className="flex items-center gap-3 cursor-pointer text-gray-400 hover:text-white duration-300">
              <span>
                <CiDeliveryTruck className="text-[18px]" />
              </span>{" "}
              Track Order
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
