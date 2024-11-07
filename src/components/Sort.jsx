const Sort = ({ sortCountry, setSortCountry, theme }) => (
  <div className="w-full md:w-1/6 ">
    <select
      value={sortCountry}
      onChange={(e) => setSortCountry(e.target.value)}
      className={`border rounded-md p-2 shadow-lg w-full ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    >
      <option value="">Sort by</option>
      <option value="populationAsc">Population (Ascending)</option>
      <option value="populationDsc">Population (Descending)</option>
      <option value="areaAsc">Area (Ascending)</option>
      <option value="areaDsc">Area (Descending)</option>
    </select>
  </div>
);

export default Sort;
