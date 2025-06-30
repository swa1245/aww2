import React from "react";

const FeaturePeoject = () => {
  return (
    <div className="w-full py-20 ">
      <div className="w-full px-20 border-b-1 pb-16 border-zinc-700">
        <h1 className="text-8xl font-mono "> Featured Projects</h1>
      </div>
      <div className="px-20">
        <div className="w-full flex gap-10 mt-10 ">
          <div className="w-1/2 rounded-2xl h-[75vh] relative">
            <h1 className="absolute text-yellow-300 -translate-x-1/2 -translate-y-1/2 top-1/2  leading-none z-[9] tracking-tighter left-full text-8xl font-mono  ">
              {"VISIE".split('').map((i,index)=>{
                return(
                    <span className="" key={index}>{i}</span>
                )
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
