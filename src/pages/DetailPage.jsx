import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import Navbar from "../components/Navbar";

const url = import.meta.env.VITE_URL;

const DetailPage = () => {
  const [theme, setTheme] = useState("light");
  const [country, setCountry] = useState(null);
  const [error, setError] = useState(null);
  const { code } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    const loadCountries = async () => {
      try {
        const res = await fetch(`${url}/alpha/${code}`);
        if (!res.ok) throw new Error("Network response was not ok");
        const data = await res.json();
        setCountry(data[0]);
        setError(null);
      } catch (error) {
        setError("Could not fetch country data. Please try again later.");
        console.error("Fetch error:", error);
      }
    };
    loadCountries();
  }, [code]);

  if (error) return <div>{error}</div>;
  if (!country) return <div>Loading...</div>;

  return (
    <div
      className={
        theme === "light"
          ? "bg-white text-black min-h-screen"
          : "bg-gray-900 text-white min-h-screen"
      }
    >
      <Navbar theme={theme} setTheme={setTheme} />
      <div className="mx-auto mb-10 container">
        <div className="px-10 pt-10 flex flex-col justify-center items-start gap-10">
          <button
            className="p-3 card shadow-lg rounded-md"
            onClick={() => navigate(-1)}
          >
            <i className="fa-solid fa-arrow-left-long"></i> Back
          </button>

          <div className="flex max-md:flex-col gap-10 items-center">
            <div className="w-full lg:w-[60rem] lg:h-[30rem]">
              <img
                className="w-full h-full"
                src={country.flags.png}
                alt={country.name.common}
              />
            </div>
            <div className="flex flex-col gap-10">
              <p className="text-3xl font-bold">{country.name.common}</p>
              <div className="flex  max-lg:flex-col gap-10">
                <div>
                  <p>
                    <strong>Native Name:</strong>{" "}
                    {country.name.nativeName
                      ? Object.values(country.name.nativeName)[0].common
                      : "NA"}
                  </p>
                  <p>
                    <strong>Population:</strong>{" "}
                    {country.population.toLocaleString()}
                  </p>
                  <p>
                    <strong>Region:</strong> {country.region}
                  </p>
                  <p>
                    <strong>Sub Region:</strong> {country.subregion}
                  </p>
                  <p>
                    <strong>Capital:</strong>{" "}
                    {country.capital ? country.capital.join(", ") : "NA"}
                  </p>
                </div>
                <div>
                  <p>
                    <strong>Top Level Domain:</strong>{" "}
                    {country.tld ? country.tld.join(", ") : "NA"}
                  </p>
                  <p>
                    <strong>Currencies:</strong>{" "}
                    {country.currencies
                      ? Object.values(country.currencies)
                          .map((currency) => currency.name)
                          .join(", ")
                      : "NA"}
                  </p>
                  <p>
                    <strong>Languages:</strong>{" "}
                    {country.languages
                      ? Object.values(country.languages).join(", ")
                      : "NA"}
                  </p>
                </div>
              </div>
              <div>
                <p>
                  <strong>Border Countries:</strong>
                </p>
                <div>
                  {country.borders ? (
                    country.borders.map((border, index) => (
                      <button
                        key={index}
                        onClick={() => navigate(`/country/${border}`)}
                        className="m-1 p-2 border border-gray-300 rounded card shadow-lg"
                      >
                        {border}
                      </button>
                    ))
                  ) : (
                    <span>None</span>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailPage;
