
import { GiKnifeFork } from "react-icons/gi";
import { FiTruck } from "react-icons/fi";
import { IoFlameOutline } from "react-icons/io5";

const steps = [
  {
    icon: <GiKnifeFork className="w-12 h-12" />,
    title: "Scegli i piatti",
    description: "Seleziona i tuoi piatti preferiti dal nostro menù di specialità siciliane"
  },
  {
    icon: <FiTruck className="w-12 h-12" />,
    title: "Ricevi a casa",
    description: "Consegna in 24h in tutta Italia, in packaging speciale refrigerato"
  },
  {
    icon: <IoFlameOutline className="w-12 h-12" />,
    title: "Scalda e gusta",
    description: "Pronti in pochi minuti, mantenendo tutto il sapore della tradizione"
  }
];

const HowItWorks = () => {
  return (
    <section className="py-16 bg-white">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-2">
            Come funziona Amunì
          </h2>
          <div className="w-20 h-1 bg-pomodoro-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Scopri quanto è semplice gustare i sapori autentici della Sicilia direttamente a casa tua.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {steps.map((step, index) => (
            <div key={index} className="text-center">
              <div className="mb-4 text-basil-green flex justify-center">
                {step.icon}
              </div>
              <h3 className="text-xl font-playfair font-semibold mb-2">{step.title}</h3>
              <p className="text-gray-600 font-opensans">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorks;
