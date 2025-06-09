import React from "react";


const SignUp = () => {
  return (
    <>
      <section class="bg-gray-50 ">
        <div class="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div class="w-full bg-white rounded-lg shadow-lg shadow-gray-500 md:mt-0 sm:max-w-md xl:p-0 ">
            <div class="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 class="text-xl text-center font-bold leading-tight tracking-tight text-gray-900 md:text-2xl">
                Create an account
              </h1>
              <form class="space-y-4 md:space-y-6" action="#">
                <div>
                  <label
                    for="username"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Username
                  </label>
                  <input
                    type="username"
                    name="username"
                    id="username"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="username"
                    required
                  />
                </div>
                
                <div>
                  <label
                    for="email"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Email
                  </label>
                  <input
                    type="email"
                    name="email"
                    id="email"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="email"
                    required
                  />
                </div>
                <div>
                  <label
                    for="phoneNumber"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Phone no.
                  </label>
                  <input
                    type="phoneNumber"
                    name="phoneNumber"
                    id="phoneNumber"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    placeholder="*******"
                    required
                  />
                </div>
                <div>
                  <label
                    for="password"
                    class="block mb-2 text-sm font-medium text-gray-900"
                  >
                    Password
                  </label>
                  <input
                    type="password"
                    name="password"
                    id="password"
                    placeholder="••••••••"
                    class="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg block w-full p-2.5"
                    required
                  />
                </div>
                
                
                <button
                  type="submit"
                  class="w-full text-white bg-blue-600 hover:bg-blue-700 cursor-pointer font-medium rounded-lg text-sm px-5 py-2.5 text-center "
                >
                  Sign up
                </button>
                <p class="text-sm font-light text-gray-800 text-center">
                  Already have an account?{" "}
                  <a
                    href="/"
                    class="font-medium text-blue-600 underline hover:text-blue-900"
                  >
                    Login here
                  </a>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default SignUp;
