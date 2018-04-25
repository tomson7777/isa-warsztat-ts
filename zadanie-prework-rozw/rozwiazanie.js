const parseCountry = country => {
  return {
    hasMoreThanFourNeighbors: country.borders.length > 4 ? 'YES' : 'NO',
    population: country.population,
    area: `${Math.floor(country.area)} KM2`
  }
};

const countriesReducer = (acc, country) => ({...acc, [country.name.toUpperCase()]: parseCountry(country) });

const getInfo = () => {
  return fetch('https://restcountries.eu/rest/v2/all')
    .then(response => response.json())
    .then(countries => countries
      .filter(country => country.borders.includes('POL'))
      .reduce(countriesReducer, {}))
    .then(console.log);
}