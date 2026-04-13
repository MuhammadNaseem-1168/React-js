import React, { useEffect } from "react";
import { getData } from "../Context/DataContext";

const Category = () => {
  const { data, fetchAllProducts } = getData();

  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  console.log(categoryOnlyData);

  useEffect(() => {
    fetchAllProducts();
  }, []);

  return (
    <div className="bg-[#101829] w-full">
      <div className="max-x-7xl mx-auto flex gap-4 items-center justify-around py-7 px-4">
        {categoryOnlyData.map((item, index) => {
          return (
            <div key={index}>
              <button className="uppercase bg-gradient-to-r from-red-500 to-purple-500 text-white px-3 py-1 rounded-md cursor-pointer">
                {item}
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Category;
