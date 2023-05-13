import React from 'react';

const Similars = ({ item }) => {
  return (
    <div>
      <h2 className='text-lg font-semibold mb-4 text-center' >Similars</h2>
      <div className="flex gap-4 justify-center">
        <div className="w-[10rem] flex items-center justify-center ">
          <img className="max-w-full h-auto"
          alt={item.name} 
          src={item.sprites.back_default} />
        </div>
        <div className="w-[10rem] flex items-center justify-center ">
          <img className="max-w-full h-auto"
          alt={item.name} 
          src={item.sprites.back_shiny} />
        </div>
      </div>
      
    </div>
  );
};

export default Similars;
