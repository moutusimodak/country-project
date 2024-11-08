import { useState, useEffect } from "react";
import Navbar from "../components/Navbar";
import Select from "../components/Select";
import CountryCard from "../components/CountryCard";

import fetchCountry from "../utils/fetchCountry";
import getSubregions from "../utils/getSubRegion";
import filterAndSort from "../utils/filterAndSort";


import config from "../config/config"

const HomePage = () => {
  const [countries, setCountries] = useState([]);
  const [search, setSearch] = useState("");
  const [region, setRegion] = useState("");
  const [regions, setRegions] = useState([]);
  const [subregion, setSubregion] = useState("");
  const [subregions, setSubregions] = useState([]);
  const [sortCountry, setSortCountry] = useState("");
  const [theme, setTheme] = useState("light");
  const [error, setError] = useState(null);

  // Fetch country
  useEffect(() => {
    const loadCountries = async () => {
      try {
        const data = await fetchCountry(config);
        setCountries(data);
        const uniqueRegions = Array.from(
          new Set(data.map((country) => country.region))
        );
        setRegions(uniqueRegions);
      } catch (err) {
        setError(() => err);
      }
    };
    loadCountries();
  }, []);

  // Update subregions
  useEffect(() => {
    setSubregions(getSubregions(countries, region));
  }, [region, countries]);

  // Filter countries based on search, region, and subregion
  const filteredCountries = filterAndSort(
    countries,
    search,
    region,
    subregion,
    sortCountry
  );

  return (
    <div
      className={
        theme === "light"
          ? "bg-white text-black min-h-screen"
          : "bg-gray-900 text-white min-h-screen"
      }
    >
      <Navbar theme={theme} setTheme={setTheme} />

      <div className="p-4 flex flex-col space-y-4">
        <Select
          search={search}
          setSearch={setSearch}
          region={region}
          setRegion={setRegion}
          regions={regions}
          subregion={subregion}
          setSubregion={setSubregion}
          subregions={subregions}
          sortCountry={sortCountry}
          setSortCountry={setSortCountry}
          theme={theme}
        />
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10 p-16 w-full">
          {filteredCountries.map((country) => (
            <CountryCard key={country.cca3} country={country} theme={theme} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default HomePage;
