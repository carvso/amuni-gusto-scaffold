
import { Utensils, LeafyGreen, Package, Truck } from "lucide-react";

const advantages = [
  {
    icon: <Utensils className="w-10 h-10" />,
    title: "Nessun bisogno di cucinare",
    description: "Piatti pronti da scaldare in microonde o padella in soli 6 minuti."
  },
  {
    icon: <LeafyGreen className="w-10 h-10" />,
    title: "Ingredienti naturali",
    description: "Solo ingredienti freschi, senza conservanti o additivi artificiali."
  },
  {
    icon: <Package className="w-10 h-10" />,
    title: "Adatto a tutti",
    description: "Ideale per chi non ha cucina: hotel, uffici, studenti, famiglie."
  },
  {
    icon: <Truck className="w-10 h-10" />,
    title: "Consegna garantita",
    description: "Spedizione in tutta Italia con packaging termico speciale."
  }
];

const AdvantageSection = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-playfair font-bold mb-3 text-olive">
            I vantaggi di Amunì
          </h2>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri perché migliaia di clienti scelgono i nostri piatti pronti surgelati
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {advantages.map((advantage, index) => (
            <div key={index} className="bg-cream rounded-xl p-6 text-center hover:shadow-md transition-shadow">
              <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-basil-green/10 text-basil-green mb-4">
                {advantage.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2 text-olive">
                {advantage.title}
              </h3>
              <p className="text-gray-600">
                {advantage.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AdvantageSection;
