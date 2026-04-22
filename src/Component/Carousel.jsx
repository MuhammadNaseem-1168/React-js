import React, { useState, useEffect } from "react";
import { getData } from "../Context/DataContext";
import Category from "./Category";

const Carousel = () => {
  const { data, fetchAllProducts } = getData();
  const [index, setIndex] = useState(0);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  // useEffect(() => {
  //   if (!data || data.length === 0) return;

  //   const interval = setInterval(() => {
  //     setIndex((prev) => (prev + 1) % data.length);
  //   },10000);

  //   return () => clearInterval(interval);
  // }, [data]);

  const nextSlide = () => {
    setIndex((prev) => (prev + 1) % data.length);
  };

  const prevSlide = () => {
    setIndex((prev) => (prev - 1 + data.length) % data.length);
  };

  if (!data || data.length === 0) {
    return <h2>Loading...</h2>;
  }

  return (
    <div className="w-full h-88 flex  flex-col justify-center items-center bg-gray-100 relative">
      {/* PREV */}
      <button
        onClick={prevSlide}
        className="absolute left-5 bg-black text-white px-4 py-2 rounded hover:bg-red-700 cursor-pointer"
      >
        Prev
      </button>

      {/* CARD */}
      <div className="bg-white p-4 rounded shadow text-center w-full h-full">
        <img
          src={data[index].thumbnail}
          alt=""
          className="h-38 mx-auto object-contain"
        />

        <h2 className="font-bold mt-2 text-lg">{data[index].title}</h2>

        {/* 💰 PRICE */}
        <p className="text-green-600 font-semibold">${data[index].price}</p>

        {/* 📦 CATEGORY (optional) */}
        <p className="text-sm text-gray-500">{data[index].category}</p>
      </div>

      {/* NEXT */}
      <button
        onClick={nextSlide}
        className="absolute right-5 bg-black text-white px-4 py-2 rounded hover:bg-red-600 cursor-pointer"
      >
        Next
      </button>
      <Category />
    </div>
  );
};

export default Carousel;
