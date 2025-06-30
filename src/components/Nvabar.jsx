import React from "react";

const Nvabar = () => {
  return (
    <div className="w-full px-20 py-8 flex justify-between items-center font-['InterThin'] fixed z-[999]">
      <div>
        <h3>O C H I</h3>
      </div>
      <div className=" flex gap-10">
        {["Services", "Our Contact", "About Us", "Insights"].map((item, index) => (
          <a className={`text-lg font-light capitalize ${index === 3 && "ml-32"}`} key={index}>
            {item}
          </a>
        ))}
      </div>
    </div>
  );
};

export default Nvabar;
