import { Button } from "@mui/material";
import React from "react";
import { Link, useLoaderData, useParams } from "react-router-dom";

export const loader = async ({ params }) => {
  const { id } = params;
  const res = await fetch(`https://dummyjson.com/products/${id}`);
  const data = await res.json();
  return data;
};

export const Component = () => {
  const product = useLoaderData();
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center items-center p-6">
      <div className="bg-white rounded-2xl shadow-xl max-w-4xl w-full grid md:grid-cols-2 overflow-hidden">
        
        <div className="h-60 bg-white flex justify-center items-center p-4 relative">
       
          <span
            className={`absolute top-3 left-3 text-xs px-3 py-1 rounded-full text-white
    ${product.stock > 0 ? "bg-green-500" : "bg-red-500"}`}
          >
            {product.stock > 0 ? "In Stock" : "Out of Stock"}
          </span>

          <img
            src={product.thumbnail}
            alt={product.title}
            className="h-full object-contain"
          />
        </div>

     
        <div className="p-6 flex flex-col gap-4">
          <h1 className="text-2xl font-bold">{product.title}</h1>

          <span className="text-sm text-gray-500">
            Category: {product.category}
          </span>

          <p className="text-gray-600 text-sm">{product.description}</p>

          <div className="flex justify-between items-center mt-2">
            <span className="text-green-600 font-bold text-xl">
              ${product.price}
            </span>

            <span className="text-sm text-gray-500">
              ⭐ {product.rating.rate} ({product.rating.count})
            </span>
          </div>

          {/* Add to Cart Button */}
          <button className="mt-auto bg-black text-white py-3 rounded-xl hover:bg-gray-800 transition">
            <Link to="/cart" className="">
              Add to Cart 🛒
            </Link>
          </button>
          <Button size="small" component={Link} to="/">
            Back to home
          </Button>
        </div>
      </div>
    </div>
  );
};
