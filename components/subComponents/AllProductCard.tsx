import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

export default function AllProductCard({
  drug,
}: {
  drug: { name: string; image: string };
}) {
  return (
    <div className=" p-4 mx-7 my-3 bg-[#13141b] flex flex-col items-center justify-center rounded-2xl w-70 ">
      <div className="flex items-center justify-center  ">
        <Image
          src={drug.image}
          alt={drug.name}
          width={500}
          height={500}
          className="object-contain h-45 w-70 hover:scale-103 rounded-2xl  bg-white "
        />
        {/* bg-[#cfcdcd]  */}
      </div>
      <div className="flex items-center justify-center font-bold text-3xl my-1 text-center ">
        <p className="text-white">{drug.name}</p>
      </div>

      <Button className="flex bg-green-700 px-5 py-4 rounded-x items-center justify-start gap-4 w-60  hover:bg-green-500 text-xl  font-bold    ">
        <PhoneCall />
        <a href="tel:+251911234567" className="">
          Call to Buy
        </a>
      </Button>
    </div>
  );
}
