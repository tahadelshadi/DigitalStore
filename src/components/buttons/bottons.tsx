import Link from "next/link";
import { Button } from "../buttons/button";
import { BsArrowRightShort } from "react-icons/bs";

export const ViewAllProducts = () => {
  return (
    <Link aria-label="View All Products" href={"/products/headphone"}>
      <Button
        className="flex flex-row gap-2 w-fit justify-center items-center text-sm text-white"
        variant="blue">
        <p>View All Products</p>
        <BsArrowRightShort size={20} />
      </Button>
    </Link>
  );
};
export const ShopNow = () => {
  return (
    <Link aria-label="Shop Now" href={"/products"}>
      <Button
        className="flex flex-row gap-2 w-fit justify-center items-center text-sm text-white"
        variant="blue">
        <p>Shop Now</p>
        <BsArrowRightShort size={20} />
      </Button>
    </Link>
  );
};
