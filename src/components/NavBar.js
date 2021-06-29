import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function Navbar() {
  let [toggleSearch, setToggleSearch] = useState(false);
  let [toggleMenu, setToggleMenu] = useState(false);
  let [toggleResults, setToggleResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");

  const setFocus = () => {
    !toggleSearch && document.querySelector(".searchInput").focus();
  };

  useEffect(() => {
    if (searchValue.length > 1) {
      setToggleResults(true);
    } else {
      setToggleResults(false);
    }
  }, [searchValue]);

  return (
    <>
      <header className="bg-white">
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
            className="h-5 w-5 mr-2"
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
          <div className="relative">
            <input
              className="searchInput md:w-96"
              id="myInput"
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder="Search"
            ></input>
            {toggleResults && (
              <div className="absolute w-full flex flex-col px-2 sm:p-2">
                <a href="#about">Some result..</a>
              </div>
            )}
          </div>
          <button
            onClick={() => {
              setToggleSearch(!toggleSearch);
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container mx-auto flex justify-between items-center">
          <nav className="flex items-center justify-between w-4/5 m-auto">
            <button
              className="burger-menu--button"
              onClick={() => {
                setToggleMenu(!toggleMenu);
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h16"
                />
              </svg>
            </button>
            <NavLink
              to="/"
              exact
              activeClassName="text-white"
              className="inflex-flex items-center py-6 sm:px-3 m:mr-10 text-gray-800 hover:text-yellow-400 hover:text-opacity-60 text-base sm:text-2xl font-bold poppins tracking-widest transition-colors duration-300"
            >
              Steven Miller
            </NavLink>
            <div className="flex">
              <NavLink
                to="/post"
                activeClassName="scale-125 font-bold text-yellow-400"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 transition duration-300"
              >
                POSTS
              </NavLink>
              <NavLink
                to="/project"
                activeClassName="scale-125 font-bold text-yellow-400"
                className="nav-link inline-flex items-center  py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
              >
                PROJECTS
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="scale-125 font-bold text-yellow-400"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="scale-125 font-bold text-yellow-400"
                className="nav-link inline-flex items-center py-3 px-2 sm:px-8 my-6 rounded text-gray-800 text-xs poppins hover:text-opacity-60 sm:text-sm transform hover:scale-125 duration-300"
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
                  className="h-5 w-5 md:ml-7"
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
          </nav>
        </div>
      </header>

      {toggleMenu && (
        <div className="burger-menu justify-center pb-5 items-center w-full right-0 top-20 w-1/3 bg-white flex">
          <NavLink
            to="/post"
            activeClassName="scale-125 font-bold text-yellow-400"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            POSTS
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="scale-125 font-bold text-yellow-400"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            PROJECTS
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="scale-125 font-bold text-yellow-400"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            ABOUT
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName="scale-125 font-bold text-yellow-400"
            className="transform transition duration-200 flex mx-3 text-xs"
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </>
  );
}
