import React, { useState } from "react";
import { motion } from "framer-motion";

const ContactPage = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
    services: []
  });
  
  const [errors, setErrors] = useState({});
  
  const services = [
    "Brand Strategy",
    "Web Design",
    "UI/UX Design",
    "Digital Marketing",
    "Content Creation",
    "App Development"
  ];
  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({
      ...prev,
      [name]: value
    }));
    
    // Clear error when user starts typing
    if (errors[name]) {
      setErrors(prev => ({
        ...prev,
        [name]: ""
      }));
    }
  };
  
  const handleServiceToggle = (service) => {
    setFormData(prev => {
      if (prev.services.includes(service)) {
        return {
          ...prev,
          services: prev.services.filter(s => s !== service)
        };
      } else {
        return {
          ...prev,
          services: [...prev.services, service]
        };
      }
    });
  };
  
  const validateForm = () => {
    let valid = true;
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = "Name is required";
      valid = false;
    }
    
    if (!formData.email.trim()) {
      newErrors.email = "Email is required";
      valid = false;
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = "Please enter a valid email address";
      valid = false;
    }
    
    if (!formData.message.trim()) {
      newErrors.message = "Message is required";
      valid = false;
    }
    
    setErrors(newErrors);
    return valid;
  };
  
  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (validateForm()) {
      // In a real app, you'd send the form data to a server
      console.log("Form submitted:", formData);
      alert("Thank you for your message! We'll get back to you soon.");
      
      // Reset form
      setFormData({
        name: "",
        email: "",
        company: "",
        message: "",
        services: []
      });
    }
  };
  
  return (
    <div className="w-full bg-zinc-900 pt-32 pb-20">
      {/* Hero Section */}
      <div className="relative h-[50vh] overflow-hidden flex items-center justify-center mb-20">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1516387938699-a93567ec168e?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2071&q=80" 
            alt="Contact Us" 
            className="w-full h-full object-cover opacity-40"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-zinc-900"></div>
        <div className="relative z-10 text-center px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-['Space_Grotesk'] font-bold mb-6 text-white"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            Get In Touch
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-['Montserrat'] text-zinc-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Let's turn your ideas into exceptional experiences
          </motion.p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="max-w-6xl mx-auto px-6 md:px-10">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-white"
          >
            <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-8 text-amber-300">
              Connect With Us
            </h2>
            
            <div className="space-y-8">
              <div>
                <h3 className="text-xl font-['Space_Grotesk'] font-bold mb-3">Locations</h3>
                <div className="flex gap-10">
                  <div>
                    <h4 className="text-lg font-['Montserrat'] font-medium mb-1">Berlin</h4>
                    <p className="text-zinc-400 font-['Montserrat']">Kreuzbergstr. 30<br/>10965 Berlin, Germany</p>
                  </div>
                  <div>
                    <h4 className="text-lg font-['Montserrat'] font-medium mb-1">New York</h4>
                    <p className="text-zinc-400 font-['Montserrat']">123 Broadway<br/>NY 10003, United States</p>
                  </div>
                </div>
              </div>
              
              <div>
                <h3 className="text-xl font-['Space_Grotesk'] font-bold mb-2">Get In Touch</h3>
                <p className="text-zinc-400 font-['Montserrat'] mb-4">
                  Have a project in mind? Let's discuss how we can help your business grow.
                </p>
                <p className="font-['Montserrat'] mb-1">
                  <span className="text-zinc-400">Email: </span>
                  <a href="mailto:hello@ochi.design" className="text-amber-300 hover:underline">hello@ochi.design</a>
                </p>
                <p className="font-['Montserrat']">
                  <span className="text-zinc-400">Phone: </span>
                  <a href="tel:+1234567890" className="text-amber-300 hover:underline">+1 (234) 567-890</a>
                </p>
              </div>
              
              <div className="pt-4">
                <h3 className="text-xl font-['Space_Grotesk'] font-bold mb-4">Follow Us</h3>
                <div className="flex gap-4">
                  {['Instagram', 'Twitter', 'LinkedIn', 'Behance'].map((platform) => (
                    <a 
                      key={platform} 
                      href="#" 
                      className="px-4 py-2 border border-zinc-700 rounded-full text-sm font-['Montserrat'] hover:bg-zinc-800 hover:border-amber-300 transition-all duration-300"
                    >
                      {platform}
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
          
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
            className="bg-zinc-800 p-8 rounded-xl text-white"
          >
            <h2 className="text-2xl font-['Space_Grotesk'] font-bold mb-6">Start a Project</h2>
            
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block font-['Montserrat'] mb-2">Name *</label>
                <input 
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  className={`w-full bg-zinc-900 border ${errors.name ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 font-['Montserrat'] focus:outline-none focus:border-amber-300`}
                  placeholder="Your name"
                />
                {errors.name && <p className="text-red-500 text-sm mt-1">{errors.name}</p>}
              </div>
              
              <div>
                <label htmlFor="email" className="block font-['Montserrat'] mb-2">Email *</label>
                <input 
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className={`w-full bg-zinc-900 border ${errors.email ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 font-['Montserrat'] focus:outline-none focus:border-amber-300`}
                  placeholder="your@email.com"
                />
                {errors.email && <p className="text-red-500 text-sm mt-1">{errors.email}</p>}
              </div>
              
              <div>
                <label htmlFor="company" className="block font-['Montserrat'] mb-2">Company</label>
                <input 
                  type="text"
                  id="company"
                  name="company"
                  value={formData.company}
                  onChange={handleChange}
                  className="w-full bg-zinc-900 border border-zinc-700 rounded-lg p-3 font-['Montserrat'] focus:outline-none focus:border-amber-300"
                  placeholder="Your company"
                />
              </div>
              
              <div>
                <p className="block font-['Montserrat'] mb-3">Services You're Interested In</p>
                <div className="grid grid-cols-2 gap-2">
                  {services.map((service) => (
                    <div key={service} className="flex items-center">
                      <button
                        type="button"
                        onClick={() => handleServiceToggle(service)}
                        className={`px-3 py-2 text-sm rounded-lg transition-colors duration-300 ${formData.services.includes(service) ? 'bg-amber-300 text-black' : 'bg-zinc-900 text-zinc-400 hover:bg-zinc-700'}`}
                      >
                        {service}
                      </button>
                    </div>
                  ))}
                </div>
              </div>
              
              <div>
                <label htmlFor="message" className="block font-['Montserrat'] mb-2">Message *</label>
                <textarea 
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  rows="4"
                  className={`w-full bg-zinc-900 border ${errors.message ? 'border-red-500' : 'border-zinc-700'} rounded-lg p-3 font-['Montserrat'] focus:outline-none focus:border-amber-300`}
                  placeholder="Tell us about your project..."
                ></textarea>
                {errors.message && <p className="text-red-500 text-sm mt-1">{errors.message}</p>}
              </div>
              
              <motion.button
                type="submit"
                className="w-full bg-amber-300 text-zinc-900 py-4 rounded-lg font-['Space_Grotesk'] font-bold text-lg hover:bg-amber-400 transition-colors duration-300"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                Send Message
              </motion.button>
            </form>
          </motion.div>
        </div>
      </div>
      
      {/* Map or Additional Info */}
      <div className="max-w-6xl mx-auto px-6 md:px-10 mt-20">
        <motion.div 
          className="w-full h-80 bg-zinc-800 rounded-xl overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
        >
          <img 
            src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5ce?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2033&q=80" 
            alt="Map" 
            className="w-full h-full object-cover opacity-70"
          />
        </motion.div>
      </div>
    </div>
  );
};

export default ContactPage;
