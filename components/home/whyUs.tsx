import React from "react";
import LightText from "../subComponents/LightText";
import Image from "next/image";

export default function WhyUs() {
  return (
    <section className="flex justify-between w-full  py-5 mt-4 gap-4 px-30  ">
      <div className="flex flex-col ml-10">
        <LightText text="why Us" />
        <p className="text-3xl font-bold ">Why Choose Us?</p>
        <p className="text-black/50">
          {" "}
          We are more than just a pharmacy we are your neighborhood health
          partner.
          <br /> Here is what makes us different.
        </p>
        <div>
          <p className="text-2xl ">Licensed Pharmacists</p>
          <p className="text-black/50">
            Our team is fully licensed and trained to assist you.
          </p>
          <p className="text-2xl ">Fast Service</p>
          <p className="text-black/50">
            Quick prescription filling and no long waits.
          </p>
          <p className="text-2xl">Affordable Prices</p>
          <p className="text-black/50">
            Competitive pricing with no hidden fees.
          </p>
          <p className="text-2xl ">Customer-Centered</p>
          <p className="text-black/50">We listen and put your health first.</p>
          <p className="text-2xl ">Convenient Hours</p>
          <p className="text-black/50">
            Open 6 days a week for your convenience.
          </p>
          <p className="text-2xl ">Free Advice</p>
          <p className="text-black/50">
            Ask any health question — we are always happy to help.
          </p>
        </div>
      </div>

      <div className="flex flex-col mr-10">
        <div className="bg-green-700 text-white rounded-2xl p-4 mb-4 ">
          <p className="text-7xl flex items-center justify-center">10+</p>
          <p className="text-2xl flex items-center justify-center">
            Yours Serving Our Community
          </p>
          <p className="text-green-300 flex items-center justify-center ">
            Trust by hundreds of families in Springfield
          </p>
        </div>
        <div className="rounded-3xl">
          <Image
            src="/image/products/Personal Care1.jpeg"
            alt="perosnal care image"
            width={500}
            height={500}
            className="rounded-3xl h-75 "
          />
        </div>
      </div>
    </section>
  );
}
