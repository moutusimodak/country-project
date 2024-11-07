const FilterSelect = ({ region, setRegion, regions, theme }) => (
  <div className="w-full md:w-1/6 mb-4 md:mb-0">
    <select
      value={region}
      onChange={(e) => setRegion(e.target.value)}
      className={`border rounded-md p-2 shadow-lg w-full ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <option value="">Filter by Region</option>
      {regions.map((region) => (
        <option key={region} value={region}>
          {region}
        </option>
      ))}
    </select>
  </div>
);

export default FilterSelect;
