"use client";
import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";

import ThemeSwitch from "@/components/theme/index";
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemsSelector } from "@/redux/cart/cartSlice";
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import { hamburgerMenu } from "@/utils/hamburgerMenu";

const Navbar = () => {
  const currentPath = usePathname();
  const qty = useAppSelector(totalCartItemsSelector);
  const activeLink = "text-blue-500";
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <nav className="py-6 mb-5 bg-white dark:bg-slate-800">
      <div className="flex flex-row px-8 justify-between text-center max-w-[1644px] mx-auto">
        <div className="nav-logo font-bold text-2xl">
          <Link className="" href={"/"}>
            LOGO
          </Link>
        </div>
        <div className="self-center">
          <ul className="nav-menu flex  gap-5 text-gray-500 dark:text-gray-300">
            <li className="xs:my-2.5 md:my-0">
              <Link className={currentPath == "/" ? activeLink : ""} href={"/"}>
                Home
              </Link>
            </li>
            <li className="xs:my-2.5 md:my-0">
              <Link
                className={currentPath == "/category" ? activeLink : ""}
                href={"/category"}>
                Category
              </Link>
            </li>
            <li className="xs:my-2.5 md:my-0">
              <Link
                className={currentPath == "/products" ? activeLink : ""}
                href={"/products"}>
                Products
              </Link>
            </li>
            <li className="xs:my-2.5 md:my-0">
              <Link
                className={currentPath == "/about" ? activeLink : ""}
                href={"/about"}>
                About Us
              </Link>
            </li>
          </ul>
        </div>
        <div className="nav-btn flex flex-row gap-2 justify-center items-center divide-x">
          <div className="flex flex-row gap-2">
            <CiSearch size={25} />
            <Link href={"/profile"} aria-label="User Profile Button">
              <CiUser size={25} />
            </Link>
            <ThemeSwitch />
            <CiMenuBurger
              aria-label="Hamburger Menu button"
              size={25}
              className="hamburger md:hidden select-none"
              onClick={hamburgerMenu}
            />
          </div>
          <div className="relative pl-2">
            <Link href="/cart" aria-label="Shopping Cart Button">
              {isClient && qty !== 0 && <p className="cart-badge">{qty}</p>}
              <CiShoppingCart size={25} />
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
