import { motion } from "framer-motion";
import React from "react";
import { FaArrowRight } from "react-icons/fa";
import StartProjectButton from "./StartProjectButton";

const Landing = () => {
  return (
    <div data-scroll data-scoll-section data-scroll-speed='-.2'  className="w-full h-screen bg-zinc-900 pt-2">
      <div className="mt-56 px-20 py-8 ">
        {["We Create", "Eye Opening", "Presentations"].map((item, index) => {
          return (
            <div className="">
              <div className="w-fit flex overflow-hidden  ">
                {index === 1 && (
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: "9vw" }}
                    transition={{ ease: [0.76, 0, 0.24, 1],duration:1 }}
                    className="w-[9vw] h-[5vw] rounded-md relative top-[1.6vw] bg-red-500"
                  ></motion.div>
                )}
                <h1
                  key={index}
                  className="font-semibold leading-[7.5vw] tracking-tighter uppercase text-9xl"
                >
                  {item}
                </h1>
              </div>
            </div>
          );
        })}
      </div>
      <div className="border-t-[1.2px] text-md flex items-center justify-between py-5 px-20 border-zinc-800 mt-20 ">
        {["for public to private company", "from the first pitch to ipo"].map(
          (item, index) => {
            return (
              <p
                key={index}
                className="text-md font-light capitalize tracking-tight leading-none"
              >
                {item}
              </p>
            );
          }
        )}
        <div className=" flex items-center text-md justify-between gap-2">
          <StartProjectButton className="uppercase" />
          <div className="w-10 h-10 border-2 cursor-pointer hover:bg-black flex items-center justify-center py-2 border-zinc-800  rounded-full">
            <span className="-rotate-[45deg]">
              <FaArrowRight />
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Landing;
