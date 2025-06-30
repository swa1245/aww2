import React from "react";

const Cards = () => {
  return (
    <div className="w-full flex items-center gap-10 px-32 h-screen bg-zinc-900">
      <div className="w-1/2 h-[55vh]">
        <div className="w-full relative rounded-xl h-full flex items-center justify-center   bg-green-800">
          <h1 className="w-32 text-5xl font-sans">OCHI </h1>
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-2 border-2 border-amber-50">
            &copy; 2025
          </button>
        </div>
      </div>
      <div className="w-1/2 flex gap-5 h-[55vh]">
        <div className="w-1/2 relative flex items-center justify-center rounded-xl h-full bg-green-900">
          <h1 className="w-32 text-5xl font-sans">OCHI </h1>
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-2 border-2 border-amber-50">
            &copy; 2025
          </button>
        </div>
        <div className="w-1/2 relative flex items-center justify-center rounded-xl h-full bg-green-900">
          <h1 className="w-32 text-5xl font-sans">OCHI </h1>
          <button className="absolute left-10 bottom-10 px-5 rounded-full py-2 border-2 border-amber-50">
            &copy; 2025
          </button>
        </div>
      </div>
      <div className=""></div>
    </div>
  );
};

export default Cards;
