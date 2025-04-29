
import { useState } from "react";
import { cn } from "@/lib/utils";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";

type CustomerType = "privati" | "aziende" | "horeca";

const CustomerSegment = () => {
  const [activeSegment, setActiveSegment] = useState<CustomerType>("privati");

  const segments: Record<CustomerType, { title: string; description: string; cta: string; link: string }> = {
    privati: {
      title: "Per i privati",
      description: "Piatti pronti di alta qualità per chi non ha tempo di cucinare ma non vuole rinunciare al gusto autentico della Sicilia.",
      cta: "Scopri le offerte",
      link: "/shop",
    },
    aziende: {
      title: "Per le aziende",
      description: "Soluzioni economiche e pratiche per mense aziendali, team building e meeting. Senza necessità di cuochi o cucine.",
      cta: "Richiedi un preventivo",
      link: "/aziende",
    },
    horeca: {
      title: "Per HoReCa",
      description: "Ideale per bar, hotel e ristoranti senza cucina o con necessità di integrazione del menu. Qualità elevata, zero sprechi.",
      cta: "Contattaci",
      link: "/horeca",
    },
  };

  return (
    <div className="py-10 bg-white">
      <div className="container mx-auto px-4">
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {(Object.keys(segments) as CustomerType[]).map((segment) => (
            <button
              key={segment}
              onClick={() => setActiveSegment(segment)}
              className={cn(
                "px-6 py-3 text-base md:text-lg font-medium transition-all rounded-full relative",
                activeSegment === segment
                  ? "text-white bg-olive"
                  : "text-olive bg-cream hover:bg-olive/10"
              )}
            >
              {activeSegment === segment && (
                <motion.span
                  layoutId="active-pill"
                  className="absolute inset-0 bg-olive rounded-full"
                  style={{ zIndex: -1 }}
                  transition={{ type: "spring", duration: 0.6 }}
                />
              )}
              {segments[segment].title}
            </button>
          ))}
        </div>

        <motion.div 
          key={activeSegment}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
          className="max-w-3xl mx-auto bg-cream/50 p-8 rounded-xl"
        >
          <h3 className="text-2xl font-playfair font-bold text-olive mb-3">
            {segments[activeSegment].title}
          </h3>
          <p className="text-gray-700 mb-6">
            {segments[activeSegment].description}
          </p>
          <Link
            to={segments[activeSegment].link}
            className="inline-flex items-center justify-center px-6 py-3 bg-pomodoro-red text-white rounded-full font-medium hover:bg-pomodoro-red/90 transition-colors"
          >
            {segments[activeSegment].cta} →
          </Link>
        </motion.div>
      </div>
    </div>
  );
};

export default CustomerSegment;
