import React from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';

const StartProjectButton = ({ className }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/contact');
  };

  return (
    <motion.button
      onClick={handleClick}
      className={`px-6 py-3 bg-amber-300 text-zinc-900 rounded-full font-['Space_Grotesk'] font-bold text-lg hover:bg-amber-400 ${className || ''}`}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: 'spring', stiffness: 400, damping: 10 }}
    >
      Start Project
    </motion.button>
  );
};

export default StartProjectButton;
