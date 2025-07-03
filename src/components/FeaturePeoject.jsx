import { motion } from "framer-motion";
import { Power4 } from "gsap";
import React, { useState } from "react";

const FeaturePeoject = () => {
  const[ishovering, setIshovering] = useState(false);

  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-1 pb-16 border-zinc-700">
        <h1 className="text-8xl font-mono "> Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="w-full flex gap-10 mt-10 ">
          <div
            onMouseEnter={() => setIshovering(true)}
            onMouseLeave={() => {
              setIshovering(false);
            }}
            className="w-1/2 rounded-2xl h-[75vh] relative"
          >
            <h1 className="absolute flex text-yellow-300 overflow-hidden -translate-x-1/2 -translate-y-1/2 top-1/2  leading-none z-[9] tracking-tighter left-full text-8xl font-mono  ">
              {"VISIE".split("").map((i, index) => {
                return (
                  <motion.span
                    initial={{ y: "100%" }}
                    animate={ishovering ? ({y:"0"}):({y:"100%"})}
                    transition={{ease:Power4.easeInOut,delay:index*.1}}
                    className="inline-block "
                    key={index}
                  >
                    {i}
                  </motion.span>
                );
              })}
            </h1>
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Fyde_Front-1-663x551.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </div>
          <div className="w-1/2 rounded-2xl h-[75vh]   ">
            <div className="w-full h-full rounded-xl overflow-hidden">
              <img
                src="https://ochi.design/wp-content/uploads/2025/02/Salience_Website_cover-663x551.png"
                className="w-full h-full bg-cover"
                alt=""
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FeaturePeoject;
