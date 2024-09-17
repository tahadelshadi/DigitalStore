import ProductDetailTitle from "@/components/title/productDetailTitle";

const ProductDescription = ({ description }: { description: string }) => {
  return (
    <div className="flex flex-col my-5">
      <ProductDetailTitle title={"Description"} />
      <p className="text-justify mx-4">{description}</p>
    </div>
  );
};

export default ProductDescription;
