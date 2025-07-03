import React from "react";
import { motion } from "framer-motion";

const StatCard = ({ number, label, delay }) => (
  <motion.div 
    className="p-6 bg-zinc-800 rounded-xl text-white flex flex-col items-center justify-center"
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
      className="w-12 h-12 bg-amber-300 rounded-full flex items-center justify-center text-black font-bold text-xl absolute -left-6 top-0"
      whileInView={{ scale: [0.8, 1.2, 1] }}
      transition={{ delay: delay + 0.2, duration: 0.5 }}
      viewport={{ once: true }}
    >
      {number}
    </motion.div>
    <div className="pl-10 pb-10 border-l-2 border-zinc-700">
      <h3 className="text-2xl font-['Space_Grotesk'] font-bold mb-2 text-white">{title}</h3>
      <p className="text-zinc-400 font-['Montserrat']">{description}</p>
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
    <h3 className="font-['Space_Grotesk'] font-bold text-xl text-white">{name}</h3>
    <p className="text-zinc-400 font-['Montserrat']">{role}</p>
  </motion.div>
);

const AboutPage = () => {
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
    <div className="w-full bg-zinc-900 pt-32 text-white">
      {/* Hero Section */}
      <div className="relative h-[60vh] overflow-hidden flex items-center justify-center">
        <div className="absolute inset-0 z-0">
          <img 
            src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
            alt="Creative design studio" 
            className="w-full h-full object-cover opacity-50"
          />
        </div>
        <div className="absolute inset-0 bg-gradient-to-b from-zinc-900/70 to-zinc-900"></div>
        <div className="relative z-10 text-center max-w-5xl px-6">
          <motion.h1 
            className="text-5xl md:text-7xl font-['Space_Grotesk'] font-bold mb-6"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About OCHI
          </motion.h1>
          <motion.p 
            className="text-xl md:text-2xl font-['Montserrat'] text-zinc-300 max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2, duration: 0.8 }}
          >
            Crafting Digital Excellence Through Strategic Design & Innovation
          </motion.p>
        </div>
      </div>

      {/* About Us Content */}
      <div className="px-6 md:px-20 py-20">
        <div className="max-w-6xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center mb-20">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6 text-amber-300">Who We Are</h2>
              <p className="text-lg font-['Montserrat'] text-zinc-300 mb-6">
                Founded in 2011, OCHI has evolved into a global design powerhouse, crafting visual narratives for brands that demand excellence. Our multidisciplinary team operates at the intersection of strategy, design, and technology.
              </p>
              <p className="text-lg font-['Montserrat'] text-zinc-300">
                We believe in simplicity, clarity, and purpose-driven design that creates meaningful connections between brands and their audiences.
              </p>
            </motion.div>
            <motion.div
              className="rounded-xl overflow-hidden h-[400px]"
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              viewport={{ once: true }}
            >
              <img 
                src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1740&q=80" 
                alt="OCHI team" 
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>

          {/* Stats Section */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              OCHI by the Numbers
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
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

          {/* Our Approach Section */}
          <div className="mb-20">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Our Approach
            </motion.h2>
            
            <div className="pl-6 border-l-2 border-zinc-700 max-w-3xl mx-auto">
              {approach.map((step, index) => (
                <ApproachStep 
                  key={index}
                  number={index + 1}
                  title={step.title}
                  description={step.description}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>

          {/* Mission Statement */}
          <div className="bg-amber-300 text-black p-10 md:p-16 rounded-xl text-center mb-20">
            <motion.h2 
              className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-6"
              initial={{ opacity: 0, y: -20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              viewport={{ once: true }}
            >
              Our Mission
            </motion.h2>
            <motion.p 
              className="text-2xl font-['Montserrat'] max-w-4xl mx-auto leading-relaxed font-medium"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
            >
              To simplify the complex, making clarity the cornerstone of all visual storytelling.
              We believe in design that speaks directly to the heart of what matters.
            </motion.p>
          </div>

          {/* Team Section */}
          <div>
            <motion.h2 
              className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-10 text-center"
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              Meet Our Team
            </motion.h2>
            
            <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <TeamMember
                  key={index}
                  name={member.name}
                  role={member.role}
                  image={member.image}
                  delay={index * 0.2}
                />
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Client Logos Section */}
      <div className="px-6 md:px-20 py-20 bg-zinc-800">
        <div className="max-w-6xl mx-auto">
          <motion.h2 
            className="text-3xl md:text-4xl font-['Space_Grotesk'] font-bold mb-10 text-center text-amber-300"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            Trusted By Industry Leaders
          </motion.h2>
          
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              "https://upload.wikimedia.org/wikipedia/commons/thumb/2/2f/Google_2015_logo.svg/800px-Google_2015_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/thumb/4/44/Microsoft_logo.svg/800px-Microsoft_logo.svg.png", 
              "https://upload.wikimedia.org/wikipedia/commons/f/fa/Apple_logo_black.svg", 
              "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a9/Amazon_logo.svg/2560px-Amazon_logo.svg.png",
              "https://upload.wikimedia.org/wikipedia/commons/7/7a/Logonetflix.png", 
              "https://upload.wikimedia.org/wikipedia/commons/thumb/0/05/Facebook_Logo_%282019%29.png/800px-Facebook_Logo_%282019%29.png", 
              "https://upload.wikimedia.org/wikipedia/commons/thumb/9/95/Instagram_logo_2022.svg/800px-Instagram_logo_2022.svg.png", 
              "https://upload.wikimedia.org/wikipedia/commons/thumb/e/e1/Logo_of_YouTube_%282015-2017%29.svg/800px-Logo_of_YouTube_%282015-2017%29.svg.png"
            ].map((logo, index) => (
              <motion.div 
                key={index} 
                className="bg-zinc-900 rounded-xl p-6 flex items-center justify-center h-24"
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1, duration: 0.5 }}
                viewport={{ once: true }}
                whileHover={{ y: -5 }}
              >
                <img 
                  src={logo} 
                  alt="Client logo" 
                  className="max-h-10 max-w-full filter grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-300" 
                />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutPage;
