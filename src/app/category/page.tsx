import CategoryCard from "@/components/category/categoryCard";
import { Category as ICategory } from "@/redux/interface/interfaces";
import { fetchCategory } from "@/utils/api";

const Category = async () => {
  const category = await fetchCategory();
  return (
    <section className="min-h-screen">
      <div>
        <h1 className="text-2xl font-bold mt-4">Category</h1>
        <div className="flex flex-wrap gap-10 mx-auto mt-10 md:px-52">
          {category.map((cat: ICategory) => (
            <CategoryCard category={cat} key={cat.id} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Category;
