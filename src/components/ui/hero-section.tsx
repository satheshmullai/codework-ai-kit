import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Send, Sparkles, Zap } from "lucide-react";

export const HeroSection = () => {
  const [prompt, setPrompt] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (prompt.trim()) {
      // In a real app, this would trigger the AI builder
      console.log("Building with prompt:", prompt);
    }
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-hero overflow-hidden">
      {/* Background decorative elements */}
      <div className="absolute inset-0 bg-gradient-hero opacity-90" />
      <div className="absolute top-20 left-20 w-72 h-72 bg-primary/10 rounded-full blur-3xl" />
      <div className="absolute bottom-20 right-20 w-96 h-96 bg-accent/10 rounded-full blur-3xl" />
      
      <div className="relative z-10 container mx-auto px-4 text-center">
        <div className="max-w-4xl mx-auto">
          {/* Main heading */}
          <div className="mb-8">
            <h1 className="text-5xl md:text-7xl font-bold mb-6 bg-gradient-to-r from-white to-white/80 bg-clip-text text-transparent">
              Build something{" "}
              <span className="bg-gradient-to-r from-white via-accent-foreground to-white bg-clip-text text-transparent">
                Amazing
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-white/80 mb-8 max-w-2xl mx-auto">
              Create apps and websites by chatting with AI. No coding required.
            </p>
          </div>

          {/* Prompt input card */}
          <Card className="max-w-3xl mx-auto bg-white/95 backdrop-blur-lg border-0 shadow-large p-2">
            <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-2">
              <div className="flex-1 relative">
                <textarea
                  value={prompt}
                  onChange={(e) => setPrompt(e.target.value)}
                  placeholder="Ask CodeWork AI to create a landing page for my..."
                  className="w-full h-16 px-4 py-3 bg-transparent border-0 resize-none focus:outline-none text-foreground placeholder:text-muted-foreground text-lg"
                  rows={2}
                />
              </div>
              <div className="flex items-end gap-2">
                <Button 
                  type="submit" 
                  className="bg-gradient-button text-white border-0 h-12 px-6 hover:opacity-90 transition-smooth"
                  disabled={!prompt.trim()}
                >
                  <Send className="w-4 h-4 mr-2" />
                  Build
                </Button>
              </div>
            </form>
            
            {/* Quick action badges */}
            <div className="flex flex-wrap gap-2 mt-4 px-2">
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-smooth">
                <Sparkles className="w-3 h-3 mr-1" />
                Public
              </Badge>
              <Badge variant="secondary" className="cursor-pointer hover:bg-secondary/80 transition-smooth">
                <Zap className="w-3 h-3 mr-1" />
                Database
              </Badge>
            </div>
          </Card>

          {/* Feature highlights */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6 max-w-3xl mx-auto">
            {[
              { icon: "⚡", title: "Lightning Fast", desc: "Build in seconds" },
              { icon: "🎨", title: "Beautiful Design", desc: "AI-powered aesthetics" },
              { icon: "📱", title: "Fully Responsive", desc: "Works on all devices" }
            ].map((feature, idx) => (
              <div key={idx} className="text-center">
                <div className="text-3xl mb-2">{feature.icon}</div>
                <h3 className="text-white font-semibold mb-1">{feature.title}</h3>
                <p className="text-white/60 text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};