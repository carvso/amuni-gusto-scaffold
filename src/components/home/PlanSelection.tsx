
import { Check } from "lucide-react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const plans = [
  {
    id: "single",
    name: "Prodotto Singolo",
    description: "Ideale per provare i nostri piatti",
    price: "9,90",
    features: ["1 porzione", "15+ ricette disponibili", "Consegna in 24/48h"],
    cta: "Scegli il piatto",
    link: "/shop?format=single",
    popular: false
  },
  {
    id: "box2",
    name: "Box da 2",
    description: "Perfetto per single o coppie",
    price: "18,90",
    features: ["2 porzioni", "Risparmio del 5%", "Consegna gratuita", "Piatti assortiti"],
    cta: "Scopri le box",
    link: "/shop?format=box2",
    popular: true
  },
  {
    id: "box6",
    name: "Box da 6",
    description: "La soluzione per tutta la famiglia",
    price: "49,90",
    features: ["6 porzioni", "Risparmio del 15%", "Consegna gratuita", "Piatti personalizzabili", "Box refrigerato premium"],
    cta: "Ordina ora",
    link: "/shop?format=box6",
    popular: false
  }
];

const PlanSelection = () => {
  return (
    <section className="py-16 bg-cream relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3 text-olive">
            Scegli il formato che preferisci
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Che tu voglia provare un solo piatto o fare scorta per tutta la settimana, abbiamo la soluzione adatta a te.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.id}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.4, delay: index * 0.1 }}
              className={`bg-white rounded-xl overflow-hidden shadow-lg relative ${
                plan.popular ? "ring-2 ring-basil-green" : ""
              }`}
            >
              {plan.popular && (
                <div className="absolute top-0 right-0 bg-basil-green text-white py-1 px-4 text-sm font-medium">
                  Più venduto
                </div>
              )}
              
              <div className="p-6">
                <h3 className="text-xl font-playfair font-bold mb-2">{plan.name}</h3>
                <p className="text-gray-600 text-sm mb-4">{plan.description}</p>
                <div className="mb-4">
                  <span className="text-3xl font-bold text-olive">€{plan.price}</span>
                </div>
                
                <ul className="space-y-3 mb-6">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start">
                      <Check className="h-5 w-5 text-basil-green shrink-0 mr-2" />
                      <span className="text-gray-700 text-sm">{feature}</span>
                    </li>
                  ))}
                </ul>
                
                <Link 
                  to={plan.link}
                  className={`block w-full py-3 rounded-full text-center font-medium ${
                    plan.popular 
                      ? "bg-basil-green text-white hover:bg-basil-green/90" 
                      : "bg-olive text-white hover:bg-olive/90"
                  } transition-colors`}
                >
                  {plan.cta}
                </Link>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PlanSelection;
