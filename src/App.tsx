import React from "react";
import Navbar from "./features/Navbar";

function App() {
  return (
    <div className="w-full">
      <div className="h-16 w-full">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-64px)] text-cyan-50 relative">
        Let's get started
      </div>
    </div>
  );
}

export default App;
