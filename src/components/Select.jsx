


import React from 'react';
import SearchBar from './SearchBar';
import FilterSelect from './FilterSelect';
import SubRegion from './SubRegion';
import Sort from './Sort';

const Select = ({ search, setSearch, region, setRegion, regions, subregion, setSubregion, subregions, sortCountry, setSortCountry, theme }) => {
  return (
    <div className="flex flex-col mt-10 space-y-4 pl-16 pr-16">

      <div className="flex flex-col md:flex-row md:justify-between md:space-x-4">
        <SearchBar search={search} setSearch={setSearch} theme={theme} />
        <FilterSelect region={region} setRegion={setRegion} regions={regions} theme={theme} />
        <SubRegion
        region={region}
        subregion={subregion}
        setSubregion={setSubregion}
        subregions={subregions}
        theme={theme}  
      />
       <Sort sortCountry={sortCountry} setSortCountry={setSortCountry} theme={theme} />
      </div>

   
    </div>
  );
};

export default Select;

