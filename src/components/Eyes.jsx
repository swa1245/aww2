import React, { useEffect, useState } from "react";

const Eyes = () => {
  const [mouseX, setMouseX] = useState(0);
  const [mouseY, setMouseY] = useState(0);

  useEffect(() => {
    const handleMouseMove = (e) => {
      // Get mouse position relative to the center of the screen
      const x = (e.clientX / window.innerWidth) * 2 - 1; // -1 to 1
      const y = (e.clientY / window.innerHeight) * 2 - 1; // -1 to 1
      
      setMouseX(x);
      setMouseY(y);
    };
    
    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  // Calculate pupil position with constraints
  const getPupilStyle = (isRightEye) => {
    // Adjust sensitivity and limit movement
    const maxMove = 25; // maximum percentage to move from center
    
    // Add slight adjustment for each eye to create a more realistic effect
    const xAdjust = isRightEye ? 0.1 : -0.1;
    
    // Calculate position with constraints
    const x = Math.max(Math.min(mouseX + xAdjust, 1), -1) * maxMove;
    const y = Math.max(Math.min(mouseY, 1), -1) * maxMove;
    
    return {
      transform: `translate(-50%, -50%) translate(${x}%, ${y}%)`,
      transition: "transform 0.15s ease-out"
    };
  };

  return (
    <div className="w-full h-screen overflow-hidden">
      <div data-scroll data-scroll-speed="-.4" className="relative w-full h-full bg-center bg-cover bg-[url('https://ochi.design/wp-content/uploads/2022/05/Top-Viewbbcbv-1-scaled.jpg')]">
        <div className="absolute flex gap-10 h-96 top-1/2 left-1/2 -translate-x-[50%] -translate-y-[50%]">
          {/* Left Eye */}
          <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 relative h-2/3 flex items-center justify-center rounded-full bg-zinc-900 overflow-hidden">
              <div 
                className="absolute w-10 h-10 rounded-full bg-zinc-100 top-1/2 left-1/2"
                style={getPupilStyle(false)}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
          
          {/* Right Eye */}
          <div className="w-[15vw] flex items-center justify-center h-[15vw] rounded-full bg-zinc-100">
            <div className="w-2/3 relative h-2/3 flex items-center justify-center rounded-full bg-zinc-900 overflow-hidden">
              <div 
                className="absolute w-10 h-10 rounded-full bg-zinc-100 top-1/2 left-1/2"
                style={getPupilStyle(true)}
              >
                {/* Pupil highlight */}
                <div className="absolute top-1/4 left-1/4 w-1/4 h-1/4 bg-white rounded-full opacity-70"></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Eyes;
