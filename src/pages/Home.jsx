import React, { useState } from "react";
import { Link, useLoaderData } from "react-router-dom";

export const loader = async () => {
  const res = await fetch("https://fakestoreapi.com/products");
  const data = await res.json();
  return data;
};

export const Component = () => {
  const data = useLoaderData();

  const [search, setSearch] = useState("");

  // Filter logic
  const filteredData = data.filter((item) =>
    item.category.toLowerCase().includes(search.toLowerCase())
  );
console.log(filteredData)
  return (
    <div className="min-h-screen bg-gray-100 p-6">

      {/* Search Input */}
      <div className="mb-6 flex justify-center">
        <input
          type="text"
          placeholder="Search by category..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full sm:w-[400px] px-4 py-2 rounded-xl border focus:outline-none focus:ring-2 focus:ring-black"
        />
      </div>

      {/* Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">

        {filteredData.length > 0 ? (
          filteredData.map((item) => (
          
            <div
              key={item.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition duration-300 flex flex-col"
            >
              {/* Image */}
              <div className="h-60 bg-white flex justify-center items-center p-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="h-full object-contain"
                />
              </div>

              {/* Content */}
              <div className="p-4 flex flex-col gap-2 flex-1">
                <h2 className="font-bold text-lg line-clamp-1">
                  {item.title}
                </h2>

                <p className="text-sm text-gray-500 line-clamp-2">
                  {item.description}
                </p>

                <div className="flex justify-between items-center mt-2">
                  <span className="font-bold text-green-600">
                    ${item.price}
                  </span>

                  <span className="text-sm text-gray-500">
                    ⭐ {item.rating.rate} ({item.rating.count})
                  </span>
                </div>

                <span className="text-xs bg-gray-200 px-2 py-1 rounded w-fit">
                  {item.category}
                </span>

                <button className="mt-auto bg-black text-white py-2 rounded-xl hover:bg-gray-800 transition">
                  <Link to={`/product/${item.id}`} className="block w-full text-center">
                    Product Details
                  </Link>
                </button>
              </div>
            </div>
          ))
        ) : (
          <p className="text-center col-span-full text-gray-500">
            No products found 😢
          </p>
        )}

      </div>
    </div>
  );
};