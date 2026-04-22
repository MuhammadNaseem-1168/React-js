import axios from "axios";
import { createContext, useContext, useState } from "react";

export const DataContext = createContext(null);

export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);

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
    } catch (error) {
      console.log(error);
    }
  };
  const getUniqueCategory = (data, property) => {
    let newVal = data?.map((curElem) => {
      return curElem[property];
    });
    newVal = [ ...new Set(newVal)];
    return newVal;
  };
  const categoryOnlyData = getUniqueCategory(data, "category");
  const brandOnlyData = getUniqueCategory(data, "brand");
  return (
    <DataContext.Provider
      value={{
        data,
        setData,
        fetchAllProducts,
        categoryOnlyData,
        brandOnlyData,
      }}
    >
      {children}
    </DataContext.Provider>
  );
};

export const getData = () => useContext(DataContext);
