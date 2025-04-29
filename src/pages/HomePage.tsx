
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import HowItWorks from "@/components/home/HowItWorks";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Testimonials from "@/components/home/Testimonials";
import TrustSignals from "@/components/home/TrustSignals";
import CustomerSegment from "@/components/home/CustomerSegment";
import PlanSelection from "@/components/home/PlanSelection";
import AdvantageSection from "@/components/home/AdvantageSection";
import StickyActions from "@/components/ui/StickyActions";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <CustomerSegment />
      <HowItWorks />
      <PlanSelection />
      <FeaturedProducts />
      <AdvantageSection />
      <Testimonials />
      <TrustSignals />
      <StickyActions />
    </Layout>
  );
};

export default HomePage;
