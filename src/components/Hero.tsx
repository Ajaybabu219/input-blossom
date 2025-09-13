import { Button } from "@/components/ui/button";
import { ArrowRight, Brain, BookOpen, BarChart3 } from "lucide-react";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-hero opacity-10"></div>
      
      {/* Animated background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-primary/20 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute bottom-1/3 right-1/4 w-48 h-48 bg-accent/20 rounded-full blur-3xl animate-pulse delay-1000"></div>
        <div className="absolute top-1/2 right-1/3 w-24 h-24 bg-primary-glow/30 rounded-full blur-2xl animate-pulse delay-500"></div>
      </div>

      <div className="container mx-auto px-4 py-16 relative z-10">
        <div className="max-w-4xl mx-auto text-center">
          {/* Hero badge */}
          <div className="inline-flex items-center gap-2 bg-gradient-card border border-primary/20 rounded-full px-4 py-2 mb-8 shadow-soft">
            <Brain className="w-4 h-4 text-primary" />
            <span className="text-sm font-medium text-foreground">AI-Powered Learning Platform</span>
          </div>

          {/* Main heading */}
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 bg-gradient-primary bg-clip-text text-transparent">
            Adaptive Learning
            <br />
            <span className="text-foreground">Reimagined</span>
          </h1>

          {/* Description */}
          <p className="text-lg md:text-xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
            Transform your study experience with AI-driven recommendations, automated assessments, 
            and intelligent document processing. Learn smarter, not harder.
          </p>

          {/* CTA buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button variant="hero" size="lg" className="group">
              Get Started
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </Button>
            <Button variant="outline" size="lg" className="hover:shadow-soft">
              Watch Demo
            </Button>
          </div>

          {/* Feature highlights */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-gradient-primary rounded-lg shadow-soft">
                <BookOpen className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Document Processing</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-gradient-secondary rounded-lg shadow-soft">
                <Brain className="w-5 h-5 text-primary-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">AI Recommendations</span>
            </div>
            <div className="flex items-center gap-3 justify-center md:justify-start">
              <div className="p-2 bg-accent rounded-lg shadow-soft">
                <BarChart3 className="w-5 h-5 text-accent-foreground" />
              </div>
              <span className="text-sm font-medium text-foreground">Progress Analytics</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;