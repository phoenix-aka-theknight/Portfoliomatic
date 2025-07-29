import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Bus, Palette } from "lucide-react";
import { motion } from "framer-motion";

const skills = [
  { name: "HTML5", icon: "fab fa-html5", color: "bg-orange-500" },
  { name: "CSS3", icon: "fab fa-css3-alt", color: "bg-blue-500" },
  { name: "JavaScript", icon: "fab fa-js", color: "bg-yellow-500" },
  { name: "React", icon: "fab fa-react", color: "bg-cyan-500" },
  { name: "Node.js", icon: "fab fa-node-js", color: "bg-green-600" },
  { name: "Databases", icon: "fas fa-database", color: "bg-gray-800" },
];

export function AboutSection() {
  return (
    <section id="about" className="section-spacing">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Meet Our <span className="gradient-text">Expert Team</span>
          </h2>
          <p className="text-xl text-gray-600 dark:text-gray-300 max-w-3xl mx-auto">
            Passionate developers and designers committed to delivering exceptional digital experiences
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-12 mb-16">
          {/* Founder Cards */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-primary to-purple-600 rounded-full flex items-center justify-center mr-4">
                    <Bus className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Founder Name 1</h3>
                    <p className="text-primary font-medium">Co-Founder & Lead Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expert in full-stack development with 5+ years of experience in modern web technologies. 
                  Specializes in React, Node.js, and cloud solutions.
                </p>
              </CardContent>
            </Card>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Card className="shadow-lg hover:shadow-xl transition-shadow duration-300">
              <CardContent className="p-8">
                <div className="flex items-center mb-6">
                  <div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-teal-600 rounded-full flex items-center justify-center mr-4">
                    <Palette className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Founder Name 2</h3>
                    <p className="text-emerald-500 font-medium">Co-Founder & UI/UX Designer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Creative designer with expertise in user experience and interface design. 
                  Passionate about creating intuitive and beautiful digital experiences.
                </p>
              </CardContent>
            </Card>
          </motion.div>
        </div>

        {/* Skills Section */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="bg-gradient-to-r from-primary-50 to-purple-50 dark:from-gray-800 dark:to-gray-700 rounded-2xl p-8"
        >
          <h3 className="text-2xl font-bold text-center mb-8">
            Our Technical <span className="gradient-text">Expertise</span>
          </h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-6 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className={`w-16 h-16 ${skill.color} rounded-xl flex items-center justify-center mx-auto mb-3`}>
                  <i className={`${skill.icon} text-white text-2xl`}></i>
                </div>
                <span className="font-medium">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
