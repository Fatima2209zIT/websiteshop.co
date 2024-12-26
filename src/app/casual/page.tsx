"use client";
import { useState } from "react";


const products = [
  {
    id: 1,
    name: "Gradient Graphic T-shirt",
    price: 145,
    rating: 3.5,
    image: "/Frame 33.png",
    color: "white",
    size: "Large",
    discount: null,
  },
  {
    id: 2,
    name: "Polo with Tipping Details",
    price: 180,
    rating: 4.5,
    image: "/brownshirt.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 3,
    name: "Black Striped T-shirt",
    price: 180,
    rating: 4.5,
    image: "/Frame 38.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 4,
    name: "Skinny Fit Jeans",
    price: 180,
    rating: 4.5,
    image: "/fitjeans.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 5,
    name: "Chechered Shirt",
    price: 180,
    rating: 4.5,
    image: "/checkshirt.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 6,
    name: "Sleeve Striped T-shirt",
    price: 180,
    rating: 4.5,
    image: "/sleeveshirt.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 7,
    name: "Courage Graphic T-shirt",
    price: 180,
    rating: 4.5,
    image: "/courageshirt.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 8,
    name: "Loose Fit Bermuda Shorts",
    price: 180,
    rating: 4.5,
    image: "/looseshort.png",
    color: "red",
    size: "Medium",
    discount: null,
  },
  {
    id: 9,
    name: "Faded Skinny Jeans",
    price: 180,
    rating: 4.5,
    image: "/blackjeans.png",
    color: "red",
    size: "Medium",
    discount: null,
  },

];

export default function Casual() {
  const [filters, setFilters] = useState({
    category: "",
    color: "",
    size: "",
    priceRange: [50, 200],
  });

  const handleFilterChange = (type: string, value: string | number[]) => {
    setFilters({ ...filters, [type]: value });
  };

  return (
    <div className="flex flex-col lg:flex-row">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 bg-gray-100 p-4">
        <h2 className="text-lg font-bold mb-4">Filters</h2>
        <div>
          <h3 className="font-medium mb-2">Categories</h3>
          <ul className="space-y-2">
            <li>
              <button className="text-gray-700 hover:font-bold">T-shirts</button>
            </li>
            <li>
              <button className="text-gray-700 hover:font-bold">Shorts</button>
            </li>
            <li>
              <button className="text-gray-700 hover:font-bold">Shirts</button>
            </li>
          </ul>
        </div>

        {/* Price Slider */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Price</h3>
          <input
            type="range"
            min="50"
            max="200"
            value={filters.priceRange[1]}
            onChange={(e) =>
              handleFilterChange("priceRange", [50, parseInt(e.target.value)])
            }
            className="w-full"
          />
          <div className="flex justify-between text-gray-600 text-sm">
            <span>$50</span>
            <span>${filters.priceRange[1]}</span>
          </div>
        </div>

        {/* Colors */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Colors</h3>
          <div className="flex space-x-2">
            <button className="w-6 h-6 rounded-full bg-red-500"></button>
            <button className="w-6 h-6 rounded-full bg-blue-500"></button>
            <button className="w-6 h-6 rounded-full bg-green-500"></button>
            <button className="w-6 h-6 rounded-full bg-yellow-500"></button>
          </div>
        </div>

        {/* Sizes */}
        <div className="mt-6">
          <h3 className="font-medium mb-2">Size</h3>
          <div className="flex flex-wrap gap-2">
            {["Small", "Medium", "Large", "X-Large"].map((size) => (
              <button
                key={size}
                className={`px-2 py-1 border ${
                  filters.size === size ? "border-black" : "border-gray-300"
                } rounded`}
                onClick={() => handleFilterChange("size", size)}
              >
                {size}
              </button>
            ))}
          </div>
        </div>
      </aside>

      {/* Products */}
      <main className="w-full lg:w-3/4 p-4">
        <header className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Casual</h1>
          <div>
            <label htmlFor="sort" className="mr-2 text-sm">
              Sort by:
            </label>
            <select
              id="sort"
              className="border-gray-300 border px-2 py-1 rounded"
            >
              <option value="popular">Most Popular</option>
              <option value="lowToHigh">Price: Low to High</option>
              <option value="highToLow">Price: High to Low</option>
            </select>
          </div>
        </header>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {products.map((product) => (
            <div key={product.id} className="border p-4 rounded-lg">
              <img
                src={product.image}
                alt={product.name}
                className="w-full h-48 object-cover rounded"
              />
              <h2 className="text-lg font-bold mt-2">{product.name}</h2>
              <p className="text-gray-500">${product.price}</p>
              <div className="text-yellow-500">
                {"★".repeat(Math.floor(product.rating))}
                {"☆".repeat(5 - Math.floor(product.rating))}
              </div>
            </div>
          ))}
        </div>

        {/* Pagination */}
        <div className="flex justify-between items-center mt-6">
          <button className="px-4 py-2 border rounded bg-gray-200">Previous</button>
          <button className="px-4 py-2 border rounded bg-gray-200">Next</button>
        </div>
      </main>
     
    </div>
  );
}
