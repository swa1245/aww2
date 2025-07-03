import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';

const ServiceCard = ({ title, description, icon, index, imageUrl, features = [] }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isExpanded, setIsExpanded] = useState(false);
  
  return (
    <motion.div 
      className="w-full bg-zinc-800 rounded-2xl overflow-hidden relative"
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.2, duration: 0.5 }}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="p-10">
        <div className="flex items-center justify-between">
          <motion.div 
            className="w-16 h-16 rounded-full flex items-center justify-center bg-amber-300 text-zinc-900 text-2xl"
            animate={{ scale: isHovered ? 1.1 : 1 }}
            transition={{ type: 'spring', stiffness: 300 }}
          >
            {icon}
          </motion.div>
          <h3 className="text-xl font-['Space_Grotesk'] font-semibold">{`0${index + 1}`}</h3>
        </div>
        
        <h2 className="text-3xl font-['Space_Grotesk'] font-bold mt-8">{title}</h2>
        <p className="mt-4 font-['Montserrat'] text-zinc-400">{description}</p>
        
        {features.length > 0 && (
          <>
            <motion.button
              className="mt-6 text-amber-300 font-['Montserrat'] font-medium flex items-center gap-2"
              onClick={() => setIsExpanded(!isExpanded)}
              whileHover={{ x: 5 }}
            >
              {isExpanded ? 'Show Less' : 'Learn More'}
              <motion.span
                animate={{ rotate: isExpanded ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                ↓
              </motion.span>
            </motion.button>
            
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0, opacity: 0 }}
              animate={{ 
                height: isExpanded ? 'auto' : 0,
                opacity: isExpanded ? 1 : 0
              }}
              transition={{ duration: 0.5 }}
            >
              <ul className="mt-4 list-disc pl-5 text-zinc-400 font-['Montserrat'] space-y-2">
                {features.map((feature, idx) => (
                  <li key={idx}>{feature}</li>
                ))}
              </ul>
            </motion.div>
          </>
        )}
      </div>
      
      <motion.div 
        className="w-full h-[200px] overflow-hidden"
        initial={{ height: 0 }}
        animate={{ height: isHovered ? 200 : 0 }}
        transition={{ duration: 0.5, ease: 'easeInOut' }}
      >
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover"
        />
      </motion.div>
    </motion.div>
  );
};

// Testimonial Card Component
const TestimonialCard = ({ quote, author, company, image }) => {
  return (
    <motion.div
      className="bg-zinc-800 p-6 rounded-xl"
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }}
    >
      <p className="text-zinc-300 italic mb-4 font-['Montserrat']">"{quote}"</p>
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-full overflow-hidden">
          <img src={image} alt={author} className="w-full h-full object-cover" />
        </div>
        <div>
          <h4 className="font-['Space_Grotesk'] font-bold">{author}</h4>
          <p className="text-zinc-400 text-sm font-['Montserrat']">{company}</p>
        </div>
      </div>
    </motion.div>
  );
};

const Services = () => {
  const services = [
    {
      title: "Presentation Design",
      description: "We create stunning presentations that captivate your audience and deliver your message with impact.",
      icon: "🎨",
      imageUrl: "https://images.unsplash.com/photo-1558403194-611308249627?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Custom slide design tailored to your brand",
        "Data visualization and infographics",
        "Animated transitions and effects",
        "Speaker notes and presentation coaching",
        "Compatible with PowerPoint, Keynote, and Google Slides"
      ]
    },
    {
      title: "Brand Identity",
      description: "We develop cohesive brand identities that tell your story and connect with your target audience.",
      icon: "✨",
      imageUrl: "https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "Logo design and brand marks",
        "Typography and color palette development",
        "Brand guidelines and style guides",
        "Marketing collateral design",
        "Brand strategy and positioning"
      ]
    },
    {
      title: "Digital Experiences",
      description: "We craft immersive digital experiences that engage users and drive meaningful interactions.",
      icon: "💻",
      imageUrl: "https://images.unsplash.com/photo-1547658719-da2b51169166?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1164&q=80",
      features: [
        "Website design and development",
        "User experience (UX) design",
        "Interactive prototyping",
        "Mobile app interface design",
        "Accessibility and performance optimization"
      ]
    },
    {
      title: "Motion Graphics",
      description: "We bring your ideas to life with dynamic motion graphics that add dimension to your content.",
      icon: "🎬",
      imageUrl: "https://images.unsplash.com/photo-1550745165-9bc0b252726f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
      features: [
        "2D and 3D animation",
        "Explainer videos and product demonstrations",
        "Animated logos and brand elements",
        "Social media motion graphics",
        "Video editing and post-production"
      ]
    }
  ];
  
  const testimonials = [
    {
      quote: "OCHI transformed our pitch deck completely. We secured funding within a month of working with them.",
      author: "Sarah Johnson",
      company: "Founder, TechStart",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "Their brand identity work helped us stand out in a crowded market. Our recognition has increased tenfold.",
      author: "Michael Chen",
      company: "Marketing Director, Novo Brands",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      quote: "The digital experience they created for our product launch exceeded all expectations. Our conversion rate doubled.",
      author: "Alicia Rodriguez",
      company: "CEO, Elevate Solutions",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    }
  ];

  const [activeFaq, setActiveFaq] = useState(null);
  
  const faqs = [
    {
      question: "What types of companies do you work with?",
      answer: "We work with businesses of all sizes, from startups to large enterprises, across various industries including tech, healthcare, finance, education, and retail."
    },
    {
      question: "How long does a typical project take?",
      answer: "Project timelines vary depending on scope and complexity. A simple presentation might take 1-2 weeks, while a comprehensive brand identity project could take 4-8 weeks. We'll provide a detailed timeline during our initial consultation."
    },
    {
      question: "What is your pricing structure?",
      answer: "We offer customized pricing based on project requirements. This ensures you only pay for what you need. We provide detailed proposals with transparent pricing after understanding your specific needs."
    },
    {
      question: "Do you offer revisions to your designs?",
      answer: "Yes, all our projects include revision rounds. The number of revisions depends on the project package, but we're committed to working with you until you're completely satisfied with the final result."
    },
    {
      question: "Can you work with our existing brand guidelines?",
      answer: "Absolutely! We can work within your established brand guidelines to ensure consistency across all deliverables. We can also suggest enhancements that respect your existing brand while elevating it."
    }
  ];
  
  return (
    <div className="w-full min-h-screen bg-zinc-900 pt-32 pb-20 px-4 sm:px-8 md:px-12 lg:px-20">
      <motion.div 
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="mb-16"
      >
        <h1 className="text-7xl font-['Space_Grotesk'] font-bold mb-6">Our Services</h1>
        <p className="text-xl font-['Montserrat'] text-zinc-400 max-w-2xl">
          We specialize in creating eye-opening presentations and visual experiences 
          that communicate your ideas with clarity and impact.
        </p>
      </motion.div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10">
        {services.map((service, index) => (
          <ServiceCard 
            key={index}
            index={index}
            title={service.title}
            description={service.description}
            icon={service.icon}
            imageUrl={service.imageUrl}
            features={service.features}
          />
        ))}
      </div>
      
      {/* Process Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-8">Our Process</h2>
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6">
          {[
            { step: "01", title: "Discovery", description: "We learn about your goals, audience, and vision through in-depth consultations." },
            { step: "02", title: "Strategy", description: "We develop a tailored approach to achieve your specific objectives." },
            { step: "03", title: "Creation", description: "Our team brings your vision to life with expert design and development." },
            { step: "04", title: "Delivery", description: "We refine and perfect the final product before delivering it to you." }
          ].map((item, idx) => (
            <motion.div 
              key={idx}
              className="bg-zinc-800 p-6 rounded-xl relative overflow-hidden"
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <div className="absolute -right-4 -top-4 text-6xl font-bold text-zinc-700 opacity-30">{item.step}</div>
              <h3 className="text-2xl font-['Space_Grotesk'] font-bold mb-3">{item.title}</h3>
              <p className="font-['Montserrat'] text-zinc-400">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>
      
      {/* Testimonials Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-8">Client Testimonials</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {testimonials.map((testimonial, idx) => (
            <TestimonialCard 
              key={idx}
              quote={testimonial.quote}
              author={testimonial.author}
              company={testimonial.company}
              image={testimonial.image}
            />
          ))}
        </div>
      </motion.div>
      
      <motion.div 
        className="mt-20 p-10 bg-amber-300 rounded-2xl text-zinc-900"
        initial={{ opacity: 0, scale: 0.9 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5 }}
        viewport={{ once: true }}
      >
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div>
            <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-4">Ready to start your project?</h2>
            <p className="font-['Montserrat'] max-w-xl">Let's create something amazing together. Our team is ready to bring your vision to life.</p>
          </div>
          <motion.button 
            className="mt-8 md:mt-0 px-8 py-4 bg-zinc-900 text-white rounded-full font-['Montserrat'] font-semibold"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Get in Touch
          </motion.button>
        </div>
      </motion.div>
      
      {/* FAQ Section */}
      <motion.div
        className="mt-20"
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-['Space_Grotesk'] font-bold mb-8">Frequently Asked Questions</h2>
        <div className="space-y-4">
          {faqs.map((faq, idx) => (
            <motion.div 
              key={idx}
              className="bg-zinc-800 rounded-xl overflow-hidden"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1, duration: 0.5 }}
              viewport={{ once: true }}
            >
              <motion.div 
                className="p-6 flex justify-between items-center cursor-pointer"
                onClick={() => setActiveFaq(activeFaq === idx ? null : idx)}
                whileHover={{ backgroundColor: 'rgba(255,255,255,0.05)' }}
              >
                <h3 className="text-xl font-['Space_Grotesk'] font-semibold">{faq.question}</h3>
                <motion.div
                  animate={{ rotate: activeFaq === idx ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                  className="text-amber-300 text-xl"
                >
                  ↓
                </motion.div>
              </motion.div>
              
              <AnimatePresence>
                {activeFaq === idx && (
                  <motion.div 
                    className="overflow-hidden"
                    initial={{ height: 0, opacity: 0 }}
                    animate={{ height: 'auto', opacity: 1 }}
                    exit={{ height: 0, opacity: 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    <p className="px-6 pb-6 text-zinc-400 font-['Montserrat']">{faq.answer}</p>
                  </motion.div>
                )}
              </AnimatePresence>
            </motion.div>
          ))}
        </div>
      </motion.div>
    </div>
  );
};

export default Services;
