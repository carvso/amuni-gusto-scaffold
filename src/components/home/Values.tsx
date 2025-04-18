
import ValueCard from "./ValueCard";
import { FiMapPin, FiClock, FiTruck } from "react-icons/fi";

const Values = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-2">
            Perché sceglierci
          </h2>
          <div className="w-20 h-1 bg-pomodoro-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Qualità, tradizione e convenienza: scopri i valori che guidano ogni nostra creazione.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <ValueCard 
            icon={<FiMapPin size={42} />}
            title="Ingredienti locali"
            description="Utilizziamo solo ingredienti freschi e di alta qualità provenienti da produttori siciliani selezionati."
          />
          
          <ValueCard 
            icon={<FiClock size={42} />}
            title="Pronto in pochi minuti"
            description="I nostri piatti sono pronti da gustare in pochi minuti, senza compromettere il gusto autentico della tradizione siciliana."
          />
          
          <ValueCard 
            icon={<FiTruck size={42} />}
            title="Spedizione veloce"
            description="Consegna in tutta Italia entro 24 ore dall'ordine, con packaging ecosostenibile che mantiene inalterata la freschezza."
          />
        </div>
      </div>
    </section>
  );
};

export default Values;
