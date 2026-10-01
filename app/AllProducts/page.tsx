import AllProductCard from "@/components/subComponents/AllProductCard";
import ProductNavigation from "@/components/subComponents/ProductNavigation";

const AllProductObj = [
  {
    title: "A. Pharmacy Essentials",

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
        name: "Omeprazole",
        image: "/image/Medicines/Omeprazole.jpg",
      },
      {
        name: "Condoms",
        image: "/image/Personal Care/Condoms.jpg",
      },
    ],
  },
  {
    title: "B. Commenly Needed",
    drug: [
      {
        name: "Oral rehydration salts(ORS)",
        image: "/image/Medicines/Oral rehydration salts(ORS).jpg",
      },
      {
        name: "Amoxicillin",
        image: "/image/Medicines/Amoxicillin.jpeg",
      },
      {
        name: "Multivitamins",
        image: "/image/Medicines/Multivitamins.jpg",
      },
      {
        name: "Metformin",
        image: "/image/Medicines/Metformin.jpg",
      },
    ],
  },
  {
    title: "C. Diapers",
    drug: [
      {
        name: "Newborn diapers",
        image: "/image/Baby Essentials/Newborn diapers.jpg",
      },
      {
        name: "Baby diapers",
        image: "/image/Baby Essentials/Baby diapers.jpeg",
      },
      {
        name: "Different size diapers",
        image: "/image/Baby Essentials/Different size diapers.jpg",
      },

      {
        name: " Overnight diapers",
        image: "/image/Baby Essentials/Overnight diapers.jpeg",
      },
    ],
  },
  {
    title: "D. Face Care",
    drug: [
      {
        name: "Facial cleanser",
        image: "/image/cosmetics/Facial cleanser.jpeg",
      },
      {
        name: "Moisturizer",
        image: "/image/cosmetics/Moisturizer.jpg",
      },

      {
        name: "Toner",
        image: "/image/cosmetics/Toner.jpg",
      },
      {
        name: "Face mask",
        image: "/image/cosmetics/Face mask.jpg",
      },
    ],
  },
  {
    title: "E. Cough, Cold & Allergy",
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
    title: "F. Oral Care",
    drug: [
      {
        name: "Toothbrush",
        image: "/image/Personal Care/Toothbrush.jpg",
      },
      {
        name: "Toothpaste",
        image: "/image/Personal Care/Toothpaste.jpg",
      },
      {
        name: "Mouthwash",
        image: "/image/Personal Care/Mouthwash.jpg",
      },
      {
        name: "Dental floss",
        image: "/image/Personal Care/Dental floss.jpg",
      },
    ],
  },
  {
    title: "G. Baby Hygiene",
    drug: [
      {
        name: "Baby wipes",
        image: "/image/Baby Essentials/Baby wipes.jpg",
      },
      {
        name: "Baby soap",
        image: "/image/Baby Essentials/Baby soap.jpg",
      },
      //   {
      //     name: "Baby shampoo",
      //     image: "/image/Baby Essentials/Baby shampoo.jpg",
      //   },

      {
        name: "Baby lotion",
        image: "/image/Baby Essentials/Baby lotion.jpg",
      },
      {
        name: "Baby powder",
        image: "/image/Baby Essentials/Baby powder.jpg",
      },
    ],
  },
  {
    title: "H. Acne Care",
    drug: [
      {
        name: "Acne cleanser",
        image: "/image/cosmetics/Acne cleanser.jpg",
      },
      {
        name: "Acne gel",
        image: "/image/cosmetics/Acne gel.jpg",
      },
      {
        name: "Spot treatment",
        image: "/image/cosmetics/Spot treatment.jpg",
      },
      {
        name: "Oil-control moisturizer",
        image: "/image/cosmetics/Oil-control moisturizer.jpg",
      },
    ],
  },
  {
    title: "I. Digestive Health",
    drug: [
      {
        name: "Omeprazole",
        image: "/image/Medicines/Omeprazole.jpg",
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
    title: "J. Bath & Body",
    drug: [
      {
        name: "Body wash",
        image: "/image/Personal Care/Body wash.jpg",
      },
      {
        name: "Bath soap",
        image: "/image/Personal Care/Bath soap.jpg",
      },

      {
        name: "Body scrub",
        image: "/image/Personal Care/Body scrub.jpg",
      },
      {
        name: "Body lotion",
        image: "/image/Personal Care/Body lotion.jpg",
      },
    ],
  },
  {
    title: "K. Baby Feeding",
    drug: [
      {
        name: "Feeding bottles",
        image: "/image/Baby Essentials/Feeding bottles.jpg",
      },
      {
        name: "Baby bottle nipples",
        image: "/image/Baby Essentials/Baby bottle nipples.jpg",
      },
      {
        name: "Bibs",
        image: "/image/Baby Essentials/Bibs.jpg",
      },
      {
        name: "Bottle brushes",
        image: "/image/Baby Essentials/Bottle brushes.jpg",
      },
    ],
  },
  {
    title: "L. Sunscreen",
    drug: [
      {
        name: "SPF 30 sunscreen",
        image: "/image/cosmetics/SPF 30 sunscreen.jpg",
      },
      {
        name: "SPF 50 sunscreen",
        image: "/image/cosmetics/SPF 50 sunscreen.jpg",
      },
      {
        name: "Facial sunscreen",
        image: "/image/cosmetics/Facial sunscreen.jpg",
      },
      {
        name: "Body sunscreen",
        image: "/image/cosmetics/Body sunscreen.jpg",
      },
    ],
  },
  {
    title: " M. Antibiotics & Anti-infectives",
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
    title: "N. Deodorants",
    drug: [
      {
        name: "Roll-on",
        image: "/image/Personal Care/Roll-on.jpg",
      },
      {
        name: "Spray deodorant",
        image: "/image/Personal Care/Spray deodorant.jpg",
      },
      {
        name: "Antiperspirant",
        image: "/image/Personal Care/Antiperspirant.jpg",
      },
      {
        name: "Body Spray",
        image: "/image/Personal Care/Body Spray.jpeg",
      },
    ],
  },
  {
    title: "O. Baby Skincare",
    drug: [
      {
        name: "Diaper rash cream",
        image: "/image/Baby Essentials/Diaper rash cream.jpg",
      },
      {
        name: "Baby moisturizer",
        image: "/image/Baby Essentials/Baby moisturizer.jpg",
      },
      {
        name: "Baby oil",
        image: "/image/Baby Essentials/Baby oil.jpg",
      },
      {
        name: "Gentle cleansing products",
        image: "/image/Baby Essentials/Gentle cleansing products.jpg",
      },
    ],
  },
  {
    title: "P. Body Care",
    drug: [
      {
        name: "Body lotion",
        image: "/image/cosmetics/Body lotion.jpg",
      },
      {
        name: "Body cream",
        image: "/image/cosmetics/Body cream.jpg",
      },
      {
        name: "Body oil",
        image: "/image/cosmetics/Body oil.jpg",
      },
      {
        name: "Hand cream",
        image: "/image/cosmetics/Hand cream.jpg",
      },
    ],
  },
  {
    title: "Q. Chronic Disease Medicines",
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
    title: "R. Feminine Care",
    drug: [
      {
        name: "Sanitary pads",
        image: "/image/Personal Care/Sanitary pads.jpg",
      },
      {
        name: "Panty liners",
        image: "/image/Personal Care/Panty liners.jpg",
      },

      {
        name: "Feminine wash",
        image: "/image/Personal Care/Feminine wash.jpg",
      },

      {
        name: "Menstrual cups",
        image: "/image/Personal Care/Menstrual cups.jpeg",
      },
    ],
  },
  {
    title: "S. Baby Health",
    drug: [
      {
        name: "Digital thermometer",
        image: "/image/Baby Essentials/Digital thermometer.jpg",
      },
      {
        name: "Nasal aspirator",
        image: "/image/Baby Essentials/Nasal aspirator.jpg",
      },
      {
        name: " Baby oral-care products",
        image: "/image/Baby Essentials/Baby oral-care products.jpg",
      },
      {
        name: "Baby medicine spoon",
        image: "/image/Baby Essentials/Baby Medicine Spoon.jpg",
      },
    ],
  },
  {
    title: "T. Hair Care",
    drug: [
      {
        name: "Shampoo",
        image: "/image/cosmetics/Shampoo.jpg",
      },
      {
        name: "Conditioner",
        image: "/image/cosmetics/Conditioner.jpg",
      },
      {
        name: "Hair oil",
        image: "/image/cosmetics/Hair oil.jpg",
      },

      {
        name: "Anti-dandruff shampoo",
        image: "/image/cosmetics/Anti-dandruff shampoo.jpg",
      },
    ],
  },
  {
    title: "U. Vitamins & Supplements",
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
    title: "V. Men's Care",
    drug: [
      {
        name: "Shaving cream",
        image: "/image/Personal Care/Shaving cream.jpg",
      },
      {
        name: "Razors",
        image: "/image/Personal Care/Razors.jpg",
      },
      {
        name: "Aftershave",
        image: "/image/Personal Care/Aftershave.jpg",
      },
      {
        name: "Men's deodorant",
        image: "/image/Personal Care/Men's deodorant.jpg",
      },
    ],
  },
  {
    title: "W. Infant Nutrition",
    drug: [
      {
        name: "Infant formula",
        image: "/image/Baby Essentials/Infant formula.jpg",
      },
      {
        name: "Faffa baby food",
        image: "/image/Baby Essentials/Faffa baby food.jpeg",
      },

      {
        name: " Baby cereal",
        image: "/image/Baby Essentials/Baby cereal.jpg",
      },
      {
        name: "Infant  milk powder.jpeg",
        image: "/image/Baby Essentials/Infant  milk powder.jpeg",
      },
    ],
  },
  {
    title: "X. Beauty & Makeup",
    drug: [
      // {
      //   name: "Lip balm",
      //   image: "/image/cosmetics/Lip balm.jpg",
      // },
      {
        name: "Lipstick",
        image: "/image/cosmetics/Lipstick.jpg",
      },
      {
        name: "Foundation",
        image: "/image/cosmetics/Foundation.jpg",
      },
      {
        name: "Mascara",
        image: "/image/cosmetics/Mascara.jpg",
      },
      {
        name: "Makeup remover",
        image: "/image/cosmetics/Makeup remover.jpg",
      },
    ],
  },
  {
    title: "Y. Sexual & Reproductive Care",
    drug: [
      {
        name: "Condoms",
        image: "/image/Personal Care/Condoms.jpg",
      },
      {
        name: "Pregnancy tests",
        image: "/image/Personal Care/Pregnancy tests.jpg",
      },
      {
        name: "Lubricants",
        image: "/image/Personal Care/Lubricants.jpg",
      },

      {
        name: "Vaginal moisturizers",
        image: "/image/Personal Care/Vaginal moisturizers.jpg",
      },
    ],
  },

  {
    title: "Z. Hygiene",
    drug: [
      {
        name: "Hand sanitizer",
        image: "/image/Personal Care/Hand sanitizer.jpg",
      },
      // {
      //   name: "Wet wipes",
      //   image: "/image/Personal Care/Wet wipes.jpg",
      // },
      {
        name: "Cotton swabs",
        image: "/image/Personal Care/Cotton swabs.jpg",
      },
      //   {
      //     name: "Facial tissues",
      //     image: "/image/Personal Care/Facial tissues.jpg",
      //   },
      {
        name: "Hand soap",
        image: "/image/Personal Care/Hand soap.jpeg",
      },
      {
        name: "Paper towels",
        image: "/image/Personal Care/Paper towels.jpeg",
      },
    ],
  },
  {
    title: "ZZ. First Aid & Medical Supplies",
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
];

export default function Consmotics() {
  return (
    <div>
      <div className=" flex flex-wrap items-center justify-center mx-auto pb-40 bg-[#dfdfdf] ">
        <div className="relative -top-10  ">
          <div className="  z-50 sticky top-18 left-100 flex items-center justify-center   ">
            <ProductNavigation />
          </div>
          {AllProductObj.map((category) => {
            return (
              <div key={category.title} className="flex flex-col">
                <div className="border-2 border-blue-800  mt-3 mb-1  bg-blue-300 w-max rounded-full px-3  flex items-center justify-center ">
                  <p className="text-center font-bold text-xl py-1 ">
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
