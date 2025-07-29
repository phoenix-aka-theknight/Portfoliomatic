import React from "react";
import { Code, Linkedin, Github, Twitter } from "lucide-react";

const services = ["Custom Websites", "PWA Development", "UI/UX Design", "Hosting & Support"];
const companyLinks = [
  { label: "About Us", href: "#about" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Pricing", href: "#pricing" },
  { label: "Contact", href: "#contact" },
];

const socialLinks = [
  { icon: Linkedin, href: "#" },
  { icon: Github, href: "#" },
  { icon: Twitter, href: "#" },
];

export function Footer() {
  const scrollToSection = (href: string) => {
    const element = document.querySelector(href);
    if (element) {
      const offsetTop = (element as HTMLElement).offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <footer className="bg-gray-900 text-white section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          <div className="md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-10 h-10 bg-gradient-to-r from-primary to-purple-600 rounded-lg flex items-center justify-center">
                <Code className="text-white text-lg" />
              </div>
              <span className="text-xl font-bold">Goblin Infotech</span>
            </div>
            <p className="text-gray-300 mb-4 max-w-md">
              Professional web development solutions based in Vidyanagar, Hubli, Karnataka. 
              We bring your digital vision to life with modern technology and creative design.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="text-gray-400 hover:text-white transition-colors duration-200"
                >
                  <social.icon className="text-xl" />
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2 text-gray-300">
              {services.map((service) => (
                <li key={service}>
                  <a href="#" className="hover:text-white transition-colors duration-200">
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2 text-gray-300">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <button
                    onClick={() => scrollToSection(link.href)}
                    className="hover:text-white transition-colors duration-200 text-left"
                  >
                    {link.label}
                  </button>
                </li>
              ))}
            </ul>
          </div>
        </div>
        
        <div className="border-t border-gray-800 pt-8 text-center text-gray-400">
          <p>&copy; 2024 Goblin Infotech. All rights reserved. | Vidyanagar, Hubli, Karnataka</p>
        </div>
      </div>
    </footer>
  );
}
