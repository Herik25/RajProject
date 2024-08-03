import React from "react";

function Cards() {
  return (
    <div className=" px-32">
      <div className=" flex justify-between items-center gap-10  rounded-lg">
        <div className="border-gray-100 border-2">
          <div className=" h-[250px]  bg-gray-100"></div>
          <div className=" flex flex-col justify-between min-h-[300px] p-6 w-full">
            <h1 className=" text-4xl text-center">
              The future of web design, today
            </h1>
            <p className=" text-lg text-center">
              The future of web design, today
            </p>
            <button className=" border-gray-100 border-2 p-5 rounded-md text-[#000] font-semibold">
              Call to action
            </button>
          </div>
        </div>
        <div className="border-gray-100 border-2">
          <div className=" h-[250px]  bg-gray-100"></div>
          <div className=" flex flex-col justify-between min-h-[300px] p-6 w-full">
            <h1 className=" text-4xl text-center">
              The future of web design, today
            </h1>
            <p className=" text-lg text-center">
              The future of web design, today
            </p>
            <button className=" border-gray-100 border-2 p-5 rounded-md text-[#000] font-semibold">
              Call to action
            </button>
          </div>
        </div>
        <div className="border-gray-100 border-2">
          <div className=" h-[250px]  bg-gray-100"></div>
          <div className=" flex flex-col justify-between min-h-[300px] p-6 w-full">
            <h1 className=" text-4xl text-center">
              The future of web design, today
            </h1>
            <p className=" text-lg text-center">
              The future of web design, today
            </p>
            <button className=" border-gray-100 border-2 p-5 rounded-md text-[#000] font-semibold">
              Call to action
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Cards;
