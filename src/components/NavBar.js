import React, { useState, useEffect } from "react";
import { NavLink, useLocation } from "react-router-dom";
import { Link as LinkScroll } from "react-scroll";
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
				className={`fixed top-0 min-h-12 bg-opacity-80 bg-black text-white left-0 w-screen z-10 transition-all duration-200 ${
					scrollY > 50
						? "bg-black"
						: ("lg:bg-transparent text-white" && location.pathname === "/") ||
						  location.pathname === "/tutorial" ||
						  location.pathname === "/post"
						? "text-black lg:bg-transparent"
						: "text-white"
				}`}
			>
				<div
					className={`transition duration-400 bg-white bg-opacity-30 transform h-0 scale-0
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
							placeholder="Type recipe to see a few examples"
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
				{toggleResults && <SearchResult data={data} searchValue={searchValue} />}
				<div className="mx-auto flex justify-between items-center h-full bg-opacity-80">
					<nav className="flex items-center justify-between w-4/5 sm:w-3/5 m-auto">
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
							activeClassName="text-green-300"
							className={` whitespace-nowrap py-5 lg:px-10 items-center xl:px-12 text-white text-base sm:text-2xl font-bold poppins tracking-wide ${
								location.pathname === "/contact" ? "text-yellow-400" : "text-green-300"
							}`}
						>
							Steven Miller
						</NavLink>
						<div className="flex">
							<NavLink
								to="/post"
								activeClassName=" border-b text-yellow-200"
								className="nav-link inline-flex items-center px-2 pb-2 xl:px-4 my-6  text-s poppins hover:opacity-50 sm:text-sm transform "
							>
								Recepies
							</NavLink>
							<NavLink
								to="/lessons"
								activeClassName=" border-b text-yellow-200"
								className="nav-link whitespace-nowrap inline-flex items-center px-2 pb-2 xl:px-4 my-6 text-s poppins hover:opacity-50 sm:text-sm "
							>
								Lessons
							</NavLink>
							<NavLink
								to="/about"
								activeClassName=" border-b text-yellow-200"
								className="nav-link inline-flex items-center px-2 pb-2 xl:px-4 my-6  text-s poppins hover:opacity-50 sm:text-sm "
							>
								About
							</NavLink>
							<NavLink
								to="/contact"
								activeClassName=" border-b text-yellow-200"
								className="whitespace-nowrap nav-link inline-flex items-center  px-2  pb-2 xl:px-4 my-6  text-s poppins hover:opacity-50 sm:text-sm"
							>
								Contact
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
									className="h-6 w-6 md:ml-7 duration-200 pb-2 transition transform hover:scale-125"
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
				{toggleMenu && (
					<div
						className={`burger-menu z-10 justify-center py-4 items-center w-full right-0 top-10 sm:top-12  w-1/3 flex ${
							scrollY > 100
								? "text-white"
								: ("bg-transparent text-white" && location.pathname === "/") ||
								  location.pathname === "/tutorial" ||
								  location.pathname === "/post"
								? "text-white"
								: "text-white lg:text-black"
						}`}
					>
						<NavLink
							to="/post"
							activeClassName="text-yellow-400"
							className="poppins transform transition duration-200 flex mx-3 text-sm "
						>
							Recepies
						</NavLink>
						<NavLink
							to="/lessons"
							activeClassName="text-yellow-400"
							className="poppins transform transition duration-200 flex mx-3 text-sm "
						>
							Lessons
						</NavLink>
						<NavLink
							to="/about"
							activeClassName="text-yellow-400"
							className="poppins transform transition duration-200 flex mx-3 text-sm "
						>
							About
						</NavLink>
						<NavLink
							to="/contact"
							activeClassName=" text-yellow-400"
							className="whitespace-nowrap poppins transform transition duration-200 flex mx-3 text-sm "
						>
							Contact
						</NavLink>
					</div>
				)}
			</header>

			{scrollY > 200 && (
				<LinkScroll
					to="main"
					smooth={true}
					duration={500}
					className="fixed bottom-14 -right-5 text-white text-base -rotate-90 transform sm:animate-bounce sm:bottom-20 sm:right-20 cursor-pointer z-10 sm:text-4xl"
				>
					△
				</LinkScroll>
			)}
		</>
	);
}
