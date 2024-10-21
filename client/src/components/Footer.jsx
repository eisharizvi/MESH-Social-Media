import React from "react";
/**
 * Renders the footer component for the react app
 */
const Footer = () => {
  return (
    <footer className="fixed inset-x-0 bottom-0 bg-white border-t-2 border-gray-100">
      <div className="container mx-auto pt-3 pb-10">
        {/* <ul className="flex justify-center flex-wrap text-sm text-slate-600">
          <li className="mx-2">
            <a
              href="/"
              className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
            >
              Home
            </a>
          </li>
          <li className="mx-2">
            <a
              href="/about"
              className="inline-block hover:text-slate-900 hover:underline py-2 px-3"
            >
              About
            </a>
          </li>
        </ul> */}
        {/* <hr className="my-4" /> */}
        <p className="text-center text-sm text-slate-700 pt-2">
          &copy; CSCI 2020 - Humaiyun Uddin - Eisha Rizvi - Sadhna Drall - Mridul Sharma
        </p>
      </div>
    </footer>
  );
};

export default Footer;
