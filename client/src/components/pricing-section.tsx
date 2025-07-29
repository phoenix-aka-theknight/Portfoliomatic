import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { Link } from "wouter";

const plans = [
  {
    name: "Basic",
    price: "₹10,000",
    suffix: "+",
    description: "Perfect for small businesses getting started",
    features: [
      "Pre-made templates",
      "Responsive design",
      "Basic SEO optimization",
      "Standard support",
      "5 pages included",
    ],
    buttonText: "Get Started",
    buttonVariant: "outline" as const,
    popular: false,
  },
  {
    name: "Premium",
    price: "Custom",
    suffix: "",
    description: "Tailored solutions for growing businesses",
    features: [
      "Custom design & development",
      "Advanced functionality",
      "AI-powered features",
      "Long-term support",
      "Unlimited pages",
    ],
    buttonText: "Contact Us",
    buttonVariant: "default" as const,
    popular: true,
  },
  {
    name: "Enterprise",
    price: "Custom",
    suffix: "",
    description: "Complete solutions for large organizations",
    features: [
      "Everything in Premium",
      "Bulk project discounts",
      "Priority support",
      "Dedicated project manager",
      "Custom integrations",
    ],
    buttonText: "Contact Sales",
    buttonVariant: "outline" as const,
    popular: false,
  },
];

export function PricingSection() {
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
    <section id="pricing" className="section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Choose Your <span className="gradient-text">Plan</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Flexible pricing options designed to meet businesses of all sizes
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
              className={plan.popular ? "transform scale-105" : ""}
            >
              <Card className={`shadow-lg hover:shadow-xl transition-shadow duration-300 h-full ${
                plan.popular 
                  ? "bg-gradient-to-br from-primary to-purple-600 text-white border-0" 
                  : "bg-card"
              }`}>
                <CardContent className="p-8 flex flex-col h-full">
                  <div className="text-center mb-8">
                    {plan.popular && (
                      <Badge className="bg-white bg-opacity-20 text-white border-0 mb-4">
                        Most Popular
                      </Badge>
                    )}
                    <h3 className="text-2xl font-bold mb-4">{plan.name}</h3>
                    <div className="mb-4">
                      <span className="text-4xl font-bold">{plan.price}</span>
                      {plan.suffix && <span className="text-gray-500">{plan.suffix}</span>}
                    </div>
                    <p className={plan.popular ? "text-primary-100" : "text-gray-600 dark:text-gray-300"}>
                      {plan.description}
                    </p>
                  </div>
                  
                  <ul className="space-y-4 mb-8 flex-grow">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-center">
                        <Check className={`mr-3 w-5 h-5 ${plan.popular ? "text-green-300" : "text-green-500"}`} />
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Link href="/pricing">
                    <Button
                      variant={plan.popular ? "secondary" : plan.buttonVariant}
                      className={`w-full ${
                        plan.popular 
                          ? "bg-white text-primary hover:bg-gray-100" 
                          : plan.buttonVariant === "default"
                          ? "bg-gradient-to-r from-primary to-purple-600 hover:shadow-lg"
                          : ""
                      }`}
                    >
                      {plan.buttonText}
                    </Button>
                  </Link>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
