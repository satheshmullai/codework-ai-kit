import { Navigation } from "@/components/ui/navigation";
import { HeroSection } from "@/components/ui/hero-section"; 
import { ProjectShowcase } from "@/components/ui/project-showcase";
import { Footer } from "@/components/ui/footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <HeroSection />
      <ProjectShowcase />
      <Footer />
    </div>
  );
};

export default Index;
