import { Category } from "@/interface/interfaces";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({ category }: { category: Category }) => {
  return (
    <Link href={`/products?category=${category.name}`} key={category.id}>
      <div className="rounded-small flex h-40 w-40 flex-col items-center justify-center gap-4 border border-gray-200 p-8 transition-all ease-in-out hover:scale-[1.1] hover:shadow-md hover:shadow-gray-200 dark:border-gray-600 dark:hover:shadow-gray-700 ">
        <Image
          className="max-h-[55px]: min-w-[55px]"
          src={`data:image/png;base64,${category.image}`}
          width={50}
          height={50}
          style={{ objectFit: "contain", aspectRatio: 1 }}
          alt="cctv"
        />
        <p className="text-center text-sm font-semibold text-gray-400">
          {category.name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
