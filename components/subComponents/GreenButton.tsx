import { Button } from "../ui/button";

export default function GreenButton({ text }: { text: string }) {
  return (
    <div>
      <Button className={`rounded-full  bg-green-600 p-4`}>{text}</Button>
    </div>
  );
}
