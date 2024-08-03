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
        <h5 className=" text-white text-2xl">More information</h5>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>Home</span>
        </div>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>About us</span>
        </div>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>Shop</span>
        </div>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>Contact</span>
        </div>
        <div className=" flex flex-col gap-5">
        <h5 className=" text-white text-2xl">Stay in contact</h5>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>info@contact.com</span>
        </div>
        <div className=" flex gap-4">
          <div className=" h-5 w-5 rounded-md bg-gray-500"></div>{" "}
          <span>+34 654 654 654</span>
        </div>
      </div>
      </div>
      <div className=" min-w-[450px] flex flex-col gap-5 items-center border-2 border-white text-white rounded-sm px-10 py-4"> 
        <h5 className=" text-3xl text-center max-w-[300px]">Suscribe now to the 
        newsletter</h5>
        <button className=" py-5 border-2 border-white w-full rounded-md">Your Name</button>
        <button className=" py-5 border-2 border-white w-full rounded-md">Your Email</button>
        <div className=" flex gap-5 text-xl">
            <input type="checkbox" name="" id="" />
            <span>I consent the privacy policy</span>
        </div>
        <button className=" py-5 text-black font-bold bg-white w-full rounded-md">Subscribe!</button>
      </div>
    </div>
  );
}

export default Footer;
