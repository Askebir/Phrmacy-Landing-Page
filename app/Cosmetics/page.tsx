import AllProductCard from "@/components/subComponents/AllProductCard";
import ProductNavigation from "@/components/subComponents/ProductNavigation";

const CosmoticsObj = [
  {
    title: "A. Face Care",
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
    title: "B. Acne Care",
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
    title: "C. Sunscreen",
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
    title: "D. Body Care",
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
    title: "E. Hair Care",
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
        name: "Hair treatment",
        image: "/image/cosmetics/Hair treatment.jpg",
      },
      {
        name: "Anti-dandruff shampoo",
        image: "/image/cosmetics/Anti-dandruff shampoo.jpg",
      },
    ],
  },
  {
    title: "F. Beauty & Makeup",
    drug: [
      {
        name: "Lip balm",
        image: "/image/cosmetics/Lip balm.jpg",
      },
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
];

export default function Consmotics() {
  return (
    <div>
      <div className=" flex flex-wrap items-center justify-center mx-auto pb-40 bg-[#dfdfdf] ">
        <div className="relative  ">
          <div className="  z-0 absolute top-1 left-100 flex items-center justify-center   ">
            <ProductNavigation />
          </div>
          {CosmoticsObj.map((category) => {
            return (
              <div key={category.title} className="flex flex-col">
                <div className="border-2 border-blue-800  bg-blue-300 w-max rounded-full px-3 mt-1 flex items-center justify-center ">
                  <p className="text-center font-bold text-xl ">
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
