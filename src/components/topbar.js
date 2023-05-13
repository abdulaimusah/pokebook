import React, { useState } from "react";

const TopBar = ({ setQuery, setThemeButton, themeColor }) => {
	const [searchQuery, setSearchQuery] = useState("");

	const handleSearchInputChange = (e) => {
		setSearchQuery(e.target.value);
	};

	const handleSearchSubmit = (e) => {
		e.preventDefault();
		setQuery(searchQuery);
	};

	const handleSearchKeyDown = (e) => {
		if (e.key === "Enter") {
			handleSearchSubmit(e);
		}
	};

	return (
		<div
			className="flex items-center justify-between
    sticky top-0 z-10 shadow-lg shadow-slate-400
     bg-white text-black py-1 px-6"
		>
			<div className="flex items-center">
				<img
					src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/39.png"
					alt="Logo"
					className="mr-1 h-12 w-12"
				/>
				<div className="font-bold text-lg">
          Poke <span className={`text-${themeColor}`} >book</span>
        </div>
			</div>

			<div className="flex-1 mr-12 flex justify-center">
				<div className="relative rounded-md shadow-sm 
        md:w-1/2 ">
					<input
						type="text"
						name="search"
						id="search"
						className={`focus:ring-${themeColor} focus:border-${themeColor} 
						block 
            text-black p-1  border-2 outline-none
            w-full pl-10 sm:text-sm border-gray-300 rounded-xl `}
						placeholder="Search"
						onKeyDown={handleSearchKeyDown}
						onChange={handleSearchInputChange}
					/> {/*
					<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
						<svg
							className="h-5 w-5 text-gray-400"
							fill="currentColor"
							viewBox="0 0 20 20"
							xmlns="http://www.w3.org/2000/svg"
						>
							<path
								fillRule="evenodd"
								d="M8.5 3A5.5 5.5 0 0 1 14 8.5v1a.5.5 0 0 1-1 0V8.5A4.5 4.5 0 0 0 9.5 4h-1a.5.5 0 0 1 0-1h1zM7 8.5A3.5 3.5 0 0 1 10.5 5h1a.5.5 0 0 1 0 1h-1A2.5 2.5 0 0 0 8 8.5v1a.5.5 0 0 1-1 0v-1zM8 8.5A2.5 2.5 0 0 1 10.5 6h1a.5.5 0 0 1 0 1h-1A1.5 1.5 0 0 0 9 8.5v1a.5.5 0 0 1-1 0v-1z"
							/>
							<path
								fillRule="evenodd"
								d="M11.5 12A1.5 1.5 0 0 0 13 10.5V9a.5.5 0 0 0-1 0v1.5a.5.5 0 0 1-1 0V9a.5.5 0 0 0-1 0v1.5A1.5 1.5 0 0 0 11.5 12z"
							/>
							<path
								fillRule="evenodd"
								d="M9.5 11.5A2.5 2.5 0 0 0 7 14h-.5a.5.5 0 0 1-.5-.5v-5a.5.5 0 0 1 1 0v4h.5a1.5 1.5 0 0 0 1.5-1.5v-1z"
							/>
						</svg>
					</div> */}
				</div>
			</div>
      <div>
			<button className= {` inline-block h-6 w-6 rounded-full 
			border-2 border-gray-300 bg-${themeColor} `} 
			onClick={() => setThemeButton(true)} ></button>
      </div>
		</div>
	);
};
export default TopBar;
