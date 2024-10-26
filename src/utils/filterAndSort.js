const filterAndSort = (countries, search, region, subregion, sortCountry) => {
  return countries
    .filter((country) => {
      const matchesSearch = country.name.common
        .toLowerCase()
        .includes(search.toLowerCase());
      const matchesRegion = !region || country.region === region;
      const matchesSubregion = !subregion || country.subregion === subregion;
      return matchesSearch && matchesRegion && matchesSubregion;
    })
    .sort((a, b) => {
      switch (sortCountry) {
        case "populationAsc":
          return a.population - b.population;
        case "populationDsc":
          return b.population - a.population;
        case "areaAsc":
          return a.area - b.area;
        case "areaDsc":
          return b.area - a.area;
        default:
          return 0;
      }
    });
};

export default filterAndSort;
