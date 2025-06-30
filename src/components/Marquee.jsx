import React from "react";
import { motion } from "framer-motion";

const Marquee = () => {
  return (
    <div className="w-full py-10 rounded-tl-3xl rounded-tr-3xl bg-green-700">
      <div className=" border-t-2 border-b-2 flex gap-10 overflow-hidden whitespace-nowrap border-zinc-300">
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
          className="text-[22vw] uppercase  leading-none font-semibold"
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
          className="text-[22vw] uppercase  leading-none font-semibold"
        >
          we are ochi
        </motion.h1>
       
      </div>
    </div>
  );
};

export default Marquee;
