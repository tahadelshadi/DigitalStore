"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import { useAppSelector } from "@/redux/hooks";
import { totalCartItemsSelector } from "@/redux/cart/cartSlice";

import { CiHome, CiShoppingCart, CiUser } from "react-icons/ci";
import { usePathname } from "next/navigation";
import {
  SquaresPlusIcon,
  HomeIcon,
  ShoppingBagIcon,
  UserIcon,
} from "@heroicons/react/24/outline";
import {
  ShoppingBagIcon as ShoppingBagIconSolid,
  SquaresPlusIcon as SquaresPlusIconSolid,
  HomeIcon as HomeIconSolid,
  UserIcon as UserIconSolid,
} from "@heroicons/react/24/solid";

const MobileNavbar = () => {
  const qty = useAppSelector(totalCartItemsSelector);
  const [isClient, setIsClient] = useState(false);
  const currentPath = usePathname();
  const iconStyle = "h-6 w-6 mx-auto";
  useEffect(() => {
    setIsClient(true);
  }, []);

  return (
    <div className="z-50 min-w-60 bg-white shadow-inner xs:fixed xs:bottom-0 xs:left-0 xs:right-0 md:relative md:hidden md:max-w-60">
      <div className="nav-btn flex flex-row items-center justify-between gap-2 py-2 md:divide-x">
        <Link className="mx-auto hidden xs:block" href={"/"}>
          {currentPath == "/" ? (
            <HomeIconSolid className={iconStyle} />
          ) : (
            <HomeIcon className={iconStyle} />
          )}
          <p className="text-xs font-light">Home</p>
        </Link>
        {/* <ThemeSwitch /> */}
        <Link
          className=" mx-auto"
          href={"/category"}
          aria-label="User Profile Button">
          {currentPath == "/category" ? (
            <SquaresPlusIconSolid className={iconStyle} />
          ) : (
            <SquaresPlusIcon className={iconStyle} />
          )}
          <p className="text-xs font-light">Category</p>
        </Link>
        <Link
          className=" mx-auto"
          href="/cart"
          aria-label="Shopping Cart Button">
          {isClient && qty !== 0 && <p className="cart-badge">{qty}</p>}
          {currentPath == "/cart" ? (
            <ShoppingBagIconSolid className={iconStyle} />
          ) : (
            <ShoppingBagIcon className={iconStyle} />
          )}
          <p className="text-xs font-light">Cart</p>
        </Link>
        <Link
          className=" mx-auto"
          href={"/profile"}
          aria-label="User Profile Button">
          {currentPath == "/profile" ? (
            <UserIconSolid className={iconStyle} />
          ) : (
            <UserIcon className={iconStyle} />
          )}
          <p className="text-xs font-light">My Store</p>
        </Link>
      </div>
    </div>
  );
};
export default MobileNavbar;
