import { FaStar } from "react-icons/fa";

function ProductRate({rate}:{rate: Number}) {
    return (
      <div className="flex flex-row gap-2">
        {Array(rate)
        .fill(0)
        .map((x, idx) => (
          <FaStar color="gold" key={idx} size={20} />
        ))}
      </div>
  );
};

export default ProductRate;
