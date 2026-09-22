"use client";

import React, { useState } from "react";
import LightText from "../subComponents/LightText";
import { Phone, Mail, MapPin, Clock, MapPinned } from "lucide-react";
import GreenButton from "../subComponents/GreenButton";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    const response = await fetch("/api/send", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        name,
        email,
        message,
      }),
    });

    const result = await response.json();

    console.log(result);
  }

  return (
    <section id="contact" className="bg-[#dfdddd] w-full px-30 py-35  ">
      <div className="flex items-center justify-between">
        <div className="flex flex-col">
          <div className="mb-3">
            <LightText text="Contact Us" />
          </div>
          <div className="text-4xl font-bold mb-3 ">
            <p>How Can We Help You?</p>
          </div>
          <div className="text-black/50 mb-5">
            <p>
              Have a question about your medication or want to book a
              consultation? <br />
              Reach out to us we are always happy to help.
            </p>
          </div>
          <div>
            <div className="flex gap-4 items-center bg-white h-15.5 w-100 rounded-xl my-4  ">
              <div className="bg-[#aed6b0] h-10 w-10 flex items-center justify-center rounded-full ml-3 ">
                <Phone />
              </div>
              <div>
                <p className="text-xl font-bold">Call Us</p>
                <p className="text-green-800">+1(555) 123-4567</p>
              </div>
            </div>

            <div className="flex gap-4 items-center bg-white h-15.5 w-100 rounded-xl my-4  ">
              <div className="bg-[#aed6b0] h-10 w-10 flex items-center justify-center rounded-full ml-3 ">
                <Mail />
              </div>
              <div>
                <p className="text-xl font-bold">Email Us</p>
                <p className="text-green-800">info@greenleafPharmacy.com</p>
              </div>
            </div>

            <div className="flex gap-4 items-center bg-white h-15.5 w-100 rounded-xl my-4  ">
              <div className="bg-[#aed6b0] h-10 w-10 flex items-center justify-center rounded-full ml-3 ">
                <MapPin />
              </div>
              <div>
                <p className="text-xl font-bold">Visit Us</p>
                <p className="text-green-800">
                  123 Main Street Springfield, IL 62701
                </p>
              </div>
            </div>
          </div>
        </div>

        <form onSubmit={handleSubmit}>
          <div className="flex flex-col px-5 bg-white w-100 rounded-xl">
            <div>
              <p className="text-2xl font-bold mb-3 pt-5">Send Us a Message</p>
            </div>

            <div>
              <div className=" flex flex-col  ">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  type="text"
                  placeholder="e.g john Smith"
                  className="rounded-xl bg-white p-3 border-3 "
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                />
              </div>
              <div className=" flex flex-col  ">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  type="email"
                  placeholder="e.g john Smith"
                  className="rounded-xl bg-white p-3 border-3 "
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
              </div>
            </div>
            <div className=" flex flex-col  ">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"

                placeholder="e.g john Smith"
                className="rounded-xl bg-white p-3 border-3 "
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </div>
            <div className="bg-green-700 text-white rounded-full p-3  my-5 text-2xl text-center font-bold">
              <button type="submit">Send Message</button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
