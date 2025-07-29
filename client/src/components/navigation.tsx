import React, { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { useTheme } from "@/components/theme-provider";
import { Code, Moon, Sun, Menu, X } from "lucide-react";
import { Link, useLocation } from "wouter";

const navItems = [
  { href: "#home", label: "Home", isSection: true },
  { href: "#about", label: "About", isSection: true },
  { href: "#services", label: "Services", isSection: true },
  { href: "#portfolio", label: "Portfolio", isSection: true },
  { href: "/pricing", label: "Pricing", isSection: false },
  { href: "#contact", label: "Contact", isSection: true },
];

export function Navigation() {
  const [activeSection, setActiveSection] = useState("home");
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const { theme, toggleTheme } = useTheme();
  const [location] = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      // Update active section based on scroll position
      const sections = navItems.map(item => item.href.slice(1));
      const current = sections.find(section => {
        const element = document.getElementById(section);
        if (element) {
          const rect = element.getBoundingClientRect();
          return rect.top <= 100 && rect.bottom >= 100;
        }
        return false;
      });
      if (current) setActiveSection(current);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavigation = (item: typeof navItems[0]) => {
    if (item.isSection) {
      const element = document.querySelector(item.href);
      if (element) {
        const offsetTop = (element as HTMLElement).offsetTop - 80;
        window.scrollTo({
          top: offsetTop,
          behavior: "smooth",
        });
      }
    } else {
      // For non-section links like /pricing, use Link navigation
      window.location.href = item.href;
    }
    setIsMobileMenuOpen(false);
  };

  return (
    <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
      isScrolled ? "py-2" : "py-4"
    } glass-effect`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <div className="flex items-center space-x-2">
            <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
              <Code className="text-white text-lg" />
            </div>
            <span className="text-xl font-bold gradient-text">Goblin Infotech</span>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              item.isSection ? (
                <button
                  key={item.href}
                  onClick={() => handleNavigation(item)}
                  className={`transition-colors duration-200 ${
                    activeSection === item.href.slice(1)
                      ? "text-primary"
                      : "hover:text-primary"
                  }`}
                >
                  {item.label}
                </button>
              ) : (
                <Link key={item.href} href={item.href}>
                  <button className={`transition-colors duration-200 ${
                    location === item.href ? "text-primary" : "hover:text-primary"
                  }`}>
                    {item.label}
                  </button>
                </Link>
              )
            ))}
            
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
          </div>

          {/* Mobile Menu */}
          <div className="md:hidden flex items-center space-x-4">
            <Button
              variant="ghost"
              size="icon"
              onClick={toggleTheme}
              className="rounded-lg"
            >
              {theme === "dark" ? <Sun className="h-5 w-5" /> : <Moon className="h-5 w-5" />}
            </Button>
            
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="rounded-lg">
                  <Menu className="h-5 w-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-[300px] sm:w-[400px]">
                <div className="flex flex-col space-y-4 mt-8">
                  {navItems.map((item) => (
                    item.isSection ? (
                      <button
                        key={item.href}
                        onClick={() => handleNavigation(item)}
                        className={`text-left p-2 rounded-md transition-colors duration-200 ${
                          activeSection === item.href.slice(1)
                            ? "text-primary bg-primary/10"
                            : "hover:bg-accent"
                        }`}
                      >
                        {item.label}
                      </button>
                    ) : (
                      <Link key={item.href} href={item.href}>
                        <button className={`text-left p-2 rounded-md transition-colors duration-200 w-full ${
                          location === item.href ? "text-primary bg-primary/10" : "hover:bg-accent"
                        }`}>
                          {item.label}
                        </button>
                      </Link>
                    )
                  ))}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </nav>
  );
}
