
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "framer-motion";
import { ShoppingCart, Phone, Package } from "lucide-react";

const actions = [
  {
    id: "order",
    label: "Ordina ora",
    icon: <ShoppingCart className="w-4 h-4" />,
    link: "/shop",
    primary: true
  },
  {
    id: "contact",
    label: "Contattaci",
    icon: <Phone className="w-4 h-4" />,
    link: "/contact",
    primary: false
  },
  {
    id: "box",
    label: "Scegli il tuo box",
    icon: <Package className="w-4 h-4" />,
    link: "/shop?format=box",
    primary: false
  }
];

const StickyActions = () => {
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Mostra il CTA solo dopo che l'utente ha scrollato un po'
      const scrollY = window.scrollY;
      setVisible(scrollY > 300);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <AnimatePresence>
      {visible && (
        <motion.div
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          className="fixed bottom-5 left-1/2 transform -translate-x-1/2 z-50"
        >
          <div className="flex items-center gap-2 bg-white/90 backdrop-blur-md rounded-full shadow-lg p-2 border border-gray-200">
            {actions.map((action) => (
              <Link
                key={action.id}
                to={action.link}
                className={`
                  flex items-center gap-1.5 px-4 py-2 rounded-full text-sm font-medium transition-colors
                  ${action.primary 
                    ? "bg-pomodoro-red text-white hover:bg-pomodoro-red/90" 
                    : "bg-transparent text-gray-700 hover:bg-gray-100"
                  }
                `}
              >
                {action.icon}
                {action.label}
              </Link>
            ))}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default StickyActions;
