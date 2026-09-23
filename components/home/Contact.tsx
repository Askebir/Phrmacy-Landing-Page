"use client";

import { useRef } from "react";
import emailjs from "@emailjs/browser";

import React, { useState } from "react";
import LightText from "../subComponents/LightText";
import { Phone, Mail, MapPin, Clock, MapPinned } from "lucide-react";
import { toast } from "sonner";

export default function Contact() {
  const form = useRef<HTMLFormElement>(null);

  const [isSending, setIsSending] = useState(false);

  async function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setIsSending(true);

    try {
      const result = await emailjs.sendForm(
        process.env.NEXT_PUBLIC_SERVICE_ID!,
        process.env.NEXT_PUBLIC_TEMPLATE_ID!,
        form.current!,
        {
          publicKey: process.env.NEXT_PUBLIC_PUBLIC_KEY,
        }
      );

      console.log("SUCCESS!", result);
      form.current?.reset();
      toast.success("Message sent successfully!");
    } catch (error) {
      console.log("FAILED...", error);
      toast.error("Failed to send message. Please try again.");
    } finally {
      setIsSending(false);
    }
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
                  Lebu Muzikzbet, Addis Ababa, Ethiopia
                </p>
              </div>
            </div>
          </div>
        </div>

        <form ref={form} onSubmit={handleSubmit}>
          <div className="flex flex-col px-5 bg-white w-100 rounded-xl">
            <div>
              <p className="text-2xl font-bold mb-3 pt-5">Send Us a Message</p>
            </div>

            <div>
              <div className=" flex flex-col  ">
                <label htmlFor="name">Your Name</label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  placeholder="e.g Bereket"
                  className="rounded-xl bg-white p-3 border-3     focus:border-green-600 "
                />
              </div>
              <div className=" flex flex-col  ">
                <label htmlFor="email">Email</label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  placeholder="Email"
                  className="rounded-xl bg-white p-3 border-3    focus:border-green-600 "
                />
              </div>
            </div>
            <div className=" flex flex-col  ">
              <label htmlFor="message">Your message</label>
              <textarea
                id="message"
                required
                name="message"
                placeholder="Write Your Message here"
                className="rounded-xl bg-white p-3 border-3    focus:border-green-600 "
              />
            </div>
            <div className="bg-green-700 text-white rounded-full p-3  my-5 text-2xl hover:scale-102   text-center font-bold">
              <button
                type="submit"
                disabled={isSending}
                className="disabled:opacity-50 disabled:cursor-not-allowed "
              >
                {isSending ? "Sending..." : "Send Message"}
              </button>
            </div>
          </div>
        </form>
      </div>
    </section>
  );
}
