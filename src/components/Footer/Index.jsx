import React from "react";

function Footer() {
  return (
    <div className=" px-32 bg-black text-gray-100 py-20 flex justify-between">
      <div className=" max-w-[400px] flex flex-col gap-5">
        <div className=" h-[80px] w-[300px] bg-gray-500 rounded-md"></div>
        <p className=" text-lg">
          Our mission is very important to the planet: we plant as many trees as
          possible. Can you figure out?
        </p>
        <div className=" flex gap-3">
          <div className=" h-10 w-10 bg-gray-500 rounded-full"></div>
          <div className=" h-10 w-10 bg-gray-500 rounded-full"></div>
          <div className=" h-10 w-10 bg-gray-500 rounded-full"></div>
        </div>
      </div>
      <div className=" flex flex-col gap-5">
        <h5 className=" text-white">More information</h5>
        <div>
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>
        </div>
        <div>stay in contact</div>
      </div>
      <div> sec 3</div>
    </div>
  );
}

export default Footer;
