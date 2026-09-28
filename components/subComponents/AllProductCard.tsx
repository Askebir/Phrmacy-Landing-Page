import Image from "next/image";
import { PhoneCall } from "lucide-react";

export default function AllProductCard({
  drug,
}: {
  drug: { name: string; image: string };
}) {
  return (
    <div className=" p-2 m-10 bg-[#969090] flex flex-col items-center justify-center ">
      <div className="flex items-center justify-center">
        <Image
          src={drug.image}
          alt={drug.name}
          width={300}
          height={300}
          className="object-contain h-80 w-60 hover:scale-102 "
        />
      </div>
      <div className="flex items-center justify-center font-bold mt-3">
        {drug.name}
      </div>
      <div className="flex gap-3">
        <PhoneCall />
        <a href="tel:+251911234567" className="bg-green-600">
          Call to Buy
        </a>
      </div>
    </div>
  );
}
