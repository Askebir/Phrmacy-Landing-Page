"use client";

import { useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";

export default function NavigationWrapper({
  children,
}: {
  children: React.ReactNode;
}) {
  const [activeLink, setActiveLink] = useState("");
  return (
    <>
      <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
      {children}
      <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
    </>
  );
}
