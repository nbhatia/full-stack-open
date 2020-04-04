import React, { useState, useEffect } from "react";
import Weather from "./weather";
import Axios from "axios";

const CountryDetails = ({ country }) => {
  const [weatherData, setWeatherData] = useState(null);

  useEffect(() => {
    // define the api key as env
    const API_KEY = process.env.REACT_APP_WEATHERSTACK_API_KEY;

    const weatherURL = `http://api.weatherstack.com/current?access_key=${API_KEY}&query=${country.capital}`;

    Axios.get(weatherURL).then(res => {
      if (res.data.current) {
        setWeatherData(res.data.current);
      }
    });
  }, [country.capital]);

  return (
    <div>
      <h2>{country.name}</h2>
      <div>capital {country.capital}</div>
      <div>population {country.population}</div>
      <h3>languages</h3>
      <ul>
        {country.languages.map((lang, idx) => (
          <li key={idx}>{lang.name}</li>
        ))}
      </ul>
      <img width="100" height="100" src={country.flag} alt="flag" />
      <h2>Weather in {country.capital}</h2>
      <Weather weatherData={weatherData} />
    </div>
  );
};

export default CountryDetails;
