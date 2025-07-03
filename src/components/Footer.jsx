import React from "react";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import StartProjectButton from "./StartProjectButton";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <div className="w-full flex gap-12 h-screen bg-zinc-100 p-20">
      <div className="w-1/2 h-full flex justify-between flex-col">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className=""
        >
          <h1 className="font-semibold tracking-tight text-zinc-900 text-9xl uppercase leading-none -mb-6">
            Eye-
          </h1>
          <h1 className="font-semibold text-zinc-900 tracking-tight text-9xl uppercase leading-none -mb-6">
            Opening
          </h1>
        </motion.div>
        
        <div className="flex flex-col gap-8">
          <motion.h1 
            className="text-5xl font-['Space_Grotesk'] text-gray-700"
            whileHover={{ scale: 1.05 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <Link to="/">OCHI</Link>
          </motion.h1>
          <StartProjectButton />
        </div>
      </div>
      
      <div className="w-1/2">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-zinc-900 font-semibold tracking-tight text-8xl uppercase leading-none -mb-6"
        >
          Presentations
        </motion.h1>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          viewport={{ once: true }}
          className="font-mono mt-12 text-gray-700"
        >
          <h1 className="text-4xl font-['Space_Grotesk'] text-zinc-900">S :</h1>
          <div className="mt-6 space-y-2">
            {[
              { name: "Instagram", url: "https://instagram.com" },
              { name: "Dribbble", url: "https://dribbble.com" },
              { name: "LinkedIn", url: "https://linkedin.com" }
            ].map((social, index) => (
              <motion.a
                key={index}
                href={social.url}
                target="_blank"
                rel="noopener noreferrer"
                className="block text-xl underline transition-colors hover:text-amber-500"
                whileHover={{ x: 10 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                {social.name}
              </motion.a>
            ))}
          </div>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.4 }}
          viewport={{ once: true }}
          className="font-mono mt-12 text-gray-700"
        >
          <h1 className="text-4xl font-['Space_Grotesk'] text-zinc-900">L :</h1>
          <motion.a 
            href="https://maps.google.com/?q=202-1965+W+4th+Ave+Vancouver,+Canada" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[30%] mt-6 text-xl underline hover:text-amber-500"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            202-1965 W 4th Ave Vancouver, Canada
          </motion.a>
          <motion.a 
            href="https://maps.google.com/?q=30+Chukarina+St+Lviv,+Ukraine" 
            target="_blank" 
            rel="noopener noreferrer"
            className="block w-[30%] mt-10 text-xl underline hover:text-amber-500"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            30 Chukarina St Lviv, Ukraine
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
          className="font-mono mt-12 text-gray-700"
        >
          <h1 className="text-4xl font-['Space_Grotesk'] text-zinc-900">E :</h1>
          <motion.a 
            href="mailto:hello@ochi.design"
            className="block w-[30%] mt-6 text-xl underline hover:text-amber-500"
            whileHover={{ x: 10 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            hello@ochi.design
          </motion.a>
        </motion.div>
        
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1.5, delay: 0.7 }}
          viewport={{ once: true }}
          className="font-mono mt-20 text-gray-400"
        >
          <div className="w-full mt-6 text-xl flex justify-between">
            <span>© ochi design {currentYear}.</span>
            <div className="flex gap-6">
              <motion.a 
                href="#"
                className="hover:text-amber-500 transition-colors duration-300"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Legal
              </motion.a>
              <motion.a 
                href="#"
                className="hover:text-amber-500 transition-colors duration-300"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Terms
              </motion.a>
              <motion.a 
                href="#"
                className="hover:text-amber-500 transition-colors duration-300"
                whileHover={{ y: -3 }}
                transition={{ type: "spring", stiffness: 400, damping: 10 }}
              >
                Privacy
              </motion.a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default Footer;
