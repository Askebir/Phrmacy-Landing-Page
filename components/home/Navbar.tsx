import React from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

export default function Navbar() {
  return (
    <nav className="relative z-10 sticky top-0 bg-white h-14 px-3 border text-xl flex items-center justify-between shadow-xl">
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
        <a href="#home">Home</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>

        <a href="#products">Products</a>
        <a href="#contact">Contact</a>
      </div>
      <div>
        <Button asChild className="rounded-full">
          <Link href="#free" className="bg-[#096e00]! ">
            Free Consultation
          </Link>
        </Button>
      </div>
    </nav>
  );
}
