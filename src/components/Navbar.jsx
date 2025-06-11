import { useState } from "react";

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const username = localStorage.getItem("username");

  const handleLogout = () => {
    localStorage.removeItem("token");
    window.location.href = "/";
  };

  return (
    <header className="w-full shadow-sm bg-white poppins-regular ">
      <div className="mx-auto px-4 py-4 sm:px-6 lg:px-8 flex justify-between items-center">
        <h1 className="text-xl font-bold text-blue-800">Quebot</h1>

        {/* Desktop Menu */}
        <div className="hidden sm:flex items-center space-x-6">
          <p className="text-gray-700 font-medium">{username}</p>
          <button
            onClick={handleLogout}
            className="px-4 py-1 bg-purple-500 hover:bg-red-600 text-white cursor-pointer rounded transition duration-200"
          >
            Log out
          </button>
        </div>

        {/* Mobile Menu Button */}
        <div className="sm:hidden">
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className="text-gray-700 focus:outline-none"
            aria-label="Toggle menu"
          >
            {isMenuOpen ? (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg
                className="w-6 h-6"
                fill="none"
                stroke="currentColor"
                viewBox="0 0 24 24"
              >
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Dropdown */}
      {isMenuOpen && (
        <div className="sm:hidden px-4 pb-4">
          <div className="flex flex-col items-start space-y-2 bg-gray-50 p-4 rounded shadow">
            <p className="text-gray-700 font-medium">{username}</p>
            <button
              onClick={handleLogout}
              className="w-full text-left text-white bg-red-500 hover:bg-red-600 px-4 py-2 rounded transition duration-200"
            >
              Log out
            </button>
          </div>
        </div>
      )}
    </header>
  );
};
