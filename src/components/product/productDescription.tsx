import ProductDetailTitle from "@/components/title/productDetailTitle";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col gap-5 mt-5">
      <ProductDetailTitle title={"Description"} />
      <p className="text-justify m-4">{description}</p>
    </div>
  );
};

export default ProductDescription;
