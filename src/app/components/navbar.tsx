"use client";
import Image from "next/image";
import { useState } from "react";
import Logo from "@/app/images/SHOP.CO.png";
import Downarrow from "@/app/images/Vector (4).png";
import Search from "@/app/images/Vector (5).png";
import Cart from "@/app/images/Frame.png";
import User from "@/app/images/Frame (1).png";
import Bars from "@/app/images/Frame (4).png";
import Search2 from "@/app/images/Frame (5).png";

export default function Navbar() {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <nav className="flex flex-row bg-white w-full items-center shadow-md">
      <div className="flex flex-row items-center w-full lg:w-[1240px]  mx-auto gap-10 px-4 lg:px-0">
        {/* Mobile Menu Icon */}
        <button
          className="lg:hidden block absolute top-[16px] left-[16px]"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          <Image src={Bars} alt="menu" width={24} height={24} />
        </button>

        {/* Logo */}
        <div className="absolute top-[16px] left-[56px] lg:static">
          <a href="/home">
            <Image src={Logo} alt="logo" width={160} height={22} />
          </a>
        </div>

        {/* Navbar Links */}
        <div
          className={`lg:flex flex-row items-center gap-6 ${
            isMobileMenuOpen ? "block" : "hidden"
          } absolute lg:static top-[60px] left-0 w-full lg:w-auto bg-white lg:bg-transparent z-50`}
        >
          <ul className="lg:flex flex-col lg:flex-row lg:items-center gap-6 px-4 lg:px-0">
            <li className="list-none font-satoshi font-normal">
              <div className="relative group">
                <span className="cursor-pointer flex items-center">
                  Shop
                  <Image
                    src={Downarrow}
                    alt="arrow"
                    width={11.5}
                    height={6.5}
                    className="ml-2"
                  />
                </span>
                {/* Dropdown Menu */}
                <ul className="absolute top-full left-0 mt-2 bg-white shadow-lg rounded-md hidden group-hover:block w-48 z-50">
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    Women Collection
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/productdetailimage">Men T-Shirts</a>
                  </li>
                  <li className="px-4 py-2 hover:bg-gray-100 cursor-pointer">
                    <a href="/casual">Casual</a>
                  </li>
                </ul>
              </div>
            </li>
            <li>
              <span>On Sale</span>
            </li>
            <li>
              <span>New Arrivals</span>
            </li>
            <li>
              <span>Brands</span>
            </li>
          </ul>
        </div>

        {/* Search Bar */}
        <div className="lg:flex hidden items-center w-[577px] h-[48px] bg-[#F0F0F0] rounded-[62px] px-4 py-2 gap-3">
          <Image src={Search} alt="search" width={24} height={24} />
          <p className="font-satoshi font-normal text-[16px] text-[#00000066]">
            Search for products...
          </p>
        </div>

        {/* Mobile Icons */}
        <div className="flex lg:hidden items-center gap-3 absolute top-[16px] right-[16px]">
          <Image src={Search2} alt="search" width={24} height={24} />
          <a href="/cart"><Image src={Cart} alt="cart" width={24} height={24} /></a>
          <Image src={User} alt="user" width={24} height={24} />
        </div>

        {/* Desktop Icons */}
        <div className="hidden lg:flex items-center gap-6">
         <a href="/cart"><Image src={Cart} alt="cart" width={22} height={20} /></a>
          <Image src={User} alt="user" width={22} height={20} />
        </div>
      </div>

      {/* Mobile Menu Dropdown */}
      {isMobileMenuOpen && (
        <div className="lg:hidden bg-white shadow-lg w-full py-4">
          <ul className="flex flex-col gap-4 px-4">
            <li>Shop</li>
            <li>On Sale</li>
            <li>New Arrivals</li>
            <li>Brands</li>
          </ul>
        </div>
      )}
    </nav>
  );
}
