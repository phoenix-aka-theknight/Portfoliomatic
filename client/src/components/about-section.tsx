import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import { User, Database, Brain, Code, Smartphone, Server } from "lucide-react";
import { motion } from "framer-motion";
import { SiHtml5, SiCss3, SiJavascript, SiReact, SiNodedotjs, SiMysql, SiPython, SiMongodb } from "react-icons/si";

const skills = [
  { name: "HTML5", icon: SiHtml5, color: "text-orange-500" },
  { name: "CSS3", icon: SiCss3, color: "text-blue-500" },
  { name: "JavaScript", icon: SiJavascript, color: "text-yellow-500" },
  { name: "React", icon: SiReact, color: "text-cyan-500" },
  { name: "Node.js", icon: SiNodedotjs, color: "text-green-600" },
  { name: "Python", icon: SiPython, color: "text-blue-600" },
  { name: "MySQL", icon: SiMysql, color: "text-blue-700" },
  { name: "MongoDB", icon: SiMongodb, color: "text-green-500" },
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
                    <Brain className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Md Faadil Shaikh</h3>
                    <p className="text-primary font-medium">Co-Founder & Lead Developer</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expertise in Data Science, Advanced Python, and MERN stack development. 
                  Currently pursuing 3rd year BE in AI/ML, bringing cutting-edge technology solutions to every project.
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
                    <Code className="text-white text-xl" />
                  </div>
                  <div>
                    <h3 className="text-xl font-semibold">Manjunath Giraddi</h3>
                    <p className="text-emerald-500 font-medium">Co-Founder & Frontend Specialist</p>
                  </div>
                </div>
                <p className="text-gray-600 dark:text-gray-300">
                  Expertise in Frontend development, DBMS (MySQL), and Authentication Designs. 
                  Passionate about creating seamless user experiences and secure authentication systems.
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
          <div className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-8 gap-6">
            {skills.map((skill, index) => (
              <motion.div
                key={skill.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                className="text-center"
              >
                <div className="w-16 h-16 bg-white dark:bg-gray-700 rounded-xl flex items-center justify-center mx-auto mb-3 shadow-lg">
                  <skill.icon className={`text-3xl ${skill.color}`} />
                </div>
                <span className="font-medium text-sm">{skill.name}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
