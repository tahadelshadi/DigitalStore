import Image from "next/image";
import { ShopNow } from "@/components/buttons/bottons";
import headphone from "../../../public/dist/pictures/products/headphone/headphone.png";
// Icon
import { FaStar } from "react-icons/fa";
import { LiaShippingFastSolid } from "react-icons/lia";
import { MdOutlinePayment } from "react-icons/md";
import { RiCustomerService2Fill } from "react-icons/ri";
import Category from "@/components/category/category";
import FeaturedProducts from "@/components/featuredProducts/featuredProducts";
import NewArrival from "@/components/newArrival/newArrival";

export default async function HomePage() {
  return (
    <div className="w-full max-w-[1644px] mx-auto">
      <div className="md:grid md:grid-cols-2 xs:text w-full lg:px-24 xs:px-8 bg-neutral-100  dark:bg-slate-800 mb-8 ">
        <div className="flex flex-col justify-center gap-8 py-12 pr-12">
          <div className="flex flex-row gap-2 items-center text-red-700">
            <FaStar size={20} />
            <p className="font-bold text-sm">Top Products Of The Month</p>
          </div>
          <p className="font-extrabold text-4xl">
            Micropack MHP Headphone Black
          </p>
          <p className="text-justify text-xs">
            The Miropack Headphone offers a stereo PC headset with volume
            control, a flexible mic arm, adjustable headband.
          </p>
          <ShopNow />
        </div>
        <div className="xs:hidden md:block flex items-center justify-center mx-auto">
          <Image
            src={headphone}
            width={500}
            height={500}
            alt="headphone"
            style={{ objectFit: "contain", aspectRatio: 1 }}
            priority
          />
        </div>
      </div>
      <Category />
      <FeaturedProducts />
      <NewArrival />
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
          <p>
            Your payments is always safe, secure, and protected at all times.
          </p>
        </div>
        <div className="flex flex-col p-5 text-center gap-4 bg-neutral-100  dark:bg-slate-700">
          <RiCustomerService2Fill className="self-center text-blue-700" size={40} />
          <h1>Support Online 24/7</h1>
          <p>
            We are available 24/7 to assist you with any questions, or issues
            you may have.
          </p>
        </div>
      </div>
    </div>
  );
}
