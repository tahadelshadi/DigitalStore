import Link from "next/link";
import { BsArrowRightShort } from "react-icons/bs";

export const ViewAllProducts = () => {
  return (
    <Link
      aria-label="View All Products"
      href={"/products"}
      className="gap-2 flex flex-row h-fit justify-center items-center bg-blue-700 px-5 py-2.5 rounded-md text-sm text-white">
      <span>View All Products</span>
      <BsArrowRightShort size={20} />
    </Link>
  );
};
export const ShopNow = () => {
  return (
    <Link
      aria-label="Shop Now"
      href={"/products"}
      className="gap-2 flex flex-row justify-center w-fit items-center bg-blue-700 px-5 py-2.5 rounded-md text-sm text-white">
      <p>Shop Now</p>
      <BsArrowRightShort size={20} />
    </Link>
  );
};
