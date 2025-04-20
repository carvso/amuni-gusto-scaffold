
import Layout from "@/components/layout/Layout";
import HowItWorks from "@/components/home/HowItWorks";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const HowItWorksPage = () => {
  return (
    <Layout>
      <div className="container mx-auto px-4 py-12">
        <h1 className="text-4xl font-playfair font-bold mb-8 text-olive text-center">
          Come Funziona Amunì
        </h1>
        
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
