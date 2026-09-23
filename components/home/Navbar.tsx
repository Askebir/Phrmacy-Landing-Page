import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="relative z-100 sticky top-0 bg-white h-14 px-3 border text-xl flex items-center justify-between shadow-xl">
      <Link href="/">
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
            <p className="text-black text-xl text-bold ">Lebu Pharmacy</p>
          </div>
        </div>
      </Link>
      <div className="flex gap-8 text-black text- ">
        <a href="#home" className="hover:underline">
          Home
        </a>
        <a href="#products" className="hover:underline">
          Products
        </a>
        <a href="#services" className="hover:underline">
          Services
        </a>
        <a href="#about" className="hover:underline">
          About
        </a>

        <a href="#contact" className="hover:underline active:underline ">
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
    active:scale-95"
          >
            Free Consultation
          </Link>
        </Button>
      </div>
    </nav>
  );
}
