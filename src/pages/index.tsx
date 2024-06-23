
import About from "@/components/About/About";
import Hero from "@/components/Home/Hero";
import React from "react";

const index = () => {
  return (
    <div className="relative flex justify-center items-center bg-black-100 flex-col overflow-hidden mx-auto sm:px-10 px-5">
      <div className="max-w-7xl w-full">
        <Hero />
        
        <About />
      </div>
    </div>
  );
};

export default index;
