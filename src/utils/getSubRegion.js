const getSubregions = (countries, region) => {
  const filteredCountries = countries.filter(
    (country) => country.region === region
  );
  return Array.from(
    new Set(filteredCountries.map((country) => country.subregion))
  );
};

export default getSubregions;
