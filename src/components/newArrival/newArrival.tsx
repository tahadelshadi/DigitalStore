import Image from "next/image";
import { ShopNow, ViewAllProducts } from "../buttons/bottons";
import s24 from "../../../public/dist/pictures/products/phone/Samsung-Galaxy-S24-Ultra-Violet.png";
import Link from "next/link";

const NewArrival = () => {
  return (
    <section id="newArrivals">
      <div className="flex flex-row justify-between mb-6">
        <h1 className="title">New Arrivals</h1>
        <ViewAllProducts />
      </div>

      <div className="grid md:grid-rows-3 md:grid-flow-col  gap-4">
        <div className="md:row-span-3 xs:col-span-4 flex flex-col justify-between gap-4 bg-neutral-100 dark:bg-gray-700 px-6 pt-6">
          <div className="flex flex-col gap-6">
            <h1 className="text-2xl font-bold">
              Samsung Galaxy S24 <br /> Ultra 5G
            </h1>
            <ShopNow />
          </div>
          <Image
            className="self-end"
            src={s24}
            width={400}
            height={0}
            alt="s24 ultra"
            style={{ objectFit: "contain", aspectRatio: 1 }}
            loading="lazy"
          />
        </div>
        {Array(3)
          .fill(0)
          .map((x, idx) => (
            <Link
              className="col-span-4 flex flex-row border border-gray-200 dark:border-none dark:bg-gray-700 p-4  gap-8"
              href={"/"}
              key={idx}>
              <div className="items-center border border-gray-200 dark:border-none">
                <Image
                  className=""
                  src={s24}
                  width={150}
                  height={100}
                  alt="s24 ultra"
                  style={{ objectFit: "contain", aspectRatio: 1 }}
                  loading="lazy"
                />
              </div>
              <p className="font-semibold">Samsung Galaxy S24 Ultra 5G</p>
            </Link>
          ))}
      </div>
    </section>
  );
};

export default NewArrival;
