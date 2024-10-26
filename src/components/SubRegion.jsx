import React from 'react';

const SubRegion = ({ region, subregion, setSubregion, subregions , theme}) => (
  region && subregions.length > 0 && (
    <div className="w-full md:w-1/6 mb-4 md:mb-0">
      <select
        value={subregion}
        onChange={(e) => setSubregion(e.target.value)}
        className={`border rounded-md p-2 shadow-lg w-full ${
            theme === 'light' ? 'bg-white text-black' : 'bg-gray-800 text-white'
          }`}
      >
        <option value="">Filter by Subregion</option>
        {subregions.map((subregion) => (
          <option key={subregion} value={subregion}>
            {subregion}
          </option>
        ))}
      </select>
    </div>
  )
);

export default SubRegion;
