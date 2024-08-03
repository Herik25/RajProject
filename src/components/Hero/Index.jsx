import React from "react";

function Hero() {
  return (
    <div className=" h-screen flex justify-between items-center px-32">
      <div className=" flex flex-col gap-10  max-w-[500px]">
        <h1 className=" text-5xl">The future of web design, today</h1>
        <p className=" text-2xl">The future of web design, today</p>
        <button className=" border-gray-200 border-2 p-5 rounded-md text-[#000] font-semibold max-w-[30%]">
          Call to action
        </button>
      </div>
      <div className=" h-[500px] w-[500px] bg-gray-100"></div>
    </div>
  );
}

export default Hero;
