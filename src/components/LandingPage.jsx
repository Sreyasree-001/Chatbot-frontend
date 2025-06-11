import axios from "axios";
import React, { useState } from "react";
import Product from "./Product";
import { Navbar } from "./Navbar";
import ChatWindow from "./ChatWindow";

const LandingPage = () => {
  const [productResults, setProductResults] = useState([]);
  const [queryMessage, setQueryMessage] = useState("");

  return (
    <>
      <Navbar />
      <div className="px-4 py-6 w-full max-w-screen-xl mx-auto space-y-6">
        {/* Heading & Image */}

        <div className="flex flex-col lg:flex-row lg:space-x-2 space-y-1 justify-center items-center">
          <h2 className="text-3xl poppins-regular font-medium leading-none text-center tracking-tight text-gray-900 sm:text-4xl mb-5">
            Discover your perfect match! Ask Quebot anything.
          </h2>
          <img
            src="https://img.freepik.com/free-vector/ai-technology-robot-cyborg-illustrations_24640-134419.jpg?semt=ais_items_boosted&w=740"
            className="w-32"
          />
        </div>
        {/* Chat & Products Section */}
        <div className="flex flex-col lg:flex-row gap-6">
          {/* Chat Section */}
          <div className="w-full lg:w-1/3 p-4">
            {/* <h3 className="text-xl font-semibold text-center mb-3">
              Chat with Quebot
            </h3> */}
            <ChatWindow
              setProductResults={setProductResults}
              setQueryMessage={setQueryMessage}
            />
          </div>

          {/* Product Display */}
          <div className="w-full lg:w-2/3">
            <Product
              searchedProducts={productResults}
              queryMessage={queryMessage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default LandingPage;
