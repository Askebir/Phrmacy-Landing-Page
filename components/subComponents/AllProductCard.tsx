import Image from "next/image";
import { PhoneCall } from "lucide-react";
import { Button } from "../ui/button";

export default function AllProductCard({
  drug,
}: {
  drug: { name: string; image: string };
}) {
  return (
    <div className=" hover:shadow-[0_0_15px_#000000] shadow-lg transition-shadow duration-150  p-4 mx-7 my-3 bg-white  flex flex-col items-center justify-center rounded-lg w-70 ">
      <div className="  flex items-center justify-center  ">
        {/* bg-[#13141b] */}
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
        <p className="text-black">{drug.name}</p>
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
