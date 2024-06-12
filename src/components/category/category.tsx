import { fetchCategory } from "@/utils/api";
import { Category as CatInterface } from "@/redux/interface/interfaces";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { slideLeft, slideRight } from "../../utils/horizontalScroll";
import CategoryCard from "./categoryCard";

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
        {category.map((cat: CatInterface) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </section>
  );
};

export default Category;
