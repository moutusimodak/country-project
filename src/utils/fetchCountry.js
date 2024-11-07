const fetchCountry = async (url) => {
  const response = await fetch(`${url}/all`);
  if (!response.ok) {
    throw new Error("Failed to fetch ");
  }
  const data = await response.json();
  return data;
};

export default fetchCountry;
