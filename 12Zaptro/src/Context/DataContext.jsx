import axios from "axios";
import { createContext, useContext, useState } from "react";
import { data } from "react-router-dom";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState();

  //fetching All Products from api

  const fetchAllProducts = async () => {
    try {
      const res = await axios.get("https://dummyjson.com/products?limit=150");
      console.log(res);
      const productsData = res.data.products;

      const electronicItems = productsData.filter((product) => {
        const category = product.category.toLowerCase();
        return (
          category === "smartphones" ||
          category === "laptops" ||
          category === "mobile-accessories" ||
          category === "mens-watches"
        );
      });
      setData(electronicItems);
      console.log("filtered Electronics", electronicItems);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <DataContext.Provider value={{ data, setData, fetchAllProducts }}>
      {children}
    </DataContext.Provider>
  );
};


export const getData = ()=> useContext(DataContext)