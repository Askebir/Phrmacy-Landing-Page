"use client";
import Link from "next/link";
import { usePathname } from "next/navigation";

// export default function NavigationWrapper({
//   children,
// }: {
//   children: React.ReactNode;
// }) {
//   const [activeLink, setActiveLink] = useState("home");
//   return (
//     <>
//       <Navbar activeLink={activeLink} setActiveLink={setActiveLink} />
//       {children}
//       <Footer activeLink={activeLink} setActiveLink={setActiveLink} />
//     </>
//   );
// }

export default function ProductNavigation() {
  const pathname = usePathname();
  console.log("pathname", pathname);

  return (
    <div className=" flex items-center justify-center   ">
      <div className="flex items-center justify-center gap-10 shadow-xl w-max px-7 py-2 rounded-4xl  bg-[#eaeee9] border border-black/20 ">
        <Link
          href="/AllProducts"
          className={`border-b-2 ${
            pathname === "/AllProducts"
              ? "text-blue-600 border-blue-600"
              : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          All Products
        </Link>
        <Link
          href="/Medicines"
          className={`border-b-2 ${
            pathname === "/Medicines"
              ? "text-blue-600 border-blue-600"
              : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          Medicines
        </Link>
        <Link
          href="/Cosmetics"
          className={`border-b-2 ${
            pathname === "/Cosmetics"
              ? "text-blue-600 border-blue-600"
              : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          Cosmetics
        </Link>
        <Link
          href="/BabyEssentials"
          className={`border-b-2 ${
            pathname === "/BabyEssentials"
              ? "text-blue-600 border-blue-600"
              : "text-gray-700 border-transparent hover:text-blue-600 hover:border-blue-600"
          }`}
        >
          Baby Essentials
        </Link>
        <Link
          href="/PersonalCare"
          className={`border-b-2 ${pathname === "/PersonalCare" ? "text-blue-600 border-blue-600" : "border-transparent hover:text-blue-600 hover:border-blue-600 text-gray-700  "}`}
        >
          Persona Care
        </Link>
      </div>
    </div>
  );
}
