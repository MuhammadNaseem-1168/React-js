import React, { useEffect, useState } from "react";
import { DataProvider } from "./Context/DataContext";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import Products from "./Pages/Products";
import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Cart from "./Pages/Cart";
import Navbar from "./Component/Navbar";
import axios from "axios";
import Footer from "./Component/Footer";
import SingleProduct from "./Pages/SingleProduct";
import CategoryProduct from "./Pages/CategoryProduct";
import ProtectedRoute from "./Component/ProtectedRoute";
import { useCart } from "./Context/CartContext";

const App = () => {
  const [location, setLocation] = useState(null);
  const [openDropdown, setOpenDropdown] = useState(false);
  const { cartItem, setCartItem } = useCart();

  // Detect location
  const getLocation = async () => {
    if (!navigator.geolocation) return alert("Geolocation not supported");

    navigator.geolocation.getCurrentPosition(async (pos) => {
      const { latitude, longitude } = pos.coords;
      // console.log("Lat/Lon:", latitude, longitude);

      try {
        // Free CORS proxy
        const proxy = "https://api.allorigins.win/raw?url=";
        const url = encodeURIComponent(
          `https://nominatim.openstreetmap.org/reverse?lat=${latitude}&lon=${longitude}&format=json`,
        );

        const res = await axios.get(proxy + url);

        const address = res.data.address;
        const county = address.county || "Unknown District";
        const state = address.state || "Unknown Province";

        setLocation({ county, state });
      } catch (error) {
        console.log("Error fetching location:", error);
      }
    });
  };

  // Auto-detect on mount
  useEffect(() => {
    getLocation();
  }, []);

  //Load cart from local storage on initial render
  useEffect(() => {
    const storedCart = localStorage.getItem("cartItem");
    if (storedCart) {
      setCartItem(JSON.parse(storedCart));
    }
  }, []);

  //Save cart to local storage whenever it changes
  useEffect(() => {
    if (cartItem.length > 0) {
      localStorage.setItem("cartItem", JSON.stringify(cartItem));
    }
  }, [cartItem]);
  return (
    <BrowserRouter>
      <Navbar
        location={location}
        getLocation={getLocation}
        openDropdown={openDropdown}
        setOpenDropdown={setOpenDropdown}
      />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/products" element={<Products />}></Route>
        <Route path="/products/:id" element={<SingleProduct />}></Route>
        <Route path="/category/:category" element={<CategoryProduct />}></Route>
        <Route path="/about" element={<About />}></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route
          path="/cart"
          element={
            <ProtectedRoute>
              <Cart location={location} getLocation={getLocation} />
            </ProtectedRoute>
          }
        ></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
