//----In App.jsx-----

import React from "react";
import Card from "./components/Card";

const App = () => {
  return (
    <div>
      <Card />
    </div>
  );
};

export default App;

//------In Card.jsx------

import React from "react";

// Simple 3D flip card built with TailwindCSS utilities
const Card = () => {
  return (
    // Fullscreen container centring the card
    <div className="min-h-screen p-6 flex justify-center items-center">
      {/* Group provides hover state; perspective gives 3D depth */}
      <div className="group [perspective:1000px]">
        {/* Card flips 180° on hover; preserve-3d keeps faces in 3D space */}
        <div className="relative w-64 h-64 transition-transform duration-500 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front face; hidden when rotated due to backface-visibility */}
          <div className="absolute inset-0 bg-yellow-300 rounded-lg shadow-lg [backface-visibility:hidden] flex items-center justify-center font-bold text-xl">
            Front Side
          </div>
          {/* Back face; rotated 180° so it becomes visible when parent flips */}
          <div className="absolute inset-0 bg-orange-300 rounded-lg shadow-lg [backface-visibility:hidden] [transform:rotateY(180deg)] flex items-center justify-center font-bold text-xl">
            Back Side
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
