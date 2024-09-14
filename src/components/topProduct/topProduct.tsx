import Image from "next/image";
import { FaStar } from "react-icons/fa";
import { ShopNow } from "../buttons/bottons";
import headphone from "../../../public/dist/pictures/products/headphone/headphone.png";

const TopProduct = () => {
  return (
    <section className="xs:text -mt-5 mb-8 w-full bg-neutral-100 dark:bg-slate-800 md:grid  md:grid-cols-2 lg:px-24 ">
      <div className="flex flex-col justify-center gap-8 py-12 pr-12">
        <div className="flex flex-row items-center gap-2 text-red-700">
          <FaStar size={20} />
          <p className="text-sm font-bold">Top Products Of The Month</p>
        </div>
        <p className="text-4xl font-extrabold">Micropack MHP Headphone Black</p>
        <p className="text-justify text-xs">
          The Miropack Headphone offers a stereo PC headset with volume control,
          a flexible mic arm, adjustable headband.
        </p>
        <ShopNow />
      </div>
      <div className="mx-auto flex items-center justify-center xs:hidden md:block">
        <Image
          src={headphone}
          width={500}
          height={500}
          alt="headphone"
          style={{ objectFit: "contain", aspectRatio: 1 }}
          priority
        />
      </div>
    </section>
  );
};

export default TopProduct;
