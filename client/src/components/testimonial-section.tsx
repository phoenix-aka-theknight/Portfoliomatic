import React from "react";
import { Quote, User } from "lucide-react";
import { motion } from "framer-motion";

export function TestimonialSection() {
  return (
    <section className="section-spacing bg-gradient-to-r from-primary to-purple-600">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="mb-8"
        >
          <Quote className="text-4xl opacity-50 mb-8 mx-auto" />
        </motion.div>
        
        <motion.blockquote
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-2xl md:text-3xl font-light mb-8 leading-relaxed"
        >
          "Goblin Infotech delivered exceptional results for our fee management system. Their technical expertise and professional approach made the entire process smooth and efficient."
        </motion.blockquote>
        
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          viewport={{ once: true }}
          className="flex items-center justify-center"
        >
          <div className="w-16 h-16 bg-white bg-opacity-20 rounded-full flex items-center justify-center mr-4">
            <User className="text-2xl" />
          </div>
          <div className="text-left">
            <p className="text-xl font-semibold">N. M. Goudar</p>
            <p className="text-lg opacity-90">Educational Institution</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
