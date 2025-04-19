
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import Values from "@/components/home/Values";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <HowItWorks />
      <FeaturedProducts />
      <Testimonials />
      <Values />
      <TrustSignals />
    </Layout>
  );
};

export default HomePage;
