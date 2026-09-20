import Image from "next/image";

export default function ProductCard({
  ProductObj,
}: {
  ProductObj: {
    image: string;
    title: string;
    description: string;
  };
}) {
  return (
    <div className="  rounded-t-2xl ">
      <Image
        src={ProductObj.image}
        alt="product image"
        width={500}
        height={500}
        className="object-cover w-100 h-100 rounded-t-2xl "
      />
      <p className="text-3xl ">{ProductObj.title}</p>
      <p className="text-black ">{ProductObj.description}</p>
    </div>
  );
}
