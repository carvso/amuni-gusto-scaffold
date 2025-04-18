
import { ReactNode } from "react";

interface ValueCardProps {
  icon: ReactNode;
  title: string;
  description: string;
}

const ValueCard = ({ icon, title, description }: ValueCardProps) => {
  return (
    <div className="bg-white rounded-lg p-6 shadow-md text-center transition-transform duration-300 hover:-translate-y-1">
      <div className="mb-4 text-basil-green flex justify-center">
        {icon}
      </div>
      <h3 className="text-xl font-playfair font-semibold mb-2 text-gray-800">
        {title}
      </h3>
      <p className="text-gray-600 font-opensans">
        {description}
      </p>
    </div>
  );
};

export default ValueCard;
