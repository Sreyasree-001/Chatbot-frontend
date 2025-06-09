import LogIn from "./LogIn"

export const Header = () => {
  return (
    <>
    <div className="w-full h-full p-10 flex flex-col items-center justify-center space-y-3 md:space-y-0 md:space-x-5 lg:mt-10 md:flex-row">
            <div className="w-full p-5 max-w-xl mb-12 xl:mb-0 md:w-1/2">
            
              <h2 className="max-w-lg mb-6 text-3xl font-bold tracking-tight sm:text-4xl text-center sm:leading-none">
                <div className="flex flex-col justify-start items-center">
                  <p className="text-5xl sm:text-5xl lg:text-7xl text-blue-700">QueBot</p>
                <img src="https://img.freepik.com/free-vector/ai-technology-robot-cyborg-illustrations_24640-134419.jpg?semt=ais_items_boosted&w=740"
                className="w-32"
                />
                </div>
                <br/>
                Your Smart Shopping Companion
              </h2>
              <p className="max-w-xl mb-4 text-base text-center md:text-lg">
                Revolutionize your e-commerce experience 
                with an intelligent sales chatbot, g
                uiding customers seamlessly from product discovery to purchase.
              </p>
              <p className="text-center">
                <a
                href="/signup"
                aria-label=""
                className="inline-flex items-center font-semibold tracking-wider transition-colors duration-200 text-blue-700 hover:text-blue-400 hover:underline"
              >
                Sign Up
                <svg
                  className="inline-block w-3 ml-2"
                  fill="currentColor"
                  viewBox="0 0 12 12"
                >
                  <path d="M9.707,5.293l-5-5A1,1,0,0,0,3.293,1.707L7.586,6,3.293,10.293a1,1,0,1,0,1.414,1.414l5-5A1,1,0,0,0,9.707,5.293Z" />
                </svg>
              </a>
              </p>
            </div>
            <div className="w-full bg-white rounded-md shadow-2xl shadow-black md:shadow-gray-500 sm:w-3/4 lg:w-2/6">
              <LogIn/>
            </div>
          </div>
    </>
  );
};