import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";

const CustomerSupport = () => {
  return (
    <div className="flex lg:flex-row flex-col bg-neutral-100  dark:bg-slate-800 p-32 gap-6 mx-auto">
      <div className="flex flex-col  p-5 text-center bg-neutral-100  dark:bg-slate-700 gap-4 ">
        <LiaShippingFastSolid className="self-center text-blue-700" size={40} />
        <h1>Free Shipping</h1>
        <p>
          Our free shipping policy applies to alll orders,regardless pf order
          value or destination.
        </p>
      </div>
      <div className="flex flex-col p-5 text-center gap-4 bg-neutral-100  dark:bg-slate-700">
        <MdOutlinePayment className="self-center text-blue-700" size={40} />
        <h1>Secure Payments</h1>
        <p>Your payments is always safe, secure, and protected at all times.</p>
      </div>
      <div className="flex flex-col p-5 text-center gap-4 bg-neutral-100  dark:bg-slate-700">
        <RiCustomerService2Fill
          className="self-center text-blue-700"
          size={40}
        />
        <h1>Support Online 24/7</h1>
        <p>
          We are available 24/7 to assist you with any questions, or issues you
          may have.
        </p>
      </div>
    </div>
  );
};

export default CustomerSupport;
