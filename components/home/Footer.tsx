import React from "react";
import { FaTiktok, FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";

import { FaXTwitter } from "react-icons/fa6";
import LightText from "../subComponents/LightText";

export default function Footer() {
  return (
    <footer className="text-white/40  ">
      <div className="flex-col">
        <div className="bg-green-500 h-60 flex flex-col items-center justify-center ">
          <p className="text-4xl text-white ">
            Have a Question About Your Medication?
          </p>
          <p className="text-white py-4">
            Talk with our pharmacy team and get professional assistance.
          </p>
          <LightText text="Get Free Consultation" className="bg-white" />
        </div>
        <div className="bg-[#090f1d] px-20 py-15 mx-auto ">
          <div className=" grid grid-cols-4 gap-8 bg-[#090f1d] text-white/40  ">
            <div>
              <ul>
                <li className="text-white">GreenLeaf Pharmacy</li>
                <li>
                  Your trusted community pharmacy, dedicated to your health and
                  wellbeing.
                </li>
                <li>Follow Us</li>
                <li className="flex text-white gap-4 mt-2">
                  <a
                    href=""
                    className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center mr-1 "
                  >
                    <FaTiktok />
                  </a>
                  <a
                    href=""
                    className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center mr-1  "
                  >
                    <FaInstagram />
                  </a>
                  <a
                    href=""
                    className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center mr-1 "
                  >
                    <FaFacebook />
                  </a>
                  <a
                    href=""
                    className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center mr-1 "
                  >
                    <FaYoutube />
                  </a>
                  <a
                    href=""
                    className="h-7 w-7 rounded-full bg-white/10 flex items-center justify-center mr-1 "
                  >
                    <FaXTwitter />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <p className="text-white">Quick Links</p>
              <nav className="flex flex-col">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#services">Services</a>
                <a href="#products">Products</a>
                <a href="#contact">Contact</a>
              </nav>
            </div>
            <div>
              <ul>
                <li className="text-white">Our Services</li>
                <li>Diabetes Screening</li>
                <li>Blood Pressure Check</li>
                <li>Fertility Counseling</li>
                <li>Medication Support</li>
                <li>Free Consultation</li>
              </ul>
            </div>
            <div>
              <ul>
                <li className="text-white">Contact</li>
                <li>+1 (555) 123-4567</li>
                <li>info@greenleafpharmacy.com</li>
                <li>123 Main Street, Springfield, IL 62701</li>
              </ul>
            </div>
          </div>
          <div className="bg-white/20 h-0.5  my-5 w-full "></div>

          <div className="flex justify-between  text-xs ">
            <div>
              <p>© 2026 GreenLeaf Pharmacy. All rights reserved.</p>
            </div>

            <div className="flex gap-3">
              <p>Developed by Askebir Tadesse</p>
              <p>Privacy Policy</p>
              <p>Terms of Service</p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
