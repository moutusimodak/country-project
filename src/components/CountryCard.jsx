import { Link } from "react-router-dom";

const CountryCard = ({ country, theme }) => (
  <Link to={`/country/${country.cca3}`}>
    <div
      className={`shadow-lg rounded-lg m-5 overflow-hidden transition-transform transform hover:scale-105 ${
        theme === "light" ? "bg-white text-black" : "bg-gray-800 text-white"
      } w-full`}
    >
      <div className="h-[200px] w-full mb-4">
        <img
          src={country.flags.png}
          alt={country.name.common}
          className="w-full h-full object-fill "
        />
      </div>
      <div className="p-4 ">
        <h3 className="font-bold text-lg">{country.name.common}</h3>
        <p>
          <b>Population:</b> {country.population.toLocaleString()}
        </p>
        <p>
          <b>Region:</b> {country.region}
        </p>
        <p>
          <b>Capital:</b> {country.capital}
        </p>
      </div>
    </div>
  </Link>
);

export default CountryCard;
