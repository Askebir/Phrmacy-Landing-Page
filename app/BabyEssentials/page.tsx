import AllProductCard from "@/components/subComponents/AllProductCard";
import ProductNavigation from "@/components/subComponents/ProductNavigation";

const BabyEssentialsObj = [
  {
    title: "A. Diapers",
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
    title: "B. Baby Hygiene",
    drug: [
      {
        name: "Baby wipes",
        image: "/image/Baby Essentials/Baby wipes.jpg",
      },
      {
        name: "Baby soap",
        image: "/image/Baby Essentials/Baby soap.jpg",
      },
      // {
      //   name: "Baby shampoo",
      //   image: "/image/Baby Essentials/Baby shampoo.jpg",
      // },

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
    title: "C. Baby Feeding",
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
    title: "D. Baby Skincare",
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
    title: "E. Baby Health",
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
    title: "F. Infant Nutrition",
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
];

export default function page() {
  return (
    <div>
      <div className=" flex flex-wrap items-center justify-center mx-auto pb-40 bg-[#dfdfdf] ">
        <div className="relative -top-10  ">
          <div className="  z-50 sticky top-18 left-100 flex items-center justify-center   ">
            <ProductNavigation />
          </div>
          {BabyEssentialsObj.map((category) => {
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
