
import React from 'react';

export default function Cart() {
  return (
    <div className="min-h-screen bg-gray-100 flex justify-center py-10 px-4">
      <div className="w-full max-w-5xl">
        {/* Cart Header */}
        <h1 className="text-2xl font-bold mb-6">Your Cart</h1>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Cart Items */}
          <div className="md:col-span-2">
            {/** Cart Item 1 **/}
            <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
              <img
                src="/Frame 33.png"
                alt="Gradient Graphic T-shirt"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">Gradient Graphic T-shirt</h2>
                <p className="text-sm text-gray-500">Size: Large, Color: White</p>
                <p className="text-lg font-bold mt-1">$145</p>
              </div>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-md">-</button>
                <span className="mx-2">1</span>
                <button className="px-2 py-1 border rounded-md">+</button>
              </div>
              <button className="ml-4 text-red-500">&#x1F5D1;</button>
            </div>

            {/** Cart Item 2 **/}
            <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
              <img
                src="/checkshirt.png"
                alt="Checkered Shirt"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">Checkered Shirt</h2>
                <p className="text-sm text-gray-500">Size: Medium, Color: Red</p>
                <p className="text-lg font-bold mt-1">$180</p>
              </div>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-md">-</button>
                <span className="mx-2">1</span>
                <button className="px-2 py-1 border rounded-md">+</button>
              </div>
              <button className="ml-4 text-red-500">&#x1F5D1;</button>
            </div>

            {/** Cart Item 3 **/}
            <div className="flex items-center bg-white rounded-lg shadow-md p-4 mb-4">
              <img
                src="/fitjeans.png"
                alt="Skinny Fit Jeans"
                className="w-20 h-20 object-cover rounded-md"
              />
              <div className="ml-4 flex-1">
                <h2 className="text-lg font-semibold">Skinny Fit Jeans</h2>
                <p className="text-sm text-gray-500">Size: Large, Color: Blue</p>
                <p className="text-lg font-bold mt-1">$240</p>
              </div>
              <div className="flex items-center">
                <button className="px-2 py-1 border rounded-md">-</button>
                <span className="mx-2">1</span>
                <button className="px-2 py-1 border rounded-md">+</button>
              </div>
              <button className="ml-4 text-red-500">&#x1F5D1;</button>
            </div>
          </div>

          {/* Order Summary */}
          <div className="bg-white rounded-lg shadow-md p-6">
            <h2 className="text-xl font-semibold mb-4">Order Summary</h2>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500">Subtotal</p>
              <p className="font-bold">$565</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500">Discount (20%)</p>
              <p className="font-bold text-red-500">- $113</p>
            </div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-gray-500">Delivery Fee</p>
              <p className="font-bold">$15</p>
            </div>
            <div className="flex justify-between items-center mb-4">
              <p className="text-lg font-semibold">Total</p>
              <p className="text-lg font-bold">$467</p>
            </div>
            <div className="flex items-center mb-4">
              <input
                type="text"
                placeholder="Add promo code"
                className="flex-1 px-4 py-2 border rounded-l-md"
              />
              <button className="px-4 py-2 bg-black text-white rounded-r-md">
                Apply
              </button>
            </div>
            <button className="w-full py-3 bg-black text-white rounded-md font-semibold">
              Go to Checkout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
