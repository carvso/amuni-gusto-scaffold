
import { Link } from "react-router-dom";
import { FiInstagram, FiFacebook, FiMail, FiMapPin, FiPhone } from "react-icons/fi";

const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white">
      <div className="container mx-auto px-4 pt-12 pb-8">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Company Info */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Amunì Group</h3>
            <p className="font-opensans mb-4">
              Sapori autentici della Sicilia, pronti da gustare ovunque tu sia.
            </p>
            <div className="flex space-x-4">
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pomodoro-red transition-colors"
                aria-label="Instagram"
              >
                <FiInstagram size={20} />
              </a>
              <a 
                href="https://facebook.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="text-white hover:text-pomodoro-red transition-colors"
                aria-label="Facebook"
              >
                <FiFacebook size={20} />
              </a>
              <a 
                href="mailto:info@amunigroup.com" 
                className="text-white hover:text-pomodoro-red transition-colors"
                aria-label="Email"
              >
                <FiMail size={20} />
              </a>
            </div>
          </div>
          
          {/* Links */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Link Utili</h3>
            <ul className="font-opensans space-y-2">
              <li>
                <Link to="/" className="hover:text-pomodoro-red transition-colors">
                  Home
                </Link>
              </li>
              <li>
                <Link to="/shop" className="hover:text-pomodoro-red transition-colors">
                  Shop
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:text-pomodoro-red transition-colors">
                  Chi Siamo
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:text-pomodoro-red transition-colors">
                  Contatti
                </Link>
              </li>
              <li>
                <Link to="/cart" className="hover:text-pomodoro-red transition-colors">
                  Carrello
                </Link>
              </li>
            </ul>
          </div>
          
          {/* Contact */}
          <div>
            <h3 className="text-xl font-playfair font-bold mb-4">Contattaci</h3>
            <ul className="font-opensans space-y-2">
              <li className="flex items-start space-x-2">
                <FiMapPin className="mt-1 flex-shrink-0" />
                <span>Via Etnea 123, 95131 Catania (CT), Sicilia</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiPhone className="flex-shrink-0" />
                <span>+39 095 123 4567</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiMail className="flex-shrink-0" />
                <span>info@amunigroup.com</span>
              </li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-sm text-gray-400 font-opensans">
          <p>
            &copy; {new Date().getFullYear()} Amunì Group. Tutti i diritti riservati.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
