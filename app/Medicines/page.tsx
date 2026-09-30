import AllProductCard from "@/components/subComponents/AllProductCard";
import ProductNavigation from "@/components/subComponents/ProductNavigation";
import { title } from "process";

const MedicinesObj = [
  //
  {
    title: "A. Pain & Fever",
    drug: [
      {
        name: "Paracetamol",
        image: "/image/Medicines/Paracetamol.jpg",
      },
      {
        name: "Ibuprofen",
        image: "/image/Medicines/Ibuprofen.jpg",
      },
      {
        name: "Diclofenac",
        image: "/image/Medicines/Diclofenac.jpg",
      },
      {
        name: "Asprin",
        image: "/image/Medicines/Aspirin.jpg",
      },
    ],
  },

  {
    title: "B. Cough, Cold & Allergy",
    drug: [
      {
        name: "Cough syrups",
        image: "/image/Medicines/Cough syrups.jpg",
      },
      {
        name: "Lozenges",
        image: "/image/Medicines/Lozenges.jpg",
      },

      {
        name: " Nasal sprays",
        image: "/image/Medicines/Nasal sprays.jpeg",
      },

      {
        name: "Decongestants",
        image: "/image/Medicines/Decongestants.jpeg",
      },
    ],
  },

  {
    title: "C. Digestive Health",
    drug: [
      {
        name: "Antacids",
        image: "/image/Medicines/Antacids.jpg",
      },
      {
        name: "Oral rehydration salts(ORS)",
        image: "/image/Medicines/Oral rehydration salts(ORS).jpg",
      },
      {
        name: "Laxatives",
        image: "/image/Medicines/Laxatives.jpg",
      },
      {
        name: "Anti-diarrheal products",
        image: "/image/Medicines/Anti-diarrheal products.jpg",
      },
    ],
  },

  {
    title: " D. Antibiotics & Anti-infectives",
    drug: [
      {
        name: "Amoxicillin",
        image: "/image/Medicines/Amoxicillin.jpeg",
      },
      {
        name: "Azithromycin",
        image: "/image/Medicines/Azithromycin.jpg",
      },
      {
        name: "Ciprofloxacin",
        image: "/image/Medicines/Ciprofloxacin.jpg",
      },
      {
        name: "Metronidazole",
        image: "/image/Medicines/Metronidazole.jpg",
      },
    ],
  },
  {
    title: "E. Chronic Disease Medicines",
    drug: [
      {
        name: "Metformin",
        image: "/image/Medicines/Metformin.jpg",
      },
      {
        name: "Amlodipine",
        image: "/image/Medicines/Amlodipine.jpg",
      },
      {
        name: "Losartan",
        image: "/image/Medicines/Losartan.jpg",
      },
      {
        name: "Atorvastatin",
        image: "/image/Medicines/Atorvastatin.jpg",
      },
      {
        name: "Insulin",
        image: "/image/Medicines/Insulin.jpg",
      },
    ],
  },
  {
    title: "F. Vitamins & Supplements",
    drug: [
      {
        name: "Multivitamins",
        image: "/image/Medicines/Multivitamins.jpg",
      },
      {
        name: "Vitamin C",
        image: "/image/Medicines/Vitamin C.jpg",
      },
      {
        name: "Iron supplements",
        image: "/image/Medicines/Iron supplements.jpg",
      },
      {
        name: "Calcium supplements",
        image: "/image/Medicines/Calcium supplementss.jpeg",
      },
    ],
  },
  {
    title: "G. First Aid & Medical Supplies",
    drug: [
      {
        name: "Bandages",
        image: "/image/Medicines/Bandages.jpg",
      },
      {
        name: "Cotton",
        image: "/image/Medicines/Cotton.jpg",
      },
      {
        name: "Gauze",
        image: "/image/Medicines/Gauze.jpg",
      },
      {
        name: "Antiseptic",
        image: "/image/Medicines/Antiseptic.jpg",
      },
      {
        name: "Digital thermometer",
        image: "/image/Medicines/Digital thermometer.jpg",
      },
      {
        name: "Disposable gloves",
        image: "/image/Medicines/Disposable gloves.jpg",
      },
    ],
  },

  //

  //

  //

  //

  //

  //
];

export default function Medicines() {
  return (
    <div>
      <div className="  flex flex-wrap items-center justify-center mx-auto pb-40 bg-[#dfdfdf] ">
        <div className="relative  ">
          <div className="  z-0 absolute top-1 left-100 flex items-center justify-center   ">
            <ProductNavigation />
          </div>
          {MedicinesObj.map((category) => {
            return (
              <div key={category.title} className="flex flex-col ">
                <div className="border-2 border-blue-800  bg-blue-300 w-max rounded-full px-3 mt-1 flex items-center justify-center ">
                  <p className="text-center font-bold text-xl pb-1 ">
                    {category.title}
                  </p>
                </div>
                <div className="grid grid-cols-4">
                  {category.drug.map((drug) => (
                    <AllProductCard drug={drug} key={drug.name} />
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}
