import React from "react";
import Navbar from "./Features/Navbar";
import Typewriter from "typewriter-effect";
import ContactSection from "./Features/ContactSection";

function App() {
  return (
    <div className="w-full">
      <div className="h-16 w-full">
        <Navbar />
      </div>
      <div className="h-[calc(100vh-64px)] text-blue-800 relative flex items-center justify-center font-bold">
        <Typewriter
          options={{
            autoStart: true,
            loop: true,
            deleteSpeed: 50,
            delay: 100,
            strings: ["Work in progress ...", "Page under development ..."],
          }}
        />
      </div>
      <ContactSection />
    </div>
  );
}

export default App;
