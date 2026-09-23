import React from "react";

import { Button } from "../ui/button";
import HeroImageSlider from "../subComponents/HeroImageSlider";
import Link from "next/link";
import LightText from "../subComponents/LightText";

export default function Hero() {
  return (
    <section
      id="home"
      className="flex  w-[95%] items-center justify-between mt-7 scroll-mt-16  "
    >
      <div className=" pb-60">
        <div className="bg-[#beeccc] w-max  rounded-full mb-4">
          <LightText text="Your Local Pharmacy" />
        </div>
        <div className="text-5xl font-bold">
          <p>
            Your Trusted <br />
            Partner in Better
            <br /> Health
          </p>
        </div>
        <div className="py-5">
          <p>
            Quality medicins, healthcare products, and
            <br /> profecional pharmacy services for you and your family
          </p>
        </div>
        <div className="flex gap-3 py-10">
          <button className="rounded-full">
            <a
              href="#products"
              className="bg-[#096e00]!  inline-flex
    items-center
    justify-center  px-5 py-2
    text-white
    transition-all
    duration-300
    hover:bg-blue-700
   hover:scale-105 active:95
    font-bold
    rounded-full
    "
            >
              Our Products
            </a>
          </button>

          <a
            href="#services
          "
          >
            <button className="rounded-full px-2 py-1 text-[#096e00]  bg-transparent border-2 border-[#096e00]!  hover:bg-[#096e00]!  hover:text-white font-bold hover:font-bold  transition-all duration-300 hover:scale-105 active:95 ">
              Explore Services
            </button>
          </a>
        </div>
        <div className="flex flex-col">
          <div className="flex gap-10">
            <p>10+ Years Experience</p>
            <p>Professional Service</p>
          </div>
          <div className="flex gap-10">
            <p>Quality Products</p>
            <p>Free Consultation</p>
          </div>
        </div>
      </div>

      <div className="w-[60%] pb-18 borde-2 ">
        <HeroImageSlider />
      </div>
    </section>
  );
}
