import React from "react";
import { Button } from "@/components/ui/button";
import { Rocket, Play } from "lucide-react";
import { motion } from "framer-motion";

export function HeroSection() {
  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <section id="home" className="pt-16 section-spacing bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6">
              Professional{" "}
              <span className="gradient-text">Web Solutions</span>{" "}
              for Modern Businesses
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 mb-8 leading-relaxed">
              Based in Vidyanagar, Hubli, Karnataka, Goblin Infotech delivers cutting-edge web development, 
              PWA applications, and comprehensive digital solutions to help your business thrive online.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button
                size="lg"
                onClick={() => scrollToSection("contact")}
                className="bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg transform hover:-translate-y-1 transition-all duration-200"
              >
                <Rocket className="w-4 h-4 mr-2" />
                Get Started
              </Button>
              <Button
                size="lg"
                variant="outline"
                onClick={() => scrollToSection("portfolio")}
                className="border-2 border-primary text-primary hover:bg-primary hover:text-white transition-all duration-200"
              >
                <Play className="w-4 h-4 mr-2" />
                View Portfolio
              </Button>
            </div>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="animate-float"
          >
            <img
              src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=600"
              alt="Modern workspace with computers and coding setup"
              className="rounded-2xl shadow-2xl w-full h-auto"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
