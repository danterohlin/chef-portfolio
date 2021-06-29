import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="container mx-auto flex justify-between items-center">
        <nav className="flex items-center m-auto sm:m-0 footer--nav">
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 transition duration-300"
          >
            HELP
          </NavLink>
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="inline-flex items-center  py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
          >
            FAQ
          </NavLink>
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
          >
            SERVICES
          </NavLink>
          <div></div>
        </nav>
        <div className="inline-flex py-3 px-3 my-6 social-icons">
          <SocialIcon
            url="https://www.instagram.com/"
            className="mr-4 transform hover:scale-125 transition duration-300"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.facebook.com/"
            className="mr-4 transform hover:scale-125 transition duration-300"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/"
            className="mr-4 transform hover:scale-125 transition duration-300"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://www.linkedin.com"
            className="mr-4 transform hover:scale-125 transition duration-300"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </footer>
  );
}
