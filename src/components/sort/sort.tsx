import { useRouter, useSearchParams } from "next/navigation";
import { PiSortAscendingBold } from "react-icons/pi";

const Sort = () => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (order: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set('ordering', order);
    router.push(`/products?${currentParams.toString()}`);
  };

  return (
    <div className="flex flex-row gap-5 px-2 mb-2 font-light text-sm text-gray-600">
      <div className="flex flex-row items-center">
        <PiSortAscendingBold className="w-5 h-5 mr-1" />
        <p>Sort By: </p>
      </div>
      <button onClick={() => handleSortChange("a")}>Default</button>
      <button onClick={() => handleSortChange("price")}>Low to high</button>
      <button onClick={() => handleSortChange("-price")}>High to low</button>
      <button onClick={() => handleSortChange("a")}>Popularity</button>
    </div>
  );
};

export default Sort;
