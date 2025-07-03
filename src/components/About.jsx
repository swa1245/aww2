import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const StatCard = ({ number, label, delay }) => (
  <motion.div 
    className="p-6 bg-zinc-900 rounded-xl text-white flex flex-col items-center justify-center"
    initial={{ opacity: 0, y: 30 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <motion.h3 
      className="text-4xl md:text-5xl font-['Space_Grotesk'] font-bold text-amber-300"
      initial={{ scale: 0.8 }}
      whileInView={{ scale: 1 }}
      transition={{ delay: delay + 0.2, type: "spring", stiffness: 200 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.h3>
    <p className="mt-2 font-['Montserrat'] text-center text-zinc-300">{label}</p>
  </motion.div>
);

const ApproachStep = ({ number, title, description, delay }) => (
  <motion.div 
    className="relative"
    initial={{ opacity: 0, x: -20 }}
    whileInView={{ opacity: 1, x: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
  >
    <motion.div 
      className="w-12 h-12 bg-zinc-900 rounded-full flex items-center justify-center text-amber-300 font-bold text-xl absolute -left-6 top-0"
      whileInView={{ scale: [0.8, 1.2, 1] }}
      transition={{ delay: delay + 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.div>
    <div className="pl-10 pb-10 border-l-2 border-zinc-800">
      <h3 className="text-2xl font-['Space_Grotesk'] font-bold mb-2">{title}</h3>
      <p className="text-zinc-600 font-['Montserrat']">{description}</p>
    </div>
  </motion.div>
);

const TeamMember = ({ name, role, image, delay }) => (
  <motion.div
    className="flex flex-col items-center"
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    transition={{ delay: delay, duration: 0.5 }}
    viewport={{ once: true }}
    whileHover={{ y: -5 }}
  >
    <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden mb-4">
      <img src={image} alt={name} className="w-full h-full object-cover" />
    </div>
    <h3 className="font-['Space_Grotesk'] font-bold text-xl">{name}</h3>
    <p className="text-zinc-600 font-['Montserrat']">{role}</p>
  </motion.div>
);

const About = () => {
  const [showMore, setShowMore] = useState(false);

  const stats = [
    { number: "250+", label: "Projects Completed" },
    { number: "12", label: "Years Experience" },
    { number: "95%", label: "Client Satisfaction" },
    { number: "18", label: "Design Awards" }
  ];

  const approach = [
    {
      title: "Discovery & Research",
      description: "We begin by diving deep into your brand, audience, and objectives to understand your unique challenges and opportunities."
    },
    {
      title: "Strategy & Concept",
      description: "Based on our findings, we develop a strategic approach and creative concepts that align with your goals."
    },
    {
      title: "Design & Development",
      description: "Our team brings concepts to life with meticulous attention to detail, ensuring every element serves a purpose."
    },
    {
      title: "Refinement & Delivery",
      description: "We fine-tune the work, gather feedback, and deliver the final product with comprehensive support and guidance."
    }
  ];

  const team = [
    {
      name: "Alex Morgan",
      role: "Creative Director",
      image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Sophia Chen",
      role: "Design Lead",
      image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=388&q=80"
    },
    {
      name: "Marcus Lee",
      role: "Technical Director",
      image: "https://images.unsplash.com/photo-1566492031773-4f4e44671857?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=387&q=80"
    },
    {
      name: "Elena Kowalski",
      role: "Project Manager",
      image: "https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=461&q=80"
    }
  ];

  return (
    <div className="w-full bg-amber-300 rounded-tl-3xl rounded-tr-3xl text-black overflow-hidden">
      {/* Hero Section */}
      <motion.div 
        className="w-full p-6 md:p-10 lg:p-20"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h1 
          className="font-['Space_Grotesk'] text-4xl md:text-[4vw] leading-tight tracking-tight font-bold max-w-4xl"
          initial={{ y: 30 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.8 }}
        >
          We are a collective of creative minds shaping ideas into remarkable visual experiences.
        </motion.h1>

        <div className="w-full flex flex-col md:flex-row gap-5 border-t-[1px] pt-12 mt-12 border-zinc-800">
          <div className="w-full md:w-1/2">
            <motion.h2 
              className="text-4xl md:text-6xl font-['Space_Grotesk'] font-bold"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.4, duration: 0.8 }}
            >
              Our approach:
            </motion.h2>
            <motion.button 
              className="px-8 py-5 md:px-10 md:py-6 uppercase flex gap-6 md:gap-10 font-semibold items-center mt-8 text-white rounded-full bg-zinc-900"
              onClick={() => setShowMore(!showMore)}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.6, duration: 0.8 }}
            >
              {showMore ? "Show Less" : "Read More"} 
              <motion.div 
                className="w-2 h-2 bg-zinc-100 rounded-full"
                animate={{ scale: [1, 1.5, 1] }}
                transition={{ repeat: Infinity, repeatDelay: 1, duration: 1 }}
              ></motion.div>
            </motion.button>
          </div>
          <motion.div 
            className="w-full md:w-1/2 h-[40vh] md:h-[70vh] rounded-3xl overflow-hidden mt-8 md:mt-0"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.8, duration: 0.8 }}
          >
            <img 
              src="https://images.unsplash.com/photo-1552664730-d307ca884978?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2940&q=80" 
              alt="Design team collaborating" 
              className="w-full h-full object-cover"
            />
          </motion.div>
        </div>
      </motion.div>
      
      {/* Expanded Content */}
      <AnimatePresence>
        {showMore && (
          <motion.div 
            className="bg-zinc-100 text-black"
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.5 }}
          >
            {/* Company Stats */}
            <div className="p-6 md:p-10 lg:p-20 pb-0 md:pb-0 lg:pb-0">
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-8">The Numbers</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6">
                {stats.map((stat, index) => (
                  <StatCard 
                    key={index} 
                    number={stat.number} 
                    label={stat.label}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
            
            {/* Approach Detail */}
            <div className="p-6 md:p-10 lg:p-20">
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-10">Our Process</h2>
              <div className="pl-6 border-l-2 border-zinc-300">
                {approach.map((step, index) => (
                  <ApproachStep 
                    key={index}
                    number={`0${index + 1}`}
                    title={step.title}
                    description={step.description}
                    delay={index * 0.2}
                  />
                ))}
              </div>
            </div>
            
            {/* Mission Statement */}
            <motion.div 
              className="bg-zinc-900 text-white p-6 md:p-10 lg:p-20 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <motion.h2 
                className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6 text-amber-300"
                initial={{ y: 30 }}
                whileInView={{ y: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                Our Mission
              </motion.h2>
              <motion.p 
                className="text-xl md:text-2xl font-['Montserrat'] max-w-3xl mx-auto leading-relaxed"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.8 }}
                viewport={{ once: true }}
              >
                To simplify the complex, making clarity the cornerstone of all visual storytelling.
                We believe in design that speaks directly to the heart of what matters, stripping away
                the unnecessary to reveal the extraordinary.
              </motion.p>
            </motion.div>
            
            {/* Team */}
            <div className="p-6 md:p-10 lg:p-20">
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-12 text-center">Meet Our Team</h2>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-10">
                {team.map((member, index) => (
                  <TeamMember
                    key={index}
                    name={member.name}
                    role={member.role}
                    image={member.image}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default About;
