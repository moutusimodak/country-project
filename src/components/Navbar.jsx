import React from "react";

const Navbar = ({ theme, setTheme }) => {
  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === "light" ? "dark" : "light"));
  };

  return (
    <nav
      className={`flex justify-between items-center p-20 md:p-4 pl-2 pr-2 md:pl-4 md:pr-4 shadow-md ${
        theme === "light" ? "bg-white" : "bg-gray-800"
      } h-20 md:h-16 w-full`}
    >
      <h1
        className={`font-extrabold text-xl p-16 ${
          theme === "light" ? "text-black" : "text-white"
        } text-left `}
      >
        Where in the world?
      </h1>
      <button
        onClick={toggleTheme}
        className={`flex items-center bg-transparent border-none outline-none pr-16 ${
          theme === "light" ? "text-black" : "text-white"
        }`}
      >
        <i
          className={`fa-regular ${
            theme === "light" ? "fa-moon" : "fa-sun"
          } mr-2`}
        ></i>
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
