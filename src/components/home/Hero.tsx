import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ChevronDown } from "lucide-react";

const Hero = () => {
  return (
    <div className="relative min-h-[85vh] flex flex-col lg:flex-row items-center">
      {/* Left Content Section */}
      <div className="w-full lg:w-1/2 h-full flex flex-col justify-center px-6 lg:px-16 py-20 bg-gradient-to-br from-cream via-sand to-cream">
        <div className="max-w-xl mx-auto lg:mx-0">
          <span className="inline-block mb-4 text-sm md:text-base text-sage uppercase tracking-wider font-opensans">
            Sapori autentici siciliani
          </span>
          
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-olive">
            Il gusto della Sicilia,{" "}
            <span className="text-pomodoro-red">pronto da gustare</span>
          </h1>
          
          <p className="text-lg md:text-xl text-olive/80 mb-8 font-opensans max-w-lg">
            Scopri i nostri piatti tradizionali pronti da gustare. 
            Spedizione gratuita per ordini sopra i 40€.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <Button 
              variant="pomodoro" 
              size="lg" 
              className="text-base"
              asChild
            >
              <Link to="/shop">
                Scopri i nostri piatti
              </Link>
            </Button>
            
            <Button 
              variant="pomodoroOutline" 
              size="lg"
              className="text-base border-2 border-pomodoro-red text-pomodoro-red hover:bg-pomodoro-red/5"
              asChild
            >
              <Link to="/how-it-works">
                Come funziona
                <ChevronDown className="ml-2" />
              </Link>
            </Button>
          </div>

          <div className="mt-12 flex items-center gap-8">
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-olive">+2,000</span>
              <span className="text-sm text-olive/70">Clienti felici</span>
            </div>
            <div className="w-px h-12 bg-olive/20" />
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-olive">100%</span>
              <span className="text-sm text-olive/70">Ingredienti siciliani</span>
            </div>
          </div>
        </div>
      </div>

      {/* Right Decorative Section */}
      <div className="hidden lg:flex w-1/2 h-full bg-sage/10">
        <div className="relative h-full w-full overflow-hidden">
          <img 
            src="/lovable-uploads/844b68eb-f4f8-4133-bf17-b8c31ebee83d.png"
            alt="Pasta fresca siciliana" 
            className="absolute inset-0 w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-br from-sage/50 via-transparent to-cream/50 mix-blend-multiply"></div>
          <div className="absolute -left-12 top-1/2 -translate-y-1/2 w-24 h-24 bg-pomodoro-red/20 rounded-full blur-3xl"></div>
          <div className="absolute right-12 bottom-24 w-32 h-32 bg-sage/20 rounded-full blur-3xl"></div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="lg:hidden fixed bottom-0 left-0 right-0 p-4 bg-white/80 backdrop-blur-md shadow-lg z-50">
        <Button variant="pomodoro" className="w-full" asChild>
          <Link to="/shop">
            Ordina Ora
          </Link>
        </Button>
      </div>
    </div>
  );
};

export default Hero;
