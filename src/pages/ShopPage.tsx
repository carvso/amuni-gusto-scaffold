
import Layout from "@/components/layout/Layout";
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import FloatingLeaves from "@/components/ui/FloatingLeaves";
import { Button } from "@/components/ui/button";
import { Leaf } from "lucide-react";

const ShopPage = () => {
  return (
    <Layout>
      <FloatingLeaves />
      <div className="container mx-auto px-4 py-12 relative">
        {/* Hero section */}
        <div className="text-center mb-12 relative z-10">
          <div className="inline-flex items-center gap-2 bg-basil-green/10 px-4 py-2 rounded-full text-basil-green mb-4">
            <Leaf size={16} />
            <span className="text-sm font-medium">Piatti freschi e genuini</span>
          </div>
          <h1 className="text-4xl font-playfair font-bold mb-4 text-olive">
            I Nostri Piatti
          </h1>
          <p className="text-gray-600 max-w-2xl mx-auto mb-8">
            Scopri la nostra selezione di piatti preparati con ingredienti freschi e genuini della tradizione siciliana
          </p>
          <div className="flex justify-center gap-4">
            <Button variant="basil" className="gap-2">
              <Leaf size={16} />
              Tutti i piatti
            </Button>
          </div>
        </div>
        
        {/* Products grid with enhanced styling */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 relative z-10">
          {products.map((product) => (
            <ProductCard 
              key={product.id}
              id={product.id}
              name={product.name}
              description={product.description}
              shortDescription={product.shortDescription}
              price={product.price}
              image={product.image}
              category={product.category}
            />
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default ShopPage;
