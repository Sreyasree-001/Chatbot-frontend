import axios from "axios";
import React, { useState } from "react";
import Product from "./Product";
import { Navbar } from "./Navbar";
import MessageList from "./MessageList";

const LandingPage = () => {
  
  return (
    <>
    <Navbar/>
      <div className="px-4 py-16 flex flex-col space-y-8 w-full justify-center items-center md:px-24 lg:px-2 lg:py-5 ">
        <div className="">
          <h2 className="font-sans text-3xl font-medium leading-none tracking-tight text-gray-900 sm:text-4xl mb-5">
            Discover your belongings here ! Ask Quebot now !!
          </h2>
        </div>
        <div className="flex flex-row w-full justify-start">
          <div className="h-full pl-2 w-2/3">
            {/* <h2
        className="font-bold lg:text-3xl "
        >Our Products</h2> */}
            <Product/>
          </div>
          <div className="w-1/3">
            <MessageList/>
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
