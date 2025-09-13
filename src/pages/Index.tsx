import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import DocumentUpload from "@/components/DocumentUpload";
import Dashboard from "@/components/Dashboard";
import AIRecommendations from "@/components/AIRecommendations";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Navigation />
      <Hero />
      <DocumentUpload />
      <Dashboard />
      <AIRecommendations />
    </div>
  );
};

export default Index;
