import React from "react";
/**
 * A navigation bar component for the web app
 */
const Navbar = () => {
  return (
    <div className="relative border-b ">
      <nav className="container mx-auto">
        <div className="max-w-4xl h-12 nd:h-16 mx-auto flex justify-between align-stretch px-4">
          <div id="logo" className="flex items-center text-blue-600 font-bold">
            <a href="/">CSCI2020 Winter 2024 Final Project</a>
          </div>
          <ul
            id="nav-links"
            className="hidden absolute md:relative md:flex md:align-stretch md:justify-end right-0 top-0 mt-10 md:mt-0 py-2 md:py-0 w-48 md:w-auto h-auto z-10 bg-white shadow md:shadow-none"
          >
            <li>
              <a
                className="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100"
                href="/"
              >
                Home
              </a>
            </li>
            <li>
              <a
                className="w-full h-full flex md:items-center pl-6 md:pl-4 pr-4 py-1 hover:bg-gray-100"
                href="/about"
              >
                About
              </a>
            </li>
          </ul>
          <div className="md:hidden flex items-center">
            <button
              id="menu-button"
              className="p-1 rounded-full focus:outline-none"
            >
            </button>
          </div>
        </div>
      </nav>
    </div>
  );
};

export default Navbar;
