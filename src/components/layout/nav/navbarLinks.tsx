import { usePathname } from "next/navigation";
import CategoryDropdownMenu from "../../category/categoryDropdownMenu";
import Link from "next/link";
import { CiDiscount1 } from "react-icons/ci";
import { PercentBadgeIcon } from "@heroicons/react/24/outline";

const NavbarLinks = () => {
  const currentPath = usePathname();
  return (
    <div className="flex justify-start gap-2 divide-x-2 text-sm text-gray-500 dark:text-gray-300 xs:hidden md:flex md:flex-row">
      <CategoryDropdownMenu />
        <Link
          className={`${currentPath == "/about" ? "text-blue-500" : ""} flex flex-row items-center gap-1 pl-2`}
          href={"/about"}>
          <PercentBadgeIcon className="w-5 h-5 " />
          Discounts
        </Link>
      <div className="flex flex-row">
        <Link
          className={`${currentPath == "/about" ? "text-blue-500" : ""} px-2`}
          href={"/about"}>
          About Us
        </Link>
        <Link
          className={`${currentPath == "/about" ? "text-blue-500" : ""} px-2`}
          href={"/about"}>
          Have Question?
        </Link>
      </div>
    </div>
  );
};

export default NavbarLinks;
