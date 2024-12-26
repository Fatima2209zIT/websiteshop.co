"use client";
import Image from "next/image";
import { useState } from "react";

export default function ProductPage() {
  const [quantity, setQuantity] = useState(1);

  const increaseQuantity = () => {
    setQuantity(quantity + 1);
  };

  const decreaseQuantity = () => {
    if (quantity > 1) setQuantity(quantity - 1);
  };

  return (

    <div className="bg-white text-black">
    
      {/* Product Section */}
      <main className="px-4 py-10 md:px-6 lg:flex lg:gap-12">
        {/* Left Column: Product Image */}
        <div className="lg:w-1/2 flex flex-col items-center">
          <Image
            src="/image1.png"
            alt="Product Image"
            width={400}
            height={400}
            className="rounded-md"
          />
          {/* Left Column: Product Images */}
          <div className="flex gap-2 mt-4 items-start">
            {["/image1.png", "/image 5.png", "/image 6.png"].map((src, index) => (
              <Image
                key={index}
                src={src}
                alt={`Thumbnail ${index + 1}`}
                width={152}
                height={167}
                className="cursor-pointer rounded-md"
              />
            ))}
          </div>
        </div>

        {/* Right Column: Product Details */}
        <div className="lg:w-1/2">
          <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold">ONE LIFE GRAPHIC T-SHIRT</h1>
          <div className="flex items-center gap-2 mt-2">
            <Image
              src="/stars1.png"
              alt="Stars Rating"
              width={100}
              height={20}
            />
            <span className="text-gray-600 text-sm">4.5/5</span>
          </div>
          <p className="text-2xl md:text-3xl font-bold mt-4">
            $260 <span className="line-through text-gray-400">$300</span> <span className="text-red-500">-40%</span>
          </p>

          <p className="text-gray-600 mt-4">
            This graphic t-shirt is perfect for any occasion. Crafted from a soft and breathable fabric, it offers superior comfort and style.
          </p>

          <div className="mt-6">
            <h3 className="font-bold">Select Colors</h3>
            <div className="flex gap-3 mt-2">
              {['bg-[#4F4631]', 'bg-[#314F4A]' , 'bg-[#31344F]'].map((color, index) => (
                <div
                  key={index}
                  className={`w-6 h-6 rounded-full cursor-pointer border ${color}`}
                ></div>
              ))}
            </div>
          </div>

          <div className="mt-6">
            <h3 className="font-bold">Choose Size</h3>
            <div className="flex rounded-xl gap-3 mt-2">
              {["Small", "Medium", "Large", "X-Large"].map((size, index) => (
                <button
                  key={index}
                  className="border px-4 py-2 rounded-[62px] hover:bg-black"
                >
                  {size}
                </button>
              ))}
            </div>
          </div>

          <div className="mt-6 flex items-center gap-4">
            <div className="flex items-center border rounded-[62px] px-4 py-2">
              <button onClick={decreaseQuantity}>-</button>
              <span className="mx-4">{quantity}</span>
              <button onClick={increaseQuantity}>+</button>
            </div>
            <button className="bg-black text-white px-6 py-3 rounded-[62px]">Add to Cart</button>
          </div>
        </div>
      </main>

      {/* Product Details, Ratings, and FAQ Section */}
      <div className="flex gap-12 px-6 py-4">
        <p className="font-medium">Product Details</p>
        <p className="font-medium">Ratings and Review</p>
        <p className="font-medium">FAQs</p>
      </div>
      <Image src="/Line 7.png" alt="Line" width={1380} height={1} />

      {/* Reviews Section */}
      <section className="px-6 py-10">
        <div className="flex items-center justify-between w-full">
          <div className="flex items-center">
            <h2 className="text-xl font-bold">All Reviews</h2>
            <p className="text-gray-600 ml-2">(451)</p>
          </div>
          <Image src="/Frame 21.png" alt="Frame" width={354} height={48} />
        </div>

        <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-6">
          {[
            { name: "Samantha D.", rating: 5, review: "I absolutely love this t-shirt!..." },
            { name: "Alex M.", rating: 5, review: "The t-shirt exceeded my expectations!" },
            { name: "Ethan R.", rating: 4, review: "This t-shirt is a must-have!" },
            { name: "Olivia P.", rating: 5, review: "As a UI/UX enthusiast, I value simplicity..." },
            { name: "Liam K.", rating: 5, review: "This t-shirt is a fusion of comfort..." },
            { name: "Ava H.", rating: 4, review: "I'm not just wearing a t-shirt..." },
          ].map((review, index) => (
            <div key={index} className="p-6 border rounded-xl">
              <Image src="/6stars.png" alt="stars" width={104} height={104} />
              <div className="flex items-center">
                <h3 className="font-bold">{review.name}</h3>
                <Image src="/tick.png" alt="Verified" width={19.5} height={19.5} className="ml-2" />
              </div>
              <p className="text-gray-600 text-sm mt-2">{review.review}</p>
              <p className="m-2 text-xs">Posted on August 14, 2023</p>
            </div>
          ))}
        </div>
      </section>

      <div className="rounded-[62px] border-[1px] flex items-center justify-center bg-white py-3">
        <button className="bg-transparent font-semibold cursor-pointer">
          Load More Reviews
        </button>
      </div>

      {/* "You Might Also Like" Section */}
      <div className="flex justify-center items-center font-integral font-extrabold text-2xl lg:text-4xl mt-10">
        <h1>YOU MIGHT ALSO LIKE</h1>
      </div>

{/* Suggested Products Section */}
<div className="flex flex-col sm:flex-row gap-6 px-6 py-10 overflow-x-scroll sm:overflow-x-auto sm:overflow-y-hidden">
  {[
    { src: "/Frame 32.png", title: "Polo with Contrast Trims", price: "$212", oldPrice: "$242" },
    { src: "/Frame 33.png", title: "Gradient Graphic T-shirt", price: "$145" },
    { src: "/Frame 34.png", title: "Polo with Tipping Details", price: "$180" },
    { src: "/Frame 38.png", title: "Black Striped T-shirt", price: "$120", oldPrice: "$150" },
  ].map((product, index) => (
    <div key={index} className="flex flex-col sm:w-[300px] mt-6">
      <Image src={product.src} alt={product.title} width={295} height={298} />
      <p className="font-bold text-xl mt-4">{product.title}</p>
      <div className="flex items-center mt-2">
        <Image src="/6stars.png" alt="stars" width={104} height={104} />
        <span className="ml-2 text-sm">4.5/5</span>
      </div>
      <div className="flex gap-2 mt-2">
        <p className="font-semibold">{product.price}</p>
        {product.oldPrice && (
          <p className="font-semibold text-gray-400 line-through">{product.oldPrice}</p>
        )}
        {product.oldPrice && (
          <span className="bg-red-200 rounded-[62px] text-red-500 py-1 px-3">-20%</span>
        )}
      </div>
    </div>
  ))}
</div>


    </div>
  );
}
