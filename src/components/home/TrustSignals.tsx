
import { CheckCircle, Shield, CreditCard } from "lucide-react";

const trustSignals = [
  {
    icon: <CheckCircle className="w-8 h-8" />,
    title: "100% Siciliano",
    description: "Ingredienti autentici dai migliori produttori locali"
  },
  {
    icon: <Shield className="w-8 h-8" />,
    title: "Soddisfatti o Rimborsati",
    description: "Non sei soddisfatto? Ti rimborsiamo al 100%"
  },
  {
    icon: <CreditCard className="w-8 h-8" />,
    title: "Pagamento Sicuro",
    description: "Transazioni protette e verificate"
  }
];

const TrustSignals = () => {
  return (
    <section className="py-12 bg-white">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {trustSignals.map((signal, index) => (
            <div key={index} className="flex items-center space-x-4">
              <div className="text-basil-green flex-shrink-0">
                {signal.icon}
              </div>
              <div>
                <h3 className="font-playfair font-semibold mb-1">{signal.title}</h3>
                <p className="text-gray-600 text-sm">{signal.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustSignals;
