import { HeroSection } from "@/components/HeroSection";
import { ServicesGrid } from "@/components/ServicesGrid";
import { ServiceTabs } from "@/components/ServiceTabs";
import { FeaturesSection } from "@/components/FeaturesSection";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <HeroSection />
      <ServicesGrid />
      <ServiceTabs />
      <FeaturesSection />
      <Footer />
    </div>
  );
};

export default Index;
