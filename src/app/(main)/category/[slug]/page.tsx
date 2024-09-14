import ProductCard from "@/components/product/productCard";
import { Product } from "@/interface/interfaces";
import { fetchProductByCat } from "@/fetchApi/product";

const ProductsByCategory = async ({ params }: { params: { slug: string } }) => {
  const productByCat = await fetchProductByCat(params.slug);
  return (
    <section>
      <div className="flex flex-row">
        {productByCat.map((product: Product) => (
          <ProductCard product={product} key={product.id} />
        ))}
      </div>
    </section>
  );
};

export default ProductsByCategory;
