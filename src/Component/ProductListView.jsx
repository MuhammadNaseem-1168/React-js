import React from "react";
import { useNavigate } from "react-router-dom";
import { useCart } from "../Context/CartContext";

const ProductListView = ({ product }) => {
  const navigate = useNavigate();
  const { addToCart } = useCart();
  return (
    <div className="space-y-4 mt-2 mb-3 rounded-md">
      <div className="bg-gray-200 flex gap-7 items-center p-2 rounded-md">
        <img
          src={product.thumbnail}
          alt={product.title}
          className="h-60 w-60 rounded-lg cursor-pointer bg-white ml-4"
          onClick={() => navigate(`/products/${product.id}`)}
        />
        <div className="space-y-2">
          <h1 className="font-bold text-xl line-clamp-3 hover:text-red-400 w-full">
            {product.title}
          </h1>
          <p className="font-semibold flex items-center text-lg">
            <span className="text-4xl">{product.price}</span>({product.discount}
            5% off)
          </p>
          <p>
            FREE dellivery<span className="font-semibold">Fri,24 apr</span>
            <br />
            Or fastest delivery{" "}
            <span className="font-semibold">Tomorrow, 23 Apr</span>
          </p>
          <button
            onClick={() => addToCart(product)}
            className="bg-red-500 cursor-pointer hover:bg-blue-800 text-white px-3 py-1 rounded-md"
          >
            Add to Cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductListView;
