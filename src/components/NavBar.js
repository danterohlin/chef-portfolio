import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import SearchResult from "./SearchResult";
import SanityClient from "../client.js";

export default function Navbar() {
  let [toggleSearch, setToggleSearch] = useState(false);
  let [toggleMenu, setToggleMenu] = useState(false);
  let [toggleResults, setToggleResults] = useState(false);
  const [searchValue, setSearchValue] = useState("");
  const [scrollY, setScrollY] = useState(0);
  const [data, setData] = useState(null);
  const location = useLocation();

  const setFocus = () => {
    !toggleSearch && document.querySelector(".searchInput").focus();
  };

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    handleScroll();

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    if (searchValue.length > 1) {
      setToggleResults(true);
    } else {
      setToggleResults(false);
    }
  }, [searchValue]);

  const fetchData = async (query) => {
    try {
      const data = await SanityClient.fetch(query);
      if (data) {
        setData(data);
      }
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    const query = `*[_type == "post"]{slug}
    `;
    fetchData(query);
  }, []);

  return (
    <>
      <header
        className={`fixed top-0 left-0 w-screen z-10 ${
          scrollY > 100
            ? "bg-white bg-opacity-80 text-black"
            : "bg-transparent text-white" && location.pathname === "/"
            ? "text-white"
            : "text-black"
        }`}
      >
        <div
          className={`transition duration-400 bg-white transform h-0 scale-0
          ${
            toggleSearch
              ? "w-full scale-100 h-full flex justify-center items-center"
              : "w-full flex justify-center items-center"
          }`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 mr-5 text-black"
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
          <div className="relative w-2/4">
            <input
              className="searchInput w-full mx-auto text-black"
              id="myInput"
              value={searchValue}
              onChange={(e) => {
                setSearchValue(e.target.value);
              }}
              placeholder='Try to search for "post"'
            ></input>
          </div>

          <button
            onClick={() => {
              setToggleSearch(!toggleSearch);
              setSearchValue("");
            }}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5 ml-4 text-black"
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
        {toggleResults && (
          <SearchResult data={data} searchValue={searchValue} />
        )}
        <div className="mx-auto flex justify-between items-center h-full bg-opacity-80">
          <nav className="flex items-center justify-between w-3/5 m-auto">
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
              activeClassName="text-yellow-400"
              className="text-yellow-400 whitespace-nowrap items-center sm:px-3 m:mr-10 text-white hover:text-yellow-800 hover:text-opacity-100 text-base sm:text-2xl font-bold poppins tracking-widest transition-colors duration-300"
            >
              Steven Miller
            </NavLink>
            <div className="flex">
              <NavLink
                to="/post"
                activeClassName="font-bold text-black"
                className="nav-link inline-flex items-center  px-2 sm:px-8 my-6 rounded text-s poppins hover:text-gray-300 sm:text-md transform  transition duration-300"
              >
                RECEPIES
              </NavLink>
              <NavLink
                to="/tutorial"
                activeClassName="font-bold text-black"
                className="nav-link inline-flex items-center   px-2 sm:px-8 my-6 rounded text-s poppins hover:text-gray-300 sm:text-md transform  duration-300"
              >
                R TUTORIALS
              </NavLink>
              <NavLink
                to="/about"
                activeClassName="font-bold text-black"
                className="nav-link inline-flex items-center  px-2 sm:px-8 my-6 rounded text-s poppins hover:text-gray-300 sm:text-md transform  duration-300"
              >
                ABOUT
              </NavLink>
              <NavLink
                to="/contact"
                activeClassName="font-bold text-black"
                className="whitespace-nowrap nav-link inline-flex items-center  px-2 sm:px-8 my-6 rounded text-s poppins hover:text-gray-300 sm:text-md transform  duration-300"
              >
                CONTACT ME
              </NavLink>
              <button
                onClick={() => {
                  setToggleSearch(!toggleSearch);
                  setSearchValue("");
                  setFocus();
                }}
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5 md:ml-7 transform hover:scale-125"
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
        <div className="burger-menu fixed top-20 z-10 justify-center pb-5 items-center w-full right-0 top-20 w-1/3 bg-white flex">
          <NavLink
            to="/post"
            activeClassName=" font-bold text-yellow-400"
            className="poppins transform transition duration-200 flex mx-3 text-sm font-bold"
          >
            RECEPIES
          </NavLink>
          <NavLink
            to="/project"
            activeClassName=" font-bold text-yellow-400"
            className="poppins transform transition duration-200 flex mx-3 text-sm font-bold"
          >
            PROJECT
          </NavLink>
          <NavLink
            to="/about"
            activeClassName=" font-bold text-yellow-400"
            className="poppins transform transition duration-200 flex mx-3 text-sm font-bold"
          >
            ABOUT ME
          </NavLink>
          <NavLink
            to="/contact"
            activeClassName=" font-bold text-yellow-400"
            className="poppins transform transition duration-200 flex mx-3 text-sm font-bold"
          >
            CONTACT
          </NavLink>
        </div>
      )}
    </>
  );
}
