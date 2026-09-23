import About from "@/components/home/About";
import Contact from "@/components/home/Contact";
import CustomerFeedback from "@/components/home/CustomerFeedback";
import FindUs from "@/components/home/FindUs";
import Footer from "@/components/home/Footer";
import Hero from "@/components/home/Hero";
import Products from "@/components/home/Products";
import Services from "@/components/home/Services";
import WhyUs from "@/components/home/whyUs";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center bg-zinc-50 font-sans dark:bg-black">
      <Hero />
      <Products />
      <Services />
      <About />
      <WhyUs />
      <FindUs />
      <Contact />
    </div>
  );
}
