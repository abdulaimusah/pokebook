import About from "./about";
import Stats from "./stats";
import Similars from "./similars";
import React, {useState } from 'react';

function ModalContent({ item }) {
  const [activeTab, setActiveTab] = useState("about");

  const handleTabClick = (tabName) => {
    setActiveTab(tabName);
  };

  return (
    <div className=" "> 
    
      {activeTab === "about" && <About item={item} />}
      {activeTab === "stats" && <Stats item={item} />}
      {activeTab === "similars" && <Similars item={item} />}
    
      <div className="flex justify-center  
      absolute bottom-2 w-full z-[70]">
        <div className=" ">
          <button
            className={`${
              activeTab === "about" ? "bg-gray-300" : ""
            } px-4 py-2 rounded-l-lg font-medium focus:outline-none`}
            onClick={() => handleTabClick("about")}
          >
            About
          </button>
          <button
            className={`${
              activeTab === "stats" ? "bg-gray-300" : ""
            } px-4 py-2 font-medium focus:outline-none`}
            onClick={() => handleTabClick("stats")}
          >
            Stats
          </button>
          <button
            className={`${
              activeTab === "similars" ? "bg-gray-300" : ""
            } px-4 py-2 rounded-r-lg font-medium focus:outline-none`}
            onClick={() => handleTabClick("similars")}
          >
            Similars
          </button>
        </div>
      </div>
    </div>
  );
}

export default ModalContent;
