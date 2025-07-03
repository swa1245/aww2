import React from "react";
import { Link } from "react-router-dom";

const Nvabar = () => {
  const navItems = [
    { name: "Services", path: "/services" },
    { name: "Our Contact", path: "/contact" },
    { name: "About Us", path: "/about" },
    { name: "Insights", path: "/insights" }
  ];

  return (
    <div className="w-full px-20 py-8 flex justify-between items-center fixed z-[999] backdrop-blur-sm bg-zinc-900/20">
      <div>
        <Link to="/">
          <h3 className="font-['Space_Grotesk'] text-2xl font-semibold tracking-wider cursor-pointer">O C H I</h3>
        </Link>
      </div>
      <div className="flex gap-10">
        {navItems.map((item, index) => (
          <Link 
            to={item.path}
            className={`font-['Montserrat'] text-lg hover:text-amber-300 transition-colors duration-300 ${index === 3 && "ml-32"}`} 
            key={index}
          >
            {item.name}
          </Link>
        ))}
      </div>
    </div>
  );
};

export default Nvabar;
