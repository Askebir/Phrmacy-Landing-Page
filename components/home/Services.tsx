import React from "react";
import LightText from "../subComponents/LightText";
import { Button } from "../ui/button";
import GreenButton from "../subComponents/GreenButton";

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-14 bg-[#d2e7e1] h-300 w-full pt-15"
    >
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <LightText text="What We Offer" />
          </div>
          <div className="flex justify-center">
            <p className="text-4xl font-bold">Our Pharmacy Services</p>
          </div>
          <div className="flex justify-center">
            <p>
              Professional services designed to make everyday healthcare more
              <br />
              convenient.
            </p>
          </div>
        </div>
        <div className="py-50"></div>
        <div>
          <div className="flex justify-center">
            <p>Need help? Talk to our pharmacy team</p>
          </div>
          <div className="flex justify-center">
            <GreenButton text="Get Free Consultation" p={4} />
          </div>
        </div>
      </div>
    </section>
  );
}
