"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const images = [
  "/image/hero/pharmacist1.jpg",
  "/image/hero/pharmacist2.jpg",
  "/image/hero/pharmacist3.jpg",
  "/image/hero/pharmacist4.jpg",
  "/image/hero/pharmacist5.jpg",
  "/image/hero/pharmacist6.jpg",
  "/image/hero/pharmacist7.jpg",
  "/image/hero/pharmacist8.jpg",
  "/image/hero/pharmacist9.jpg",
  "/image/hero/pharmacist10.jpg",
  "/image/hero/pharmacist11.jpg",
  "/image/hero/pharmacist12.jpg",
  "/image/hero/pharmacist13.jpg",
];

export default function HeroImageSlider() {
  const [currentImage, setCurrentImage] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImage((previous) => (previous + 1) % images.length);
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div>
      <div className="relative h-150 w-full overflow-hidden rounded-xl">
        <p className="relative z-10">{currentImage}</p>
        <Image
          src={images[currentImage]}
          alt="Pharmacy image"
          fill
          className="object-cover object-center"
          priority
        />
      </div>
      <div>
        {" "}
        <p className="z-10">{currentImage}</p>
      </div>
    </div>
  );
}
