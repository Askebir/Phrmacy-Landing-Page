import React from "react";
import LightText from "../subComponents/LightText";
import ProductCard from "../subComponents/ProductCard";

const ProductsObjs = [
  {
    image: "/image/products/Medicines.jpeg",
    title: "Medicines",
    description: "Prescription and over-the-counter medications.",
  },
  {
    image: "/image/products/Cosmetics.jpeg",
    title: "Cosmetics",
    description: "Skincare, haircare, and beauty essentials.",
  },
  {
    image: "/image/products/Baby Essentials.jpeg",
    title: "Baby Essentials",
    description: "Safe products for newborns and toddlers.",
  },
  {
    image: "/image/products/Personal Care.jpeg",
    title: "Personal Care",
    description: "Daily hygiene and wellness products.",
  },
];

export default function Products() {
  return (
    <section id="products" className="pb-40 bg-[#d2e7e1] ">
      <div className="flex flex-col itmes-center justify-center">
        <div>
          <div className="flex itmes-center justify-center">
            <LightText text="Product Catalog" />
          </div>
          <div className="flex itmes-center justify-center">
            <h1>Explore Our Products</h1>
          </div>
          <div className="text-black/60 flex itmes-center justify-center ">
            <p>
              Find the healthcare and personal care products you need in
              one{" "}
            </p>
            <div className="flex justify-center">convenient place.</div>
          </div>
        </div>
        <div>
          <div className="flex   flex-wrap place-items-center justify-center gap-7 ">
            {ProductsObjs.map((product) => {
              return (
                <div
                  key={product.title}
                  className="w-100 h-100 m-5 rounded-t-2xl  bg-[#7a7a7a] "
                >
                  <ProductCard ProductObj={product} />
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
