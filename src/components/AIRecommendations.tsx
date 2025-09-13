import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Brain, Lightbulb, Target, Star, ArrowRight, BookOpen, Clock } from "lucide-react";

const AIRecommendations = () => {
  const recommendations = [
    {
      type: "Study Plan",
      title: "Focus on Organic Chemistry Bonds",
      description: "Based on your recent quiz performance, we recommend spending more time on covalent and ionic bonding concepts.",
      priority: "High",
      estimatedTime: "45 minutes",
      difficulty: "Intermediate",
      icon: Target,
      color: "text-destructive"
    },
    {
      type: "Resource",
      title: "Interactive Molecular Visualization",
      description: "Try this 3D molecular modeling tool to better understand chemical structures and reactions.",
      priority: "Medium",
      estimatedTime: "30 minutes",
      difficulty: "Beginner",
      icon: Lightbulb,
      color: "text-accent"
    },
    {
      type: "Practice",
      title: "Kinematics Problem Set",
      description: "Your physics progress shows room for improvement in motion calculations. Here's a targeted practice set.",
      priority: "High",
      estimatedTime: "60 minutes",
      difficulty: "Advanced",
      icon: BookOpen,
      color: "text-primary"
    },
    {
      type: "Review",
      title: "Biology Cell Structure Recap",
      description: "It's been 5 days since you studied cell organelles. A quick review session will help reinforce your memory.",
      priority: "Low",
      estimatedTime: "20 minutes",
      difficulty: "Beginner",
      icon: Brain,
      color: "text-success"
    }
  ];

  const getPriorityColor = (priority: string) => {
    switch (priority) {
      case "High": return "bg-destructive text-destructive-foreground";
      case "Medium": return "bg-accent text-accent-foreground";
      case "Low": return "bg-success text-success-foreground";
      default: return "bg-muted text-muted-foreground";
    }
  };

  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-success/10 text-success border-success/20";
      case "Intermediate": return "bg-accent/10 text-accent border-accent/20";
      case "Advanced": return "bg-destructive/10 text-destructive border-destructive/20";
      default: return "bg-muted/10 text-muted-foreground border-muted/20";
    }
  };

  return (
    <section id="recommendations" className="py-16 bg-gradient-card">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <div className="inline-flex items-center gap-2 bg-gradient-primary rounded-full px-4 py-2 mb-6 shadow-glow">
              <Brain className="w-4 h-4 text-primary-foreground" />
              <span className="text-sm font-medium text-primary-foreground">AI-Powered Insights</span>
            </div>
            
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Personalized Study Recommendations
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Our AI analyzes your learning patterns, performance data, and study habits to provide 
              intelligent recommendations that accelerate your progress.
            </p>
          </div>

          {/* AI Insights Summary */}
          <Card className="p-6 mb-8 bg-gradient-secondary/5 border-primary/20 shadow-elevated">
            <div className="flex items-start gap-4">
              <div className="p-3 bg-gradient-primary rounded-lg shadow-glow">
                <Star className="w-6 h-6 text-primary-foreground" />
              </div>
              <div className="flex-1">
                <h3 className="text-lg font-semibold mb-2 text-foreground">Today's AI Insight</h3>
                <p className="text-muted-foreground mb-4">
                  You learn 23% faster when studying chemistry concepts in the morning. 
                  Your retention rate improves significantly with spaced repetition every 3 days.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary" className="bg-primary/10 text-primary border-primary/20">
                    Optimal Study Time: 9:00 AM - 11:00 AM
                  </Badge>
                  <Badge variant="secondary" className="bg-accent/10 text-accent border-accent/20">
                    Preferred Learning Style: Visual + Practice
                  </Badge>
                </div>
              </div>
            </div>
          </Card>

          {/* Recommendations Grid */}
          <div className="grid gap-6 mb-8">
            {recommendations.map((rec, index) => (
              <Card key={index} className="p-6 bg-card border-0 shadow-soft hover:shadow-elevated transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-primary rounded-lg shadow-soft group-hover:shadow-glow transition-all duration-300`}>
                    <rec.icon className={`w-5 h-5 text-primary-foreground`} />
                  </div>
                  
                  <div className="flex-1">
                    <div className="flex items-start justify-between mb-3">
                      <div>
                        <div className="flex items-center gap-2 mb-1">
                          <Badge variant="outline" className="text-xs">
                            {rec.type}
                          </Badge>
                          <Badge className={getPriorityColor(rec.priority)}>
                            {rec.priority} Priority
                          </Badge>
                        </div>
                        <h3 className="text-lg font-semibold text-foreground">{rec.title}</h3>
                      </div>
                    </div>
                    
                    <p className="text-muted-foreground mb-4">{rec.description}</p>
                    
                    <div className="flex items-center justify-between">
                      <div className="flex items-center gap-4 text-sm text-muted-foreground">
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4" />
                          {rec.estimatedTime}
                        </div>
                        <Badge variant="outline" className={getDifficultyColor(rec.difficulty)}>
                          {rec.difficulty}
                        </Badge>
                      </div>
                      
                      <Button variant="ai" size="sm" className="group/btn">
                        Start Now
                        <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                      </Button>
                    </div>
                  </div>
                </div>
              </Card>
            ))}
          </div>

          {/* Action buttons */}
          <div className="text-center">
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg">
                Generate New Recommendations
              </Button>
              <Button variant="outline" size="lg" className="hover:shadow-soft">
                Customize AI Settings
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AIRecommendations;