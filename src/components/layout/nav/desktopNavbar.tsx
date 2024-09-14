import { totalCartItemsSelector } from "@/redux/cart/cartSlice";
import { useAppSelector } from "@/redux/hooks";
import Link from "next/link";
import { useEffect, useState } from "react";
import { CiShoppingCart, CiUser } from "react-icons/ci";

const DesktopNavbar = () => {
  const qty = useAppSelector(totalCartItemsSelector);
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
  }, []);
  return (
    <div className="xs:hidden md:flex flex-row gap-2 justify-center items-center divide-x">
      <Link href={"/profile"} aria-label="User Profile Button">
        <CiUser size={25} />
      </Link>
      <Link className="relative pl-2" href="/cart" aria-label="Shopping Cart Button">
        {isClient && qty !== 0 && <p className="cart-badge">{qty}</p>}
        <CiShoppingCart size={25} />
      </Link>
    </div>
    
  );
};

export default DesktopNavbar;
