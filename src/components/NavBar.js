import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Navbar() {
  return (
    <header className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center m-auto sm:m-0">
          <NavLink
            to="/"
            exact
            activeClassName="text-white"
            className="inflex-flex items-center py-6 px-3 text-gray-800 hover:text-yellow-400 hover:text-opacity-60 text-base sm:text-2xl font-bold poppins tracking-widest transition-colors duration-300"
          >
            Ash Thompson
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="transform scale-125"
            className="inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm hover:text-yellow-300 transition-colors duration-300"
          >
            POSTS
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="transform scale-125"
            className="inline-flex items-center  py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm hover:text-yellow-300 transition-colors duration-300"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="transform scale-125"
            className="inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm hover:text-yellow-300 transition-colors duration-300"
          >
            ABOUT
          </NavLink>
          <div></div>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 social-icons">
          <SocialIcon
            url="https://www.instagram.com/lemon.ginger.tea/"
            className="mr-4 transform hover:scale-125 transition duration-200"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/imnotcreative"
            className="mr-4 transform hover:scale-125 transition duration-200"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4 transform hover:scale-125 transition duration-200"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com"
            className="mr-4 transform hover:scale-125 transition duration-200"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
