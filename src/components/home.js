import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import logo from '../logo.svg';

function Home({setQuery}) {

  const [searchQuery, setSearchQuery] = useState('');
  const navigate = useNavigate();

  const handleSearchInputChange = (e) => {
    setSearchQuery(e.target.value);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    setQuery(searchQuery);
    navigate("/viewall");
    
  };

  
  const handleSearchKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleSearchSubmit(e);
    }
  };


  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <div className="w-40 flex justify-center ">
      <img className="mb-2 max-w-full"
      src="https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/6.png" alt="Logo" />
      </div>
      <h1 className="text-xl font-bold mb-2">
        <span className="mr-2">Poke</span> 
        <span className="text-pink-500">book</span>
      </h1>
      <p className="text-lg text-center mb-8">
        Short description goes here
      </p>
      <form className="mb-4" onSubmit={handleSearchSubmit}>
        <div className="relative flex items-center">
          <input
            type="text"
            className="border-2 border-pink-500 rounded-full
            outline-pink-500
             py-1 px-4 pr-12 w-full"
            placeholder="Search"
            value={searchQuery}
            onChange={handleSearchInputChange}
            onKeyDown={handleSearchKeyDown}
          />
          <svg
            className="h-6 w-6 absolute inset-y-auto right-3 text-white 
            bg-pink-500 rounded-full pb-1 "
            fill="none"
            stroke="currentColor"
            viewBox="0 0 24 24"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-4.873-4.873"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M15.5 10.5a5 5 0 11-7.07 0 5 5 0 017.07 0z"
            />
          </svg>
        </div>
        
      </form>
      <Link to="/viewall" >
          <button className="underline decoration-pink-500">View all</button>
        </Link>
    </div>
  );
}

export default Home;
