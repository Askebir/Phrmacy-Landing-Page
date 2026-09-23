"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  const [activeLink, setActiveLink] = useState("");

  return (
    <nav className="relative z-100 sticky top-0 bg-white h-14 py-7 px-3 border text-xl flex items-center justify-between shadow-xl  ">
      <a href="#home">
        <div className="flex items-center justify-center gap-3">
          <div className="">
            <Image
              src="/image/logo1.jpg"
              alt="logo"
              height={50}
              width={50}
              className="h-12 w-12 rounded-full"
            />
          </div>
          <div>
            <p className=" text-4xl text-bold text-[#51426d] ">Lebu Pharmacy</p>
          </div>
        </div>
      </a>
      <div className="flex gap-8 text-black text- ">
        <a
          href="#home"
          onClick={() => setActiveLink("home")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "home"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Home
        </a>
        <a
          href="#products"
          onClick={() => setActiveLink("products")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "products"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Products
        </a>
        <a
          href="#services"
          onClick={() => setActiveLink("services")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "services"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Services
        </a>
        <a
          href="#about"
          onClick={() => setActiveLink("about")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "about"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          About
        </a>

        <a
          href="#contact"
          onClick={() => setActiveLink("contact")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "contact"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Contact
        </a>
      </div>
      <div>
        <Button asChild className="rounded-full">
          <Link
            href="tel:+251911234567"
            className="bg-[#096e00]!  inline-flex
    items-center
    justify-center  px-6
    py-3   font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-blue-700
    hover:scale-105
    active:scale-95 text-xl  "
          >
            Free Consultation
          </Link>
        </Button>
      </div>
    </nav>
  );
}
