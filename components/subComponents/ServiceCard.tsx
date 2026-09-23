import Image from "next/image";

export default function ServiceCard({
  serviceCardObj,
}: {
  serviceCardObj: { image: string; title: string; description: string };
}) {
  return (
    <div className="    p-2 w-75  bg-white rounded-xl shadow-2xl mb-5  ">
      <div className="h-16 w-16 bg-red-500 items-center justify-center rounded-full ">
        <Image
          src={serviceCardObj.image}
          alt="Service image"
          width={100}
          height={100}
          className="h-16 w-16 rounded-full"
        />
      </div>
      <div>
        <p className="font-bold  ">{serviceCardObj.title}</p>
      </div>
      <div className="text-black/65">{serviceCardObj.description}</div>
    </div>
  );
}
