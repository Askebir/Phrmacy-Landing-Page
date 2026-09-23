import React from "react";
import LightText from "../subComponents/LightText";
import GreenButton from "../subComponents/GreenButton";
import ServiceCard from "../subComponents/ServiceCard";
import Link from "next/link";
import { Button } from "../ui/button";

const serviceCardObj = [
  {
    image: "/image/service/Free Consultation.jpeg",
    title: "Free Consultation",
    description:
      "Talk to our pharmacist for health questions  no appointment needed.",
  },

  {
    image: "/image/service/Medication Support.jpg",
    title: "Medication Support",
    description:
      "Expert advice on your prescriptions and over-the-counter medicines.",
  },
  {
    image: "/image/service/Diabetes Screening.jpeg",
    title: "Diabetes Screening",
    description:
      "Quick and accurate blood sugar testing to help you manage your health.",
  },

  {
    image: "/image/service/Blood Pressure Check.jpeg",
    title: "Blood Pressure Check",
    description:
      "Free blood pressure monitoring available during pharmacy hours.",
  },
  {
    image: "/image/service/Fertility Counseling.jpeg",
    title: "Fertility Counseling",
    description: "Professional guidance and support for family planning.",
  },
];

export default function Services() {
  return (
    <section
      id="services"
      className="scroll-mt-14 bg-[#d2e7e1] h-200 w-full pt-1 "
    >
      <div className="flex flex-col ">
        <div className="flex flex-col">
          <div className="flex justify-center">
            <LightText text="What We Offer" />
          </div>
          <div className="flex justify-center pb-5 ">
            <p className="text-4xl font-bold">Our Pharmacy Services</p>
          </div>
          <div className="flex flex-col justify-center  items-center pb-8 text-black/65">
            <p>
              Professional services designed to make everyday healthcare more
            </p>
            <p className="flex justify-center"> convenient.</p>
          </div>
        </div>
        <div className=" grid grid-cols-3 justify-center items-center mx-40 ">
          {serviceCardObj.map((service) => (
            <ServiceCard key={service.title} serviceCardObj={service} />
          ))}
        </div>

        <div>
          <div className="flex justify-center pb-6 text-2xl font-bold  ">
            <p>Need help? Talk to our pharmacy team</p>
          </div>
          <div className="flex justify-center">
            <Button asChild className="rounded-full">
              <Link
                href="tel:+251911234567"
                className="bg-[#096e00]!  inline-flex text-xl
    items-center
    justify-center  px-6
    py-5  font-semibold
    text-white
    transition-all
    duration-300
    hover:bg-blue-700
    hover:scale-105
    active:scale-95  "
              >
                Get Free Consultation
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
}
