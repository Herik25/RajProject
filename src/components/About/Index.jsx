import React from "react";

function About() {
  return (
    <div className=" px-32  flex justify-around items-center py-20">
      <div className=" flex flex-col gap-8">
        <h3 className=" text-5xl">What we do</h3>
        <p className=" text-3xl max-w-[650px]">
          Our mission is very important to the planet: we plant as many trees as
          possible.{" "}
        </p>
        <p className=" text-2xl">Can you figure out?</p>
      </div>
      <div>
        <div className=" flex gap-4 py-4 items-center">
          <div className=" h-8 w-8 rounded-sm bg-gray-300"></div>
          <p className=" text-xl">We recycle everything we see</p>
        </div>
        <div className=" flex gap-4 py-4 items-center">
          <div className=" h-8 w-8 rounded-sm bg-gray-300"></div>
          <p className=" text-xl">We teach people how to reuse their stuff</p>
        </div>
        <div className=" flex gap-4 py-4 items-center">
          <div className=" h-8 w-8 rounded-sm bg-gray-300"></div>
          <p className=" text-xl">We belive in human being as problem solver</p>
        </div>
      </div>
    </div>
  );
}

export default About;
