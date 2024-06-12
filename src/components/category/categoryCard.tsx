import { Category } from "@/redux/interface/interfaces";
import Image from "next/image";
import Link from "next/link";

const CategoryCard = ({category}: { category: Category }) => {
  return (
    <Link href={`/category/${category.name}`} key={category.id}>
      <div className="border border-gray-200 dark:border-gray-600 w-40 h-40 flex flex-col gap-4 p-8 justify-center items-center hover:shadow-md hover:shadow-gray-200 dark:hover:shadow-gray-700 hover:scale-[1.1] transition-all ease-in-out ">
        <Image
          className="min-w-[55px] max-h-[55px]:"
          src={category.imageUrl}
          width={50}
          height={50}
          style={{ objectFit: "contain", aspectRatio: 1 }}
          alt="cctv"
        />
        <p className="text-center text-sm text-gray-400 font-semibold">
          {category.name}
        </p>
      </div>
    </Link>
  );
};

export default CategoryCard;
