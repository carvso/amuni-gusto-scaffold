
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";

const ShopPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-olive">
          I Nostri Piatti
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {products.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
