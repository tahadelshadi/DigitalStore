import CategoryCard from "@/components/category/categoryCard";
import { Category as ICategory } from "@/interface/interfaces";
import { fetchCategory } from "@/fetchApi/categoryApi";

const Category = async () => {
  const category = await fetchCategory();
  return (
    <section className="min-h-screen">
      <h1 className="mt-4 text-2xl font-bold">Category</h1>
      <div className="mx-auto mt-10 flex flex-wrap gap-10 lg:px-52 justify-center">
        {category.map((cat: ICategory) => (
          <CategoryCard category={cat} key={cat.id} />
        ))}
      </div>
    </section>
  );
};

export default Category;
