
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { ShoppingCart, HelpCircle } from "lucide-react";
import { motion } from "framer-motion";

const Hero = () => {
  return (
    <div className="relative min-h-screen flex flex-col md:flex-row items-center bg-cream overflow-hidden">
      {/* Decorative Elements */}
      <div className="absolute -top-24 -left-24 w-64 h-64 bg-sage/10 rounded-full blur-3xl"></div>
      <div className="absolute -bottom-32 -right-32 w-80 h-80 bg-pomodoro-red/5 rounded-full blur-3xl"></div>
      
      {/* Left Content Section */}
      <div className="w-full md:w-1/2 h-full flex flex-col justify-center px-6 lg:px-16 py-20 z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="max-w-xl mx-auto md:mx-0"
        >
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2, duration: 0.5 }}
            className="inline-flex items-center gap-2 bg-pomodoro-red/10 px-4 py-2 rounded-full text-pomodoro-red mb-6"
          >
            <span className="text-sm md:text-base font-medium">Pronto in soli 6 minuti</span>
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.5 }}
            className="text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mb-6 text-olive"
          >
            Il vero gusto della Sicilia,{" "}
            <span className="text-pomodoro-red">pronto quando vuoi tu</span>
          </motion.h1>
          
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6, duration: 0.5 }}
            className="text-lg md:text-xl text-olive/80 mb-8 font-opensans max-w-lg"
          >
            Piatti pronti surgelati di alta qualità, creati con ingredienti freschi e autentici. 
            Spedizione in 24/48h in tutta Italia, per privati e aziende.
          </motion.p>
          
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8, duration: 0.5 }}
            className="flex flex-col sm:flex-row gap-4"
          >
            <Button 
              variant="pomodoro" 
              size="lg" 
              className="text-base gap-2"
              asChild
            >
              <Link to="/shop">
                <ShoppingCart className="w-5 h-5" />
                Ordina subito
              </Link>
            </Button>
            
            <Button 
              variant="outline" 
              size="lg"
              className="text-base border-2 border-olive text-olive hover:bg-olive/5 gap-2"
              asChild
            >
              <Link to="/how-it-works">
                <HelpCircle className="w-5 h-5" />
                Come funziona
              </Link>
            </Button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.0, duration: 0.8 }}
            className="mt-12 flex flex-wrap items-center gap-8"
          >
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-olive">24/48h</span>
              <span className="text-sm text-olive/70">Consegna rapida</span>
            </div>
            <div className="w-px h-12 bg-olive/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-olive">100%</span>
              <span className="text-sm text-olive/70">Ingredienti siciliani</span>
            </div>
            <div className="w-px h-12 bg-olive/20"></div>
            <div className="flex flex-col">
              <span className="text-2xl font-playfair font-bold text-olive">6 min</span>
              <span className="text-sm text-olive/70">Pronti da gustare</span>
            </div>
          </motion.div>
        </motion.div>
      </div>

      {/* Right Image Section */}
      <div className="w-full md:w-1/2 h-96 md:h-full relative">
        <motion.div
          initial={{ scale: 1.1, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8 }}
          className="absolute inset-0"
        >
          <img 
            src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?ixlib=rb-1.2.1&auto=format&fit=crop&w=1600&q=80" 
            alt="Piatto pronto siciliano" 
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-l from-transparent via-black/5 to-black/20"></div>
          
          {/* Floating badges */}
          <motion.div 
            initial={{ x: 20, y: -20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1.2, duration: 0.5 }}
            className="absolute top-10 right-10 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg"
          >
            <span className="text-sm font-medium text-olive">Surgelato Premium</span>
          </motion.div>
          
          <motion.div 
            initial={{ x: -20, y: 20, opacity: 0 }}
            animate={{ x: 0, y: 0, opacity: 1 }}
            transition={{ delay: 1.4, duration: 0.5 }}
            className="absolute bottom-10 left-10 bg-white/90 backdrop-blur-sm rounded-full py-2 px-4 shadow-lg"
          >
            <span className="text-sm font-medium text-olive">Senza Conservanti</span>
          </motion.div>
        </motion.div>
      </div>
    </div>
  );
};

export default Hero;
