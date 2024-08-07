import React, { useState,useEffect } from "react";
import banner1 from "../assets/banner-1.jpg";
import banner2 from "../assets/banner-2.jpg";
import banner3 from "../assets/banner-3.jpg";
import { HiArrowLeft, HiArrowRight } from "react-icons/hi";
function Banner() {
  const data = [banner1, banner2, banner3];
  const [currentSlide, setCurrentSlide] = useState(0);

  const prevSlide = () => {
    setCurrentSlide(currentSlide === 0 ? 2 : (prev) => prev - 1);
  };
  const nextSlide = () => {
    setCurrentSlide(currentSlide === 2 ? 0 : (prev) => prev + 1);
  };
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % data.length);
    }, 4000); // 3 saniyede bir kaydır

    return () => clearInterval(interval);
  }, [data.length]);
  const renderedImage = () => {
    return data.map((img, index) => {
      return (
        <img
          src={img}
          alt={`banner${index + 1}`}
          className="w-screen h-full object-cover"
          key={index}
        />
      );
    });
  };

  return (
    <div className="w-full h-auto rounded-b-3xl overflow-hidden">
      <div className="w-screen h-[650px] relative">
        <div
          style={{
            transform: `translateX(-${currentSlide * 100}vw)`,
            transition: "transform 1.5s ease",
          }}
          className="w-[300vw] h-full flex transition-transform duration-1000"
        >
          {renderedImage()}
        </div>
        <div className="absolute w-fit left-0 right-0 mx-auto gap-8 flex bottom-5">
          <div
            onClick={prevSlide}
            className="w-14 h-12 flex bg-white items-center hover:bg-black hover:text-white active:bg-red-600 justify-center hover:cursor-pointer duration-300 rounded-3xl"
          >
            <HiArrowLeft />
          </div>
          <div
            onClick={nextSlide}
            className="w-14 h-12 flex bg-white items-center hover:bg-black hover:text-white justify-center active:bg-red-600  hover:cursor-pointer duration-300 rounded-3xl"
          >
            <HiArrowRight />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Banner;
