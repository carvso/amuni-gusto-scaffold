
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { FiShoppingCart } from "react-icons/fi";
import { useState } from "react";

export interface ProductCardProps {
  id: number;
  name: string;
  description: string;
  shortDescription: string;
  price: number;
  image: string;
  category: string;
}

const ProductCard = ({
  id,
  name,
  shortDescription,
  price,
  image,
  category
}: ProductCardProps) => {
  const [imageError, setImageError] = useState(false);
  
  const handleImageError = () => {
    console.error(`Failed to load image: ${image}`);
    setImageError(true);
  };

  // Utilizziamo un'immagine di placeholder affidabile
  const placeholderImage = "https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=80";

  return (
    <div className="bg-white rounded-lg overflow-hidden shadow-md hover:shadow-lg transition-shadow duration-300">
      {/* Immagine prodotto con tag categoria */}
      <div className="relative">
        <Link to={`/product/${id}`} className="block">
          <img 
            src={imageError ? placeholderImage : image} 
            alt={name} 
            className="w-full h-52 object-cover"
            onError={handleImageError}
          />
        </Link>
        <span className="absolute top-2 left-2 bg-basil-green text-white text-xs py-1 px-2 rounded uppercase tracking-wider font-bold">
          {category}
        </span>
      </div>

      {/* Dettagli prodotto */}
      <div className="p-4">
        <Link to={`/product/${id}`} className="block mb-1">
          <h3 className="text-lg font-playfair font-semibold text-gray-800 hover:text-pomodoro-red transition-colors">
            {name}
          </h3>
        </Link>
        
        <p className="text-sm text-gray-600 mb-3 font-opensans line-clamp-2">
          {shortDescription}
        </p>
        
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-900">
            €{price.toFixed(2)}
          </span>
          
          <Button variant="pomodoro" size="sm">
            <FiShoppingCart className="mr-1" />
            Aggiungi
          </Button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
