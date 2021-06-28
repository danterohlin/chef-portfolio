import React, { useState } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [toggleSearch, setToggleSearch] = useState(false);
  let [toggleMenu, setToggleMenu] = useState(false);

  const setFocus = () => {
    !toggleSearch && document.querySelector(".searchInput").focus();
  };

  return (
    <>
      <div
        className={`transition duration-400 transform h-0 scale-0 pt-2
          ${
            toggleSearch
              ? "w-full scale-100 h-full flex justify-center items-center"
              : "w-full flex justify-center items-center"
          }`}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-6 w-6 mr-2"
          fill="none"
          viewBox="0 0 24 24"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
          />
        </svg>
        <input className="w-2/4 searchInput" placeholder="Search"></input>
        <button
          onClick={() => {
            setToggleSearch(!toggleSearch);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class="h-6 w-6 ml-1"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              stroke-linecap="round"
              stroke-linejoin="round"
              stroke-width="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>
      </div>
      <header className="bg-white">
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex items-center justify-between w-4/5 m-auto">
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inflex-flex items-center py-6 sm:px-3 sm:mr-10 text-gray-800 hover:text-yellow-500 hover:text-opacity-60 text-base sm:text-2xl font-bold poppins tracking-widest transition-colors duration-300"
            >
              Steven Miller
            </NavLink>
            <div>
              <NavLink
                to="/post"
                activeClassName="scale-125 font-bold"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 transition duration-300"
              >
                POSTS
              </NavLink>
              <NavLink
                to="/project"
                activeClassName="scale-125 font-bold"
                className="nav-link inline-flex items-center  py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
              >
                PROJECTS
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="scale-125 font-bold"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="scale-125 font-bold"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
              >
                CONTACT
              </NavLink>
            </div>
            <button
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                class="h-6 w-6 burger-menu--button"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  stroke-width="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
          </nav>

          <button
            onClick={() => {
              setToggleSearch(!toggleSearch);
              setFocus();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 mx-10 toggle-search"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      </header>

      {toggleMenu && (
        <div className="burger-menu justify-center h-20 items-center w-full right-0 top-20 w-1/3 bg-white flex z-10">
          <NavLink
            to="/post"
            activeClassName="scale-125 font-bold text-gray-500"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            POSTS
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="scale-125 font-bold text-gray-500"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="scale-125 font-bold text-gray-500"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="scale-125 font-bold text-gray-500"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            CONTACT
          </NavLink>
          <button
            onClick={() => {
              setToggleSearch(!toggleSearch);
              setFocus();
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6 ml-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </button>
        </div>
      )}
    </>
  );
}
