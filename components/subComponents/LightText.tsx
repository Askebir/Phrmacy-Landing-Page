export default function LightText({ text }: { text: string }) {
  return (
    <div className="bg-[#beeccc] w-max  rounded-full mb-4">
      <p className="text-[#00aa00] py-1  px-3">{text}</p>
    </div>
  );
}
