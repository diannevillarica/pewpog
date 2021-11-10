import { ArrowRightIcon } from "@heroicons/react/solid";
import React from "react";
import { Link } from "react-router-dom";

function Navbar(props) {
  return (
    <header className="top-0 z-10">
      <nav className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
        <div className="title-font font-medium text-white mb-4 md:mb-0">
          <Link class="navbar-logo" to="/">
            <img
              className="md:w-32"
              src="https://pewpog.com/wp-content/uploads/2020/08/A-83556_JPL-2-e1598585923307.png"
            />
          </Link>
        </div>

        <ul className="md:mr-auto md:ml-4 md:py-1 md:pl-4 md:border-l md:border-gray-700	flex flex-wrap items-center text-base justify-center">
          <li>
            <Link
              class="nav-link"
              to="/browse"
              className="mr-5 hover:text-black"
            >
              Browse
            </Link>
          </li>
          <li>
            <Link
              class="nav-link"
              to="/create"
              className="mr-5 hover:text-black"
            >
              Create Tournament
            </Link>
          </li>
        </ul>
        <a
          href="#signup"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 mr-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Signup
        </a>
        <a
          href="#login"
          className="inline-flex items-center bg-gray-800 border-0 py-1 px-3 focus:outline-none hover:bg-gray-700 rounded text-base mt-4 md:mt-0"
        >
          Login
          <ArrowRightIcon className="w-4 h-4 ml-1" />
        </a>
      </nav>
    </header>
  );
}

export default Navbar;
