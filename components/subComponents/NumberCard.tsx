export default function NumberCard({
  number,
  text,
}: {
  number: string;
  text: string;
}) {
  return (
    <div className=" w-full   ">
      <p className="text-2xl font-bold text-green-600">{number}</p>
      <p className="text-black/60">{text}</p>
    </div>
  );
}
