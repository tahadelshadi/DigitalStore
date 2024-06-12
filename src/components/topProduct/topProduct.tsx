import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ShopNow } from "../buttons/bottons";
import headphone from "../../../public/dist/pictures/products/headphone/headphone.png";

const TopProduct = () => {
  return (
    <div className="md:grid md:grid-cols-2 xs:text w-full lg:px-24 xs:px-8 bg-neutral-100  dark:bg-slate-800 mb-8 ">
      <div className="flex flex-col justify-center gap-8 py-12 pr-12">
        <div className="flex flex-row gap-2 items-center text-red-700">
          <FaStar size={20} />
          <p className="font-bold text-sm">Top Products Of The Month</p>
        </div>
        <p className="font-extrabold text-4xl">Micropack MHP Headphone Black</p>
        <p className="text-justify text-xs">
          The Miropack Headphone offers a stereo PC headset with volume control,
          a flexible mic arm, adjustable headband.
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
        />
      </div>
    </div>
  );
};

export default TopProduct;
