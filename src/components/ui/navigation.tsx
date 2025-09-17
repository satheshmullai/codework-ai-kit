import { Button } from "@/components/ui/button";
import codeworkLogo from "@/assets/codework-logo.png";

export const Navigation = () => {
  const navItems = [
    { label: "Community", href: "#community" },
    { label: "Pricing", href: "#pricing" },
    { label: "Enterprise", href: "#enterprise" },
    { label: "Learn", href: "#learn" },
    { label: "Launched", href: "#launched" },
  ];

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/80 backdrop-blur-lg border-b border-border/50">
      <div className="container mx-auto px-4">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <div className="flex items-center gap-3">
            <img 
              src={codeworkLogo} 
              alt="CodeWork AI Builder" 
              className="w-8 h-8 object-contain"
            />
            <span className="text-xl font-bold bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              CodeWork
            </span>
          </div>

          {/* Navigation items */}
          <div className="hidden md:flex items-center gap-8">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-foreground/80 hover:text-foreground transition-smooth text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>

          {/* Action buttons */}
          <div className="flex items-center gap-3">
            <Button variant="ghost" className="hidden sm:flex">
              Log in
            </Button>
            <Button className="bg-gradient-button text-white border-0 hover:opacity-90 transition-smooth">
              Get started
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
};