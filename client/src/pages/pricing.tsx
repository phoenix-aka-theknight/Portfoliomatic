import React from "react";
import { Navigation } from "@/components/navigation";
import { Footer } from "@/components/footer";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const basicFeatures = [
  "Pre-made responsive templates",
  "Mobile-first design",
  "Basic SEO optimization",
  "Contact form integration",
  "Up to 5 pages",
  "1 month of support",
  "Basic hosting setup guidance",
  "Google Analytics integration"
];

const premiumTiers = [
  {
    name: "Startup Package",
    price: "₹25,000 - ₹50,000",
    description: "Perfect for new businesses launching online",
    techStack: ["React/Vue.js", "Node.js/Express", "MongoDB/PostgreSQL"],
    features: [
      "Custom responsive design",
      "Modern UI/UX",
      "Content Management System",
      "SEO optimization",
      "Contact forms & lead capture",
      "Social media integration",
      "6 months support"
    ],
    integrations: ["Google Analytics", "Social Media APIs", "Email Marketing"]
  },
  {
    name: "Business Solution",
    price: "₹50,000 - ₹1,00,000",
    description: "Comprehensive solution for established businesses",
    techStack: ["React/Next.js", "Node.js", "Database", "Cloud Services"],
    features: [
      "Advanced custom development",
      "User authentication system",
      "Admin dashboard",
      "Payment gateway integration",
      "Advanced SEO & performance",
      "API integrations",
      "12 months support"
    ],
    integrations: ["Payment Gateways", "CRM Systems", "Email Services", "Analytics"]
  },
  {
    name: "Enterprise Platform",
    price: "₹1,00,000+",
    description: "Full-scale platform for large organizations",
    techStack: ["Microservices", "Cloud Architecture", "Advanced Databases"],
    features: [
      "Scalable architecture",
      "Multi-user systems",
      "Advanced security",
      "Custom integrations",
      "Performance optimization",
      "24/7 monitoring",
      "Dedicated support team"
    ],
    integrations: ["Enterprise APIs", "Third-party Services", "Custom Integrations", "Cloud Services"]
  }
];

const addOnServices = [
  { name: "PWA Development", price: "₹15,000 - ₹30,000" },
  { name: "Mobile App (React Native)", price: "₹40,000 - ₹80,000" },
  { name: "AI/ML Integration", price: "₹20,000 - ₹60,000" },
  { name: "Advanced Analytics", price: "₹10,000 - ₹25,000" },
  { name: "Custom API Development", price: "₹15,000 - ₹40,000" },
  { name: "Database Migration", price: "₹8,000 - ₹20,000" }
];

export default function PricingPage() {
  const scrollToContact = () => {
    const element = document.getElementById("contact");
    if (element) {
      const offsetTop = element.offsetTop - 80;
      window.scrollTo({
        top: offsetTop,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen">
      <Navigation />
      
      {/* Header */}
      <section className="pt-24 pb-12 bg-gradient-to-br from-primary-50 to-purple-50 dark:from-gray-900 dark:to-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center"
          >
            <Link href="/" className="inline-flex items-center text-primary hover:text-primary/80 mb-6">
              <ArrowLeft className="w-4 h-4 mr-2" />
              Back to Home
            </Link>
            <h1 className="text-4xl md:text-5xl font-bold mb-6">
              Detailed <span className="gradient-text">Pricing</span>
            </h1>
            <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
              Transparent pricing based on your requirements, technology stack, and integrations
            </p>
          </motion.div>
        </div>
      </section>

      {/* Basic Tier */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="mb-16"
          >
            <h2 className="text-3xl font-bold text-center mb-8">
              Basic Package - <span className="gradient-text">₹10,000 - ₹15,000</span>
            </h2>
            <Card className="max-w-4xl mx-auto shadow-lg">
              <CardContent className="p-8">
                <div className="grid md:grid-cols-2 gap-8">
                  <div>
                    <h3 className="text-xl font-semibold mb-4">What's Included</h3>
                    <ul className="space-y-3">
                      {basicFeatures.map((feature) => (
                        <li key={feature} className="flex items-center">
                          <Check className="mr-3 w-5 h-5 text-green-500" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold mb-4">Tech Stack</h3>
                    <div className="space-y-2 mb-6">
                      <Badge variant="secondary">HTML5/CSS3</Badge>
                      <Badge variant="secondary" className="ml-2">JavaScript</Badge>
                      <Badge variant="secondary" className="ml-2">Bootstrap/Tailwind</Badge>
                    </div>
                    <Button 
                      onClick={scrollToContact}
                      className="w-full bg-gradient-to-r from-primary to-purple-600"
                    >
                      Get Started with Basic
                    </Button>
                  </div>
                </div>
              </CardContent>
            </Card>
          </motion.div>
        </div>
      </section>

      {/* Premium Tiers */}
      <section className="py-16 bg-gray-50 dark:bg-gray-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Premium <span className="gradient-text">Custom Solutions</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Tailored pricing based on complexity and requirements
            </p>
          </motion.div>

          <div className="grid lg:grid-cols-3 gap-8">
            {premiumTiers.map((tier, index) => (
              <motion.div
                key={tier.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300 h-full">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="text-center mb-6">
                      <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                      <div className="text-2xl font-bold text-primary mb-2">{tier.price}</div>
                      <p className="text-gray-600 dark:text-gray-300">{tier.description}</p>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Tech Stack</h4>
                      <div className="flex flex-wrap gap-2">
                        {tier.techStack.map((tech) => (
                          <Badge key={tech} variant="outline">{tech}</Badge>
                        ))}
                      </div>
                    </div>

                    <div className="mb-6 flex-grow">
                      <h4 className="font-semibold mb-3">Features</h4>
                      <ul className="space-y-2">
                        {tier.features.map((feature) => (
                          <li key={feature} className="flex items-center text-sm">
                            <Check className="mr-2 w-4 h-4 text-green-500" />
                            <span>{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>

                    <div className="mb-6">
                      <h4 className="font-semibold mb-3">Integrations</h4>
                      <div className="flex flex-wrap gap-1">
                        {tier.integrations.map((integration) => (
                          <Badge key={integration} variant="secondary" className="text-xs">
                            {integration}
                          </Badge>
                        ))}
                      </div>
                    </div>

                    <Button 
                      onClick={scrollToContact}
                      variant="outline"
                      className="w-full"
                    >
                      Get Quote
                    </Button>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Add-on Services */}
      <section className="py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl font-bold mb-4">
              Add-on <span className="gradient-text">Services</span>
            </h2>
            <p className="text-xl text-gray-600 dark:text-gray-300">
              Enhance your project with additional features and services
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {addOnServices.map((service, index) => (
              <motion.div
                key={service.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
                  <CardContent className="p-6 text-center">
                    <h3 className="text-lg font-semibold mb-2">{service.name}</h3>
                    <p className="text-primary font-bold">{service.price}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="py-16 bg-gradient-to-r from-primary to-purple-600 text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <h2 className="text-3xl font-bold mb-4">Ready to Get Started?</h2>
            <p className="text-xl mb-8 opacity-90">
              Contact us for a detailed quote based on your specific requirements
            </p>
            <Button 
              onClick={scrollToContact}
              variant="secondary"
              size="lg"
              className="bg-white text-primary hover:bg-gray-100"
            >
              Contact Us for Quote
            </Button>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
}