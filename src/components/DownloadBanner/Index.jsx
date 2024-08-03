import React from "react";

function Banner() {
  return (
    <div className=" bg-gray-100 px-32 py-14 flex justify-between items-center">
      <div className=" flex flex-col gap-10 ">
        <h2 className=" text-5xl">Don’t forget to grab this one, it’s free!</h2>
        <p className=" text-3xl">Download the Ultimate con tomate guide</p>
      </div>
      <div>
        <button className=" bg-gray-300 p-8 text-lg rounded-md text-[#000] font-semibold ">
          Call to action
        </button>
      </div>
    </div>
  );
}

export default Banner;
