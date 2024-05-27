"use client";
import { CiMenuBurger, CiSearch, CiShoppingCart, CiUser } from "react-icons/ci";
import ThemeSwitch from "../theme/index";
import Link from "next/link";
import { hamburgerMenu } from "@/utils/hamburgerMenu";
const Navbar = () => {
  return (
    <nav className="py-6 bg-white dark:bg-slate-800">
      <div className="flex flex-row px-8 justify-between text-center max-w-[1644px] mx-auto">
        <div className="nav-logo font-bold text-2xl">
          <Link className="" href={"/"}>LOGO</Link>
        </div>
        <div className="self-center">
          <ul className=" nav-menu flex  gap-5 text-gray-500 dark:text-gray-300 ">
            <li className="nav-item">
              <Link href={"/"}>Home</Link>
            </li>
            <li className="nav-item">
              <Link href={"/category"}>Category</Link>
            </li>
            <li className="nav-item">
              <Link href={"/products"}>Products</Link>
            </li>
            <li className="nav-item">
              <Link href={"/about"}>About Us</Link>
            </li>
          </ul>
        </div>
        <div className="flex flex-row gap-2 justify-center items-center">
          <CiSearch size={25} />
          <Link href={"/"} aria-label="Shopping Cart Button">
            <CiShoppingCart size={25} />
          </Link>
          <Link href={"/"} aria-label="User Profile Button">
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
      </div>
    </nav>
  );
};

export default Navbar;
