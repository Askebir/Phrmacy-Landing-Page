import React from "react";
import LightText from "../subComponents/LightText";

export default function Products() {
  return (
    <section id="products">
      <div>
        <LightText text="Product Catalog" />
        <div>
          <h1>Explore Our Products</h1>
        </div>
        <div className="text-black/60">
          <p>Find the healthcare and personal care products you need in one </p>
          <div className="flex justify-center">convenient place.</div>
        </div>
      </div>
    </section>
  );
}
