import { GrPowerCycle } from "react-icons/gr";
import { IoShieldOutline } from "react-icons/io5";
import {
  MdOutlineLocalShipping,
  MdPayment,
  MdSupportAgent,
} from "react-icons/md";

const ProductSupport = () => {
  return (
    <div className="flex flex-row gap-5 justify-between text-gray-600 border-y-1 p-5">
      <div className="gap-2 flex flex-row items-center">
        <IoShieldOutline className="w-5 h-5" />
        <p className="font-light text-sm">Guarantee of product authenticity</p>
      </div>
      <div className="gap-2 flex flex-row items-center">
        <MdSupportAgent className="w-5 h-5" />
        <p className="font-light text-sm">Online support</p>
      </div>
      <div className="gap-2 flex flex-row items-center">
        <MdPayment className="w-5 h-5" />
        <p className="font-light text-sm">Secure payment</p>
      </div>
      <div className="gap-2 flex flex-row items-center">
        <MdOutlineLocalShipping className="w-5 h-5" />
        <p className="font-light text-sm">Free Shipping</p>
      </div>
      <div className="gap-2 flex flex-row items-center">
        <GrPowerCycle className="w-5 h-5" />
        <p className="font-light text-sm">The possibility of returning goods</p>
      </div>
    </div>
  );
};

export default ProductSupport;
