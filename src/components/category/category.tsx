import Image from "next/image";
import Link from "next/link";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { slideLeft, slideRight } from "../../utils/horizontalScroll";
import { fetchCategory } from "@/utils/api";
import { Key } from "react";

const Category = async () => {
  const category = await fetchCategory();
  return (
    <section id="category">
      <div className=" flex flex-row justify-between mb-6 ">
        <h1 className="title">Browse by Category</h1>
        <div className="flex flex-row gap-2">
          <button
            aria-label="Scroll to Left Button"
            onClick={slideLeft}
            className="flex flex-row justify-center items-center bg-blue-700 p-2 rounded-md text-sm text-white">
            <BsArrowLeftShort size={20} />
          </button>
          <button
            aria-label="Scroll to Right Button"
            onClick={slideRight}
            className="flex flex-row justify-center items-center bg-blue-700 p-2 rounded-md text-sm text-white">
            <BsArrowRightShort size={20} />
          </button>
        </div>
      </div>
      <div
        id="cat-slide"
        className="flex flex-row scroll-smooth gap-5 p-2 justify-between overflow-scroll no-scrollbar">
        {category.map((cat: any, id: Key) => (
          <Link href={cat.url} key={id}>
            <div className="border border-gray-200 dark:border-gray-600 w-40 h-40 flex flex-col gap-4 p-8 justify-center items-center hover:shadow-md hover:shadow-gray-200 dark:hover:shadow-gray-700 hover:scale-[1.1] transition-all ease-in-out ">
              <Image
                className="min-w-[55px] max-h-[55px]:"
                src={cat.imageUrl}
                width={50}
                height={50}
                style={{ objectFit: "contain", aspectRatio: 1 }}
                alt="cctv"
              />
              <p className="text-center text-sm text-gray-400 font-semibold">
                {cat.name}
              </p>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Category;
