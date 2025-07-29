import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ExternalLink } from "lucide-react";
import { motion } from "framer-motion";

const projects = [
  {
    title: "Fee Receipt Management System",
    description: "Comprehensive digital solution for educational institutions to manage fee collections and generate receipts automatically.",
    image: "https://images.unsplash.com/photo-1551288049-bebda4e38f71?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Node.js", "MongoDB"],
    tagColors: ["bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200", "bg-purple-100 text-purple-800 dark:bg-purple-900 dark:text-purple-200"],
  },
  {
    title: "E-Commerce Platform",
    description: "Full-featured online store with payment integration, inventory management, and responsive design.",
    image: "https://images.unsplash.com/photo-1556742049-0cfed4f6a45d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["React", "Stripe", "Express"],
    tagColors: ["bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", "bg-yellow-100 text-yellow-800 dark:bg-yellow-900 dark:text-yellow-200", "bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-200"],
  },
  {
    title: "Corporate Website",
    description: "Professional business website with content management system and lead generation features.",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=800&h=400",
    tags: ["Next.js", "CMS", "SEO"],
    tagColors: ["bg-blue-100 text-blue-800 dark:bg-blue-900 dark:text-blue-200", "bg-gray-100 text-gray-800 dark:bg-gray-900 dark:text-gray-200", "bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-200"],
  },
];

export function PortfolioSection() {
  return (
    <section id="portfolio" className="section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Our <span className="gradient-text">Portfolio</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Showcasing our recent projects and successful client collaborations
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              viewport={{ once: true }}
            >
              <Card className="overflow-hidden shadow-lg hover:shadow-xl transition-shadow duration-300">
                <img
                  src={project.image}
                  alt={project.title}
                  className="w-full h-48 object-cover"
                />
                <CardContent className="p-6">
                  <h3 className="text-xl font-semibold mb-2">{project.title}</h3>
                  <p className="text-gray-600 dark:text-gray-300 mb-4">
                    {project.description}
                  </p>
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tags.map((tag, tagIndex) => (
                      <Badge
                        key={tag}
                        variant="secondary"
                        className={project.tagColors[tagIndex]}
                      >
                        {tag}
                      </Badge>
                    ))}
                  </div>
                  <Button variant="ghost" className="text-primary hover:text-primary/80 p-0">
                    View Project <ExternalLink className="ml-1 w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
