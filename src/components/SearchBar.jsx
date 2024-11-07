const SearchBar = ({ search, setSearch, theme }) => (
  <div className="relative w-full md:w-1/3 mb-4 md:mb-0">
    <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
      <i className="fa-solid fa-magnifying-glass"></i>
    </span>
    <input
      type="text"
      value={search}
      onChange={(e) => setSearch(e.target.value)}
      placeholder="Search for a country..."
      className={`pl-10 py-2 border rounded-md shadow-lg w-full ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      }`}
    />
  </div>
);

export default SearchBar;
