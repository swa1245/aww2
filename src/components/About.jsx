import React from "react";

const About = () => {
  return (
    <div className="w-full p-20 text-black bg-amber-300 rounded-tl-3xl rounded-tr-3xl">
      <h1 className="font-sans text-[4vw] leading-[4vw] tracking-tight">
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aspernatur
        error harum unde tempora laborum modi!
      </h1>
      <div className="w-full flex gap-5 border-t-[1px] pt-12 mt-12 border-[#a1b562]">
        <div className="w-1/2 ">
          <h1 className="text-6xl">Our approach:</h1>
          <button className="px-10 uppercase flex gap-10 font-semibold items-center mt-10 py-6 text-white rounded-full bg-zinc-900">
            Read More <div className="w-2 h-2 bg-zinc-100 rounded-full"></div>
          </button>
        </div>
        <div className="w-1/2 h-[70vh] rounded-3xl bg-[#a1b562]"></div>
      </div>
    </div>
  );
};

export default About;
