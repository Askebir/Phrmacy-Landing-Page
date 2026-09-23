import React from "react";
import LightText from "../subComponents/LightText";
import Link from "next/link";
import Image from "next/image";

export default function FindUs() {
  return (
    <section className=" py-20 w-full ">
      <div className="flex flex-col h-150  items-center justify-center mx-auto px-10  ">
        <div className="flex items-center justify-center mb-7 ">
          <LightText text="Find Us" />
        </div>
        <div className="   flex items-center justify-center ">
          <p className="text-4xl">Visit Our Pharmacy</p>
        </div>
        <div className="flex  my-15 w-full mx-auto items-center  justify-between px-30 ">
          <div>
            <div className="pb-6">
              <p>Address</p>
              <p className="text-black/50 ">
                Lebu Muzikzbet, Addis Ababa, Ethiopia
              </p>
            </div>
            <div className="pb-6">
              <p>Phone</p>
              <p className="text-black/50 ">+1(555) 123-4567</p>
            </div>
            <div>
              <p>Opening Hours</p>
              <div className="flex justify-between text-black/50 ">
                <div>
                  <p>Monday-Friday</p>
                  <p>Saturday</p>
                  <p>Sunday</p>
                </div>

                <div>
                  <p>8:00 AM-8:00PM</p>
                  <p>9:00 AM-6:00PM</p>
                  <p className="text-red-600"> Closed</p>
                </div>
              </div>
            </div>
          </div>

          <div className="relative z-10 flex items-center justify-center">
            <div className="relative flex justify-center items-center rounded-3xl border-3 border-black/40  drop-shadow-2xl">
              <Link
                href="https://maps.app.goo.gl/ADTPMYMR3DdV8ejL7?g_st=ac"
                target="_blank"
                rel="noopener noreferrer"
                className="relative block hover:scale-102 "
              >
                {/* Map image */}
                <Image
                  src="/map1.jpg"
                  alt="Our Location Map"
                  width={400}
                  height={200}
                  className="rounded-3xl w-120 h-80 hover:scale-120 "
                />

                {/* Dark transparent overlay */}
                <div className="absolute inset-0 flex items-center justify-center rounded-3xl bg-black/20">
                  <span className="rounded-full bg-white/80 px-3 py-2 mb-50  font-bold text-black shadow-lg hover:scale-105 ">
                    Click to Open Google Maps
                  </span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
