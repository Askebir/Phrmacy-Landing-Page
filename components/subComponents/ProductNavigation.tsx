"use client";
import Link from "next/link";
import { useState } from "react";

// export default function NavigationWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [activeLink, setActiveLink] = useState("home");
//   return (
//     <>
//       <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
//       {children}
//       <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
//     </>
//   );
// }

export default function ProductNavigation() {
  const [activeLink, setActiveLink] = useState("home");

  return (
    <div className=" flex items-center justify-center   ">
      <div className="flex items-center justify-center gap-10 shadow-xl w-max px-7 py-2 rounded-4xl  bg-[#eaeee9] border border-black/20 ">
        <Link
          href="/AllProducts"
          onClick={() => setActiveLink("AllProducts")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "AllProducts"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          All Products
        </Link>
        <Link
          href="/Medicines"
          onClick={() => setActiveLink("Medicines")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "Medicines"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Medicines
        </Link>
        <Link
          href="/Cosmetics"
          onClick={() => setActiveLink("Cosmetics")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "Cosmetics"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Cosmetics
        </Link>
        <Link
          href="/BabyEssentials"
          onClick={() => setActiveLink("BabyEssentials")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "BabyEssentials"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Baby Essentials
        </Link>
        <Link
          href="/PersonalCare"
          onClick={() => setActiveLink("PersonalCare")}
          className={`hover:border-b-2 hover:border-blue-600 hover:text-blue-600 active:border-b-2 active:border-blue-600
            ${
              activeLink === "PersonalCare"
                ? "text-blue-600 border-b-2 border-blue-600"
                : "text-gray-700 border-b-2 border-transparent"
            }`}
        >
          Persona Care
        </Link>
      </div>
    </div>
  );
}
