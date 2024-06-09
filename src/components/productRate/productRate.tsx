import { FaStar } from "react-icons/fa";

function ProductRate({rate}:{rate: Number}) {
    return (
      Array(rate)
        .fill(0)
        .map((x, idx) => (
          <FaStar color="gold" key={idx} size={20} />
        ))
  );
};

export default ProductRate;
