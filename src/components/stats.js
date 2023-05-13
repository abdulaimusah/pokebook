import React from 'react';

const Stats = ({ item }) => {
  return (
    <div className="flex flex-col items-center" >
      <h2 className='text-lg font-semibold mb-4 text-center' >Stats </h2>
      <ul  >
        {item.stats.map((stat) => (
          <li key={stat.stat.name}>
            {stat.stat.name}: {stat.base_stat}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Stats;
