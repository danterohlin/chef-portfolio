import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="w-3/5 h-60 mx-auto flex flex-col sm:flex-row justify-between">
        <nav className="flex flex-col items-center sm:items-right py-3 px-3 my-6 m-auto sm:m-0 sm:my-6 sm:border-r sm:border-gray-400">
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="items-center py-2 px-2 sm:px-8 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 transition duration-300"
          >
            Contact Me
          </NavLink>
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="items-center  py-2 px-2 sm:px-8 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
          >
            Certificates
          </NavLink>
          <NavLink
            to="#"
            activeClassName="transform scale-125"
            className="items-center py-2 px-2 sm:px-8 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
          >
            Sponsorship
          </NavLink>
          <div></div>
        </nav>
        <div className="py-3 px-3 my-6">
          <h3 className="text-lg text-center sm:text-right poppins">
            Social Media
          </h3>
          <div className="my-6 social-icons flex sm:justify-end justify-center">
            <SocialIcon
              url="https://www.instagram.com/"
              className="mr-4 transform hover:scale-110 transition duration-200"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.facebook.com/"
              className="mr-4 transform hover:scale-110 transition duration-200"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/"
              className="mr-4 transform hover:scale-110 transition duration-200"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://www.linkedin.com"
              className="transform hover:scale-110 transition duration-200"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </div>
      </div>
    </footer>
  );
}
