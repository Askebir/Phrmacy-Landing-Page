export default function LightText({
  text,
  className,
}: {
  text: string;
  className?: string;
}) {
  return (
    <div
      className={`bg-[#beeccc] w-max  rounded-full mb-4 text-5xl py-1 font-bold ${className}`}
    >
      <p className="text-[#00aa00] py-1  px-10">{text}</p>
    </div>
  );
}
