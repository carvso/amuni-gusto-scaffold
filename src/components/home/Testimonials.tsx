
import { StarIcon } from "lucide-react";

const testimonials = [
  {
    name: "Marco R.",
    location: "Milano",
    text: "La vera pasta alla Norma come in Sicilia! Ingredienti freschi e sapori autentici.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Laura B.",
    location: "Roma",
    text: "Finalmente posso gustare la vera caponata siciliana a casa. Servizio impeccabile!",
    rating: 5,
    image: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  },
  {
    name: "Giuseppe M.",
    location: "Torino",
    text: "Gli arancini sono fantastici, proprio come quelli che mangiavo da piccolo in Sicilia.",
    rating: 5,
    image: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80"
  }
];

const Testimonials = () => {
  return (
    <section className="py-16 bg-cream">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-playfair font-bold mb-2">
            Cosa dicono i nostri clienti
          </h2>
          <div className="w-20 h-1 bg-pomodoro-red mx-auto mb-4"></div>
          <p className="text-gray-600 max-w-2xl mx-auto">
            Oltre 2000 clienti soddisfatti in tutta Italia
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((testimonial, index) => (
            <div key={index} className="bg-white rounded-lg p-6 shadow-md">
              <div className="flex items-center mb-4">
                <img
                  src={testimonial.image}
                  alt={testimonial.name}
                  className="w-12 h-12 rounded-full object-cover mr-4"
                />
                <div>
                  <h3 className="font-semibold">{testimonial.name}</h3>
                  <p className="text-gray-500 text-sm">{testimonial.location}</p>
                </div>
              </div>
              <div className="flex mb-3">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <StarIcon key={i} className="w-5 h-5 fill-current text-yellow-400" />
                ))}
              </div>
              <p className="text-gray-600 italic">{`"${testimonial.text}"`}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
