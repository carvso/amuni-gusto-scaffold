
import Layout from "@/components/layout/Layout";
import { Mail, MapPin, Phone } from "lucide-react";

const ContactPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-olive text-center">
          Contattaci
        </h1>
        
        <div className="max-w-2xl mx-auto">
          <div className="grid gap-8">
            <div className="flex items-center gap-4 text-olive">
              <MapPin className="w-6 h-6 text-pomodoro-red" />
              <div>
                <h2 className="font-semibold mb-1">Indirizzo</h2>
                <p>Via Etnea 123, 95131 Catania (CT), Sicilia</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-olive">
              <Phone className="w-6 h-6 text-pomodoro-red" />
              <div>
                <h2 className="font-semibold mb-1">Telefono</h2>
                <p>+39 095 123 4567</p>
              </div>
            </div>
            
            <div className="flex items-center gap-4 text-olive">
              <Mail className="w-6 h-6 text-pomodoro-red" />
              <div>
                <h2 className="font-semibold mb-1">Email</h2>
                <p>info@amunigroup.com</p>
              </div>
            </div>
          </div>
          
          <div className="mt-12 aspect-w-16 aspect-h-9">
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3164.6611743669755!2d15.087347!3d37.507593!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1313fcf49c1239cd%3A0x5e1e4966a72c627d!2sVia%20Etnea%2C%20Catania%2C%20Province%20of%20Catania%2C%20Italy!5e0!3m2!1sen!2sus!4v1650450000000!5m2!1sen!2sus" 
              className="w-full h-full rounded-lg"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default ContactPage;
