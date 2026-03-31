"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";

export const Footer = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Format the email content
    const subject = encodeURIComponent(`Portfolio Contact from ${formData.name}`);
    const body = encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    );
    
    // Open the user's default email client
    window.location.href = `mailto:jeswinjestin203@gmail.com?subject=${subject}&body=${body}`;
    
    // Reset form and state after a brief delay
    setTimeout(() => {
      setFormData({ name: "", email: "", message: "" });
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  return (
    <footer className="w-full bg-neutral-950 text-white relative overflow-hidden py-32 px-6 md:px-12 lg:px-24" id="contact">
      {/* Background Glow */}
      <div className="absolute bottom-0 right-0 w-[800px] h-[800px] bg-red-500/5 blur-[150px] rounded-full pointer-events-none translate-y-1/2 translate-x-1/2" />
      
      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 relative z-10">
        
        {/* Left Side Connect */}
        <div className="flex flex-col justify-between">
          <div>
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-5xl md:text-7xl lg:text-9xl font-light tracking-tighter mb-8"
            >
              Let's <br/>
              <span className="text-white/40">Talk.</span>
            </motion.h2>

            <a href="mailto:jeswinjestin203@gmail.com" className="text-xl md:text-3xl font-light hover:text-white/70 transition-colors inline-block mb-12">
              jeswinjestin203@gmail.com
            </a>
          </div>

          {/* Socials */}
          <div className="flex gap-8 font-mono text-sm tracking-widest uppercase">
            <motion.a 
              href="#" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="hover:text-amber-500 transition-colors flex items-center gap-2 group"
            >
              LinkedIn <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">↗</span>
            </motion.a>
            
            <motion.a 
              href="#" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="hover:text-blue-500 transition-colors flex items-center gap-2 group"
            >
              Behance <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">↗</span>
            </motion.a>

            <motion.a 
              href="#" 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.3 }}
              className="hover:text-purple-500 transition-colors flex items-center gap-2 group"
            >
              GitHub <span className="opacity-0 group-hover:opacity-100 transition-opacity -translate-x-2 group-hover:translate-x-0">↗</span>
            </motion.a>
          </div>
        </div>

        {/* Right Side Form */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.2 }}
          className="flex flex-col justify-end w-full"
        >
          <form className="flex flex-col gap-6 w-full" onSubmit={handleSubmit}>
            <div className="flex flex-col md:flex-row gap-6">
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="name" className="text-xs text-white/40 uppercase tracking-widest font-mono">Name</label>
                <input 
                  type="text" 
                  id="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="John Doe"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors font-light"
                  required
                />
              </div>
              <div className="flex flex-col gap-2 w-full">
                <label htmlFor="email" className="text-xs text-white/40 uppercase tracking-widest font-mono">Email</label>
                <input 
                  type="email" 
                  id="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="john@example.com"
                  className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors font-light"
                  required
                />
              </div>
            </div>
            
            <div className="flex flex-col gap-2 w-full">
              <label htmlFor="message" className="text-xs text-white/40 uppercase tracking-widest font-mono">Message</label>
              <textarea 
                id="message"
                value={formData.message}
                onChange={handleChange}
                placeholder="What are you working on?"
                rows={4}
                className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder:text-white/20 focus:outline-none focus:border-white/30 focus:bg-white/10 transition-colors font-light resize-none"
                required
              />
            </div>

            <button 
              type="submit"
              disabled={isSubmitting}
              className="group self-start px-8 py-4 bg-white text-black font-medium rounded-xl hover:bg-neutral-200 transition-colors flex items-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Sending..." : "Send"}
              {!isSubmitting && <span className="transform transition-transform group-hover:translate-x-1">→</span>}
            </button>
          </form>
        </motion.div>
      </div>
      
      <div className="max-w-7xl mx-auto mt-32 pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center text-xs text-white/30 uppercase tracking-widest gap-4">
        <span>© 2026 Jeswin Thomas Jestin. All rights reserved.</span>
        <span>Product Associate Portfolio</span>
      </div>
    </footer>
  );
};
