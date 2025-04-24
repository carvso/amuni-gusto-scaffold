
import Layout from "@/components/layout/Layout";
import HowItWorks from "@/components/home/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import FloatingItems from "@/components/ui/FloatingItems";

const HowItWorksPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-olive text-center">
          Come Funziona Amunì
        </h1>
        
        <div className="max-w-4xl mx-auto bg-cream/50 rounded-xl p-8 mb-12 relative overflow-hidden">
          <FloatingItems items={['leaf']} zIndex={-1} />
          
          <div className="mb-8">
            <h2 className="text-2xl font-playfair font-semibold mb-4 text-olive">
              Dai sapori autentici della Sicilia alla tua tavola in pochi click
            </h2>
            <p className="text-gray-700">
              Amunì ti porta i sapori autentici della Sicilia ovunque tu sia. I nostri piatti sono preparati con ingredienti freschi e genuini, confezionati in vaschette termosaldate e abbattuti per preservarne la qualità.
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-8">
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pomodoro-red">Formati disponibili</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Monoporzione - ideale per single e pause pranzo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Biporzione - perfetta per coppie o piccole famiglie
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Box da 6 porzioni - ottima per famiglie o piccoli eventi
                </li>
              </ul>
            </div>
            
            <div className="bg-white p-6 rounded-lg shadow-sm">
              <h3 className="text-xl font-playfair font-semibold mb-3 text-pomodoro-red">Per chi è pensato</h3>
              <ul className="space-y-2 text-gray-700">
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Famiglie occupate che desiderano piatti di qualità
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Bar che non possono manipolare cibo
                </li>
                <li className="flex items-center">
                  <span className="w-2 h-2 bg-basil-green rounded-full mr-2"></span>
                  Ristoratori che cercano un prodotto fresco e pronto all'uso
                </li>
              </ul>
            </div>
          </div>
        </div>
        
        <HowItWorks />
        
        <div className="text-center mt-12">
          <Button variant="pomodoro" size="lg" asChild>
            <Link to="/shop">
              Scopri i nostri piatti
            </Link>
          </Button>
        </div>
      </div>
    </Layout>
  );
};

export default HowItWorksPage;
