import { AdjustmentsHorizontalIcon, BarsArrowDownIcon } from "@heroicons/react/24/outline";
import { useRouter, useSearchParams } from "next/navigation";
import { PiSortAscendingBold } from "react-icons/pi";

const Sort = ({
  setOrdering,
}: {
  setOrdering: React.Dispatch<React.SetStateAction<string>>;
}) => {
  const router = useRouter();
  const searchParams = useSearchParams();

  const handleSortChange = (order: string) => {
    const currentParams = new URLSearchParams(searchParams.toString());
    currentParams.set("ordering", order);
    setOrdering(order);
    router.push(`/products?${currentParams.toString()}`);
  };

  return (
    <div className="md:text-md mb-2 flex flex-row gap-5 border-b p-2 font-light text-gray-600 xs:text-xs">
      <button
        className="flex flex-row items-center gap-1 md:hidden">
        <AdjustmentsHorizontalIcon className="h-5 w-5" />
        <span>Filter</span>
      </button>
      <div className="flex flex-row items-center gap-1">
        <BarsArrowDownIcon className="h-5 w-5 md:mr-1" />
        <p>Sort By: </p>
      </div>
      <button onClick={() => handleSortChange("")}>Default</button>
      <button onClick={() => handleSortChange("price")}>Low to high</button>
      <button onClick={() => handleSortChange("-price")}>High to low</button>
      <button onClick={() => handleSortChange("")}>Popularity</button>
    </div>
  );
};

export default Sort;
