
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div className="relative">
      <div className="h-[500px] md:h-[600px] overflow-hidden">
        <img 
          src="https://images.unsplash.com/photo-1563379926898-05f4575a45d8?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80" 
          alt="Sicilian food" 
          className="w-full h-full object-cover"
        />
      </div>
      
      <div className="absolute inset-0 bg-black/50 flex items-center">
        <div className="container mx-auto px-4 text-center text-white">
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-4">
            Il gusto della Sicilia, pronto da gustare
          </h1>
          
          <p className="text-lg md:text-xl max-w-2xl mx-auto mb-8 font-opensans">
            Piatti tradizionali siciliani di alta qualità, pronti da gustare a casa tua. 
            Spedizione gratuita per ordini sopra i 40€.
          </p>
          
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button variant="pomodoro" size="lg" asChild>
              <Link to="/shop">
                Scopri i nostri piatti
              </Link>
            </Button>
            
            <Button 
              variant="pomodoroOutline" 
              size="lg" 
              className="bg-transparent border-white text-white hover:bg-white/20"
              asChild
            >
              <a href="#how-it-works">
                Come funziona
              </a>
            </Button>
          </div>
        </div>
      </div>

      {/* Sticky mobile CTA */}
      <div className="md:hidden fixed bottom-0 left-0 right-0 p-4 bg-white shadow-lg z-50">
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
