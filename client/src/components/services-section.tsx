import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Globe, Smartphone, Paintbrush, Server, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

const services = [
  {
    icon: Globe,
    title: "Custom Websites",
    description: "Responsive, fast-loading websites built with modern technologies and best practices.",
    gradient: "from-blue-500 to-cyan-600",
  },
  {
    icon: Smartphone,
    title: "PWA Applications",
    description: "Progressive Web Apps that work seamlessly across all devices and platforms.",
    gradient: "from-purple-500 to-pink-600",
  },
  {
    icon: Paintbrush,
    title: "UI/UX Design",
    description: "User-centered design solutions that enhance engagement and conversion rates.",
    gradient: "from-emerald-500 to-teal-600",
  },
  {
    icon: Server,
    title: "Hosting & Database",
    description: "Reliable hosting solutions and database management for optimal performance.",
    gradient: "from-orange-500 to-red-600",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="section-spacing bg-gray-50 dark:bg-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Services</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Comprehensive digital solutions tailored to your business needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, index) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="shadow-lg hover:shadow-xl hover:-translate-y-2 transition-all duration-300 h-full">
                <CardContent className="p-8">
                  <div className={`w-16 h-16 bg-gradient-to-r ${service.gradient} rounded-xl flex items-center justify-center mb-6`}>
                    <service.icon className="text-white text-2xl" />
                  </div>
                  <h3 className="text-xl font-semibold mb-4">{service.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-6">
                    {service.description}
                  </p>
                  <button className="text-primary font-medium hover:text-primary/80 transition-colors duration-200 flex items-center">
                    Learn More <ArrowRight className="ml-1 w-4 h-4" />
                  </button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
