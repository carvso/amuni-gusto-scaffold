
import Layout from "@/components/layout/Layout";

const AboutPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-16">
        <div className="max-w-3xl mx-auto">
          <h1 className="text-3xl md:text-4xl font-playfair font-bold mb-6 text-center">
            Chi Siamo
          </h1>
          <div className="w-20 h-1 bg-pomodoro-red mx-auto mb-8"></div>
          
          <div className="prose prose-lg mx-auto">
            <p className="mb-6 text-gray-700 font-opensans">
              Amunì Group nasce nel cuore della Sicilia, con la missione di portare i sapori autentici della nostra terra direttamente sulle tavole di tutta Italia. La nostra storia inizia da una passione tramandata di generazione in generazione per la cucina tradizionale siciliana.
            </p>
            
            <img 
              src="https://images.unsplash.com/photo-1590069261209-f8e9b8642343?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1376&q=80"
              alt="Cucina siciliana" 
              className="w-full h-auto rounded-lg my-8 shadow-md"
            />
            
            <h2 className="text-2xl font-playfair font-semibold mt-10 mb-4 text-gray-800">
              La Nostra Storia
            </h2>
            
            <p className="mb-6 text-gray-700 font-opensans">
              Fondata nel 2020 da un gruppo di amici con una passione condivisa per la gastronomia siciliana, Amunì si è rapidamente affermata come un punto di riferimento per chi cerca i sapori autentici della Sicilia senza compromessi sulla qualità.
            </p>
            
            <p className="mb-6 text-gray-700 font-opensans">
              Il nostro team è composto da chef esperti provenienti da diverse parti della Sicilia, ognuno con il proprio bagaglio di ricette tradizionali e un'attenzione maniacale per la qualità degli ingredienti.
            </p>
            
            <h2 className="text-2xl font-playfair font-semibold mt-10 mb-4 text-gray-800">
              Missione e Valori
            </h2>
            
            <p className="mb-6 text-gray-700 font-opensans">
              La nostra missione è semplice: rendere accessibile a tutti l'esperienza culinaria siciliana autentica, ovunque ci si trovi. Crediamo che il cibo sia cultura, e ogni nostro piatto racconta una storia della nostra terra.
            </p>
            
            <ul className="list-disc pl-6 mb-6 text-gray-700 font-opensans">
              <li className="mb-2">
                <strong className="text-pomodoro-red">Autenticità:</strong> Utilizziamo solo ricette tradizionali, rispettando i metodi di preparazione tramandati da generazioni.
              </li>
              <li className="mb-2">
                <strong className="text-pomodoro-red">Qualità:</strong> Selezioniamo solo ingredienti di prima scelta, privilegiando prodotti locali e di stagione.
              </li>
              <li className="mb-2">
                <strong className="text-pomodoro-red">Sostenibilità:</strong> Ci impegniamo a ridurre il nostro impatto ambientale in ogni fase della produzione.
              </li>
              <li className="mb-2">
                <strong className="text-pomodoro-red">Comunità:</strong> Supportiamo i piccoli produttori locali e contribuiamo attivamente alla comunità siciliana.
              </li>
            </ul>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export default AboutPage;
