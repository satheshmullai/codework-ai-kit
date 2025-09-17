import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink, Heart, Users } from "lucide-react";

interface Project {
  id: string;
  title: string;
  category: string;
  description: string;
  image: string;
  remixes: number;
  likes: number;
  author: {
    name: string;
    avatar: string;
  };
}

const mockProjects: Project[] = [
  {
    id: "1",
    title: "modern-dashboard-app",
    category: "B2B App",
    description: "Beautiful analytics dashboard with real-time data visualization",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&h=600&fit=crop",
    remixes: 15420,
    likes: 892,
    author: {
      name: "Sarah Chen",
      avatar: "https://images.unsplash.com/photo-1494790108755-2616b612b8c5?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: "2", 
    title: "ai-landing-page",
    category: "Website",
    description: "Stunning landing page for AI startups with interactive animations",
    image: "https://images.unsplash.com/photo-1558655146-d09347e92766?w=800&h=600&fit=crop",
    remixes: 23680,
    likes: 1240,
    author: {
      name: "Alex Kim",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: "3",
    title: "ecommerce-store-template",
    category: "Consumer App", 
    description: "Full-featured e-commerce platform with payment integration",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?w=800&h=600&fit=crop",
    remixes: 18930,
    likes: 756,
    author: {
      name: "Maria Rodriguez",
      avatar: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: "4",
    title: "crypto-portfolio-tracker",
    category: "Personal",
    description: "Track your crypto investments with beautiful charts and alerts",
    image: "https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=800&h=600&fit=crop",
    remixes: 12340,
    likes: 634,
    author: {
      name: "David Park",
      avatar: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: "5",
    title: "social-media-scheduler",
    category: "Internal Tools",
    description: "Manage and schedule posts across multiple social platforms",
    image: "https://images.unsplash.com/photo-1611224923853-80b023f02d71?w=800&h=600&fit=crop",
    remixes: 9870,
    likes: 445,
    author: {
      name: "Emma Wilson",
      avatar: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=100&h=100&fit=crop&crop=face"
    }
  },
  {
    id: "6",
    title: "recipe-sharing-platform",
    category: "Consumer App",
    description: "Share and discover amazing recipes with the community",
    image: "https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&h=600&fit=crop",
    remixes: 16750,
    likes: 823,
    author: {
      name: "James Mitchell",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&h=100&fit=crop&crop=face"
    }
  }
];

const categories = [
  "Popular",
  "Discover", 
  "Internal Tools",
  "Website",
  "Personal",
  "Consumer App",
  "B2B App",
  "Prototype"
];

export const ProjectShowcase = () => {
  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4 bg-gradient-to-r from-foreground to-foreground/70 bg-clip-text text-transparent">
            From the Community
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Discover amazing projects built by developers around the world using CodeWork AI Builder
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <Button
              key={category}
              variant={category === "Popular" ? "default" : "outline"}
              className={category === "Popular" ? "bg-gradient-button text-white border-0" : ""}
            >
              {category}
            </Button>
          ))}
          <Button variant="outline" className="ml-4">
            View All
          </Button>
        </div>

        {/* Projects grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {mockProjects.map((project) => (
            <Card key={project.id} className="group overflow-hidden border-card-border hover:shadow-medium transition-all duration-300 hover:-translate-y-1">
              <div className="relative overflow-hidden">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <Button
                  size="sm"
                  className="absolute top-3 right-3 bg-white/90 text-foreground hover:bg-white opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                >
                  <ExternalLink className="w-4 h-4" />
                </Button>
              </div>
              
              <CardContent className="p-6">
                <div className="flex items-center gap-3 mb-3">
                  <img
                    src={project.author.avatar}
                    alt={project.author.name}
                    className="w-8 h-8 rounded-full object-cover"
                  />
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground truncate">
                      {project.title}
                    </h3>
                  </div>
                </div>

                <Badge variant="secondary" className="mb-3">
                  {project.category}
                </Badge>

                <p className="text-muted-foreground text-sm mb-4 line-clamp-2">
                  {project.description}
                </p>

                <div className="flex items-center justify-between text-sm">
                  <div className="flex items-center gap-4 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Users className="w-4 h-4" />
                      <span>{project.remixes.toLocaleString()} Remixes</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Heart className="w-4 h-4" />
                      <span>{project.likes}</span>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>

        {/* Load more */}
        <div className="text-center mt-12">
          <Button variant="outline" size="lg">
            Load More Projects
          </Button>
        </div>
      </div>
    </section>
  );
};