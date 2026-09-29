import AllProductCard from "@/components/subComponents/AllProductCard";

const PersonalCareObj = [
  {
    title: "A. Oral Care",
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
    title: "B. Bath & Body",
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
    title: "C. Deodorants",
    drug: [
      {
        name: "Roll-on",
        image: "/image/Personal Care/.jpg",
      },
      {
        name: "Spray deodorant",
        image: "/image/Personal Care/Spray deodorant.jpg",
      },
      {
        name: "Antiperspirant",
        image: "/image/Personal Care/Antiperspirant.jpg",
      },
    ],
  },
  {
    title: "D. Feminine Care",
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
    ],
  },
  {
    title: "E. Men's Care",
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
    title: "F. Hygiene",
    drug: [
      {
        name: "Hand sanitizer",
        image: "/image/Personal Care/Hand sanitizer.jpg",
      },
      {
        name: "Wet wipes",
        image: "/image/Personal Care/Wet wipes.jpg",
      },
      {
        name: "Cotton swabs",
        image: "/image/Personal Care/Cotton swabs.jpg",
      },
      {
        name: "Facial tissues",
        image: "/image/Personal Care/Facial tissues.jpg",
      },
      {
        name: "Hand soap",
        image: "/image/Personal Care/Hand soap.jpeg",
      },
    ],
  },
  {
    title: "G. Sexual & Reproductive Care",
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
    ],
  },
];

export default function PersonalCare() {
  return (
    <div>
      <div className=" flex flex-wrap items-center justify-center mx-auto pb-40 bg-[#dfdfdf] ">
        {PersonalCareObj.map((category) => {
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
  );
}
