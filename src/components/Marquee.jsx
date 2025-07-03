import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div data-scroll data-scroll-section data-scroll-speed='.1' className="w-full py-10  rounded-tl-3xl rounded-tr-3xl bg-green-700">
      <div className=" border-t-2 border-b-2 flex  overflow-hidden whitespace-nowrap border-zinc-300">
        <motion.h1
          initial={{
            x: 0,
          }}
          animate={{
            x:"-100%"
          }}
          transition={{
            ease:"linear",
            repeat:Infinity,
            duration:5
          }}
          className="text-[22vw] uppercase  leading-none font-semibold pr-10"
        >
          we are ochi
        </motion.h1>
        <motion.h1
          initial={{
            x: 0,
          }}
          animate={{
            x:"-100%"
          }}
          transition={{
            ease:"linear",
            repeat:Infinity,
            duration:5
          }}
          className="text-[22vw] uppercase  leading-none font-semibold pr-10"
        >
          we are ochi
        </motion.h1>
       
      </div>
    </div>
  );
};

export default Marquee;
