
import Layout from "@/components/layout/Layout";
import Hero from "@/components/home/Hero";
import FeaturedProducts from "@/components/home/FeaturedProducts";
import Values from "@/components/home/Values";

const HomePage = () => {
  return (
    <Layout>
      <Hero />
      <FeaturedProducts />
      <Values />
    </Layout>
  );
};

export default HomePage;
