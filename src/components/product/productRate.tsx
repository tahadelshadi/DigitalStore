import { FaStar } from "react-icons/fa";

export const ProductRate=({ rate }: { rate: number })=> {
  return (
    <div className="flex flex-row items-center gap-2">
      <FaStar color="gold" size={20} />
      <>{rate}</>
    </div>
  );
}
export const CommentRate=({ rate }: { rate: number })=> {
  return (
    <div className="flex flex-row items-center gap-2">
      {Array(parseInt(rate))
        .fill(null)
        .map((_, id) => (
          <FaStar key={id} color="gold" size={15} />
        ))}
    </div>
  );
}
