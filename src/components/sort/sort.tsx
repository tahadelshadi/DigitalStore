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
    <div className="flex flex-row gap-5 p-2 mb-2 font-light md:text-md text-gray-600 xs:text-xs border-b">
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
