import React from "react";
import Image from "next/image";
import { Button } from "../ui/button";

export default function Hero() {
  return (
    <div className="flex border w-[95%] items-center justify-between mt-7  ">
      <div className=" pb-60">
        <div className="bg-[#beeccc] w-max  rounded-full mb-4">
          <p className="text-[#00aa00] py-1  px-2">Your Local Pharmacy</p>
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
          <Button className="rounded-full bg-green-600">
            Get Free Consultation
          </Button>
          <Button className="rounded-full text-green-500 bg-transparent border-2 border-green-600">
            Explore Services
          </Button>
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

      <div className="w-[60%] pb-20 ">
        <Image
          src="/image/hero/pharmacist10.jpg"
          alt="logo"
          height={250}
          width={250}
          className="h-150 w-full rounded-md "
        />
      </div>
    </div>
  );
}
