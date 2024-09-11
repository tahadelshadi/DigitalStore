import { FaStar } from "react-icons/fa";

function ProductRate({ rate }: { rate: Number }) {
  return (
    <div className="flex flex-row gap-2 items-center">
      <FaStar color="gold" size={20} />
      <>{rate}</>
    </div>
  );
}

export default ProductRate;
