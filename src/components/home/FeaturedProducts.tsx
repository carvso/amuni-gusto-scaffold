
import { products } from "@/data/products";
import ProductCard from "@/components/product/ProductCard";
import { Link } from "react-router-dom";

const FeaturedProducts = () => {
  // Filter products where featured is true
  const featuredProducts = products.filter(product => product.featured);
  
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-2">
            Le nostre specialità
          </h2>
          <div className="w-20 h-1 bg-pomodoro-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri i nostri piatti più amati, preparati con ingredienti freschi e genuini della tradizione siciliana.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featuredProducts.map((product) => (
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
        
        <div className="text-center mt-12">
          <Link 
            to="/shop"
            className="font-opensans font-medium text-pomodoro-red hover:text-pomodoro-red/80 underline-offset-4 hover:underline"
          >
            Visualizza tutti i prodotti →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default FeaturedProducts;
