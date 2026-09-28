import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

export default function AllProductCard({
  drug,
}: {
  drug: { name: string; image: string };
}) {
  return (
    <div className=" p-4 m-7 bg-[#cfcdcd] flex flex-col items-center justify-center rounded-3xl w-70 ">
      <div className="flex items-center justify-center  ">
        <Image
          src={drug.image}
          alt={drug.name}
          width={500}
          height={500}
          className="object-contain h-40 w-40 hover:scale-103 rounded-3xl border-2 border-red-500 "
        />
      </div>
      <div className="flex items-center justify-center font-bold text-3xl my-2  ">
        {drug.name}
      </div>

      <Button className="flex bg-green-500 px-5 py-4 rounded-2xl items-center justify-between w-[85%]  hover:bg-green-600 text-xl  font-bold mb-2  ">
        <PhoneCall />
        <a href="tel:+251911234567" className="">
          Call to Buy
        </a>
      </Button>
    </div>
  );
}
