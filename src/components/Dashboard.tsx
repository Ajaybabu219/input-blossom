import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import { BarChart3, TrendingUp, Target, Clock, BookOpen, Brain, CheckCircle2 } from "lucide-react";

const Dashboard = () => {
  const studyStats = [
    { label: "Documents Processed", value: "24", icon: BookOpen, color: "text-primary" },
    { label: "Assessments Generated", value: "12", icon: Target, color: "text-accent" },
    { label: "Study Hours", value: "18.5", icon: Clock, color: "text-success" },
    { label: "AI Recommendations", value: "47", icon: Brain, color: "text-primary-glow" },
  ];

  const recentActivity = [
    { action: "Completed Biology Assessment", time: "2 hours ago", score: 85 },
    { action: "Uploaded Chemistry Notes", time: "5 hours ago", score: null },
    { action: "Generated Physics Study Plan", time: "1 day ago", score: null },
    { action: "Completed Math Quiz", time: "2 days ago", score: 92 },
  ];

  const currentProgress = [
    { subject: "Biology", progress: 85, total: 100 },
    { subject: "Chemistry", progress: 60, total: 100 },
    { subject: "Physics", progress: 45, total: 100 },
    { subject: "Mathematics", progress: 78, total: 100 },
  ];

  return (
    <section id="dashboard" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-foreground">
              Your Learning Dashboard
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Track your progress, view AI-generated insights, and monitor your learning journey 
              with comprehensive analytics and personalized recommendations.
            </p>
          </div>

          {/* Stats Overview */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
            {studyStats.map((stat, index) => (
              <Card key={index} className="p-6 bg-gradient-card border-0 shadow-soft hover:shadow-elevated transition-all duration-300">
                <div className="flex items-start justify-between">
                  <div>
                    <p className="text-sm text-muted-foreground mb-1">{stat.label}</p>
                    <p className="text-2xl font-bold text-foreground">{stat.value}</p>
                  </div>
                  <div className={`p-2 bg-gradient-primary rounded-lg shadow-soft`}>
                    <stat.icon className={`w-5 h-5 text-primary-foreground`} />
                  </div>
                </div>
              </Card>
            ))}
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            {/* Progress Overview */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-gradient-secondary rounded-lg shadow-soft">
                  <TrendingUp className="w-5 h-5 text-primary-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Learning Progress</h3>
              </div>
              
              <div className="space-y-4">
                {currentProgress.map((item, index) => (
                  <div key={index} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium text-foreground">{item.subject}</span>
                      <span className="text-sm text-muted-foreground">{item.progress}%</span>
                    </div>
                    <Progress value={item.progress} className="h-2" />
                  </div>
                ))}
              </div>

              <Button variant="ai" className="w-full mt-6">
                <BarChart3 className="w-4 h-4" />
                View Detailed Analytics
              </Button>
            </Card>

            {/* Recent Activity */}
            <Card className="p-6 bg-gradient-card border-0 shadow-soft">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-2 bg-accent rounded-lg shadow-soft">
                  <Clock className="w-5 h-5 text-accent-foreground" />
                </div>
                <h3 className="text-xl font-semibold text-foreground">Recent Activity</h3>
              </div>
              
              <div className="space-y-4">
                {recentActivity.map((activity, index) => (
                  <div key={index} className="flex items-center gap-3 p-3 rounded-lg border border-border/50 hover:bg-muted/30 transition-colors">
                    <CheckCircle2 className="w-4 h-4 text-success" />
                    <div className="flex-1">
                      <p className="text-sm font-medium text-foreground">{activity.action}</p>
                      <p className="text-xs text-muted-foreground">{activity.time}</p>
                    </div>
                    {activity.score && (
                      <span className="text-sm font-bold text-success">{activity.score}%</span>
                    )}
                  </div>
                ))}
              </div>

              <Button variant="outline" className="w-full mt-6 hover:shadow-soft">
                View All Activity
              </Button>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Dashboard;