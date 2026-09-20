import Image from "next/image";
import LightText from "../subComponents/LightText";
import NumberCard from "../subComponents/NumberCard";

const NumberValues = [
  {
    number: "15+",
    text: "Years of Experience",
  },
  {
    number: "10,000+",
    text: "Customers Served",
  },
  {
    number: "10+",
    text: "Professional Services",
  },
  {
    number: "200+",
    text: "Product Categories",
  },
];

export default function About() {
  return (
    <section id="about" className="flex mt-7  mx-15 ">
      <div className="w-1/2 flex justify-center items-center ">
        <Image
          src="/image/hero/pharmacist3.jpg"
          alt="Pharmacist"
          width={600}
          height={400}
          className="object-cover rounded-2xl"
        />
      </div>
      <div className="flex flex-col w-1/2 ">
        <div className="flex justify-center pb-4 ">
          <LightText text="ABOUT OUT PHARMACY" />
        </div>
        <div>
          <p className=" text-5xl mb-6 font-bold">
            Professional Care You Can Trust
          </p>
          <p className="mb-5 text-black/60 ">
            GreenLeaf Pharmacy has been serving our community for over a decade.
            We are dedicated to providing quality medicines and personalized
            healthcare services to every customer who walks through our door.
          </p>
          <p className=" text-black/60">
            {" "}
            Our team of licensed pharmacists is always available to answer your
            questions, help with prescriptions, and guide you toward better
            health choices for you and your family.
          </p>
        </div>
        <div className="flex flex-wrap">
          {NumberValues.map((num) => {
            return (
              <div
                key={num.text}
                className="m-3  bg-[#abfdaf] rounded-2xl  border p-5 pr-20"
              >
                <NumberCard number={num.number} text={num.text} />
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
