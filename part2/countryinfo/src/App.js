import React, { useState, useEffect } from "react";
import Axios from "axios";

import SearchCountry from "./components/searchCountry";
import CountryDetails from "./components/countryDetails";
import CountryList from "./components/countryList";

const App = () => {
  const [countryList, setCountryList] = useState([]);

  const [filteredCountryList, setFilteredCountryList] = useState([]);

  const [country, setCountry] = useState("");

  const countryListURL = "https://restcountries.eu/rest/v2/all";

  const doSearch = event => {
    const filter = event.target.value.toLowerCase();
    const filteredList = countryList.filter(country =>
      country.name.toLowerCase().startsWith(filter)
    );

    // will trigger the re-render of CountryList component
    setFilteredCountryList(filteredList);

    // will trigger the re-render of Country component
    if (filteredList.length === 1) {
      setCountry(filteredList[0]);
    } else {
      setCountry("");
    }
  };

  useEffect(() => {
    Axios.get(countryListURL).then(res => setCountryList(res.data));
  }, []);

  const showCountry = country => {
    setCountry(country);
  };

  if (country) {
    return (
      <div>
        <SearchCountry handleChange={doSearch} />
        <CountryList
          filteredList={filteredCountryList}
          handleClick={showCountry}
        />
        <CountryDetails country={country} />
      </div>
    );
  } else {
    return (
      <div>
        <SearchCountry handleChange={doSearch} />
        <CountryList
          filteredList={filteredCountryList}
          handleClick={showCountry}
        />
      </div>
    );
  }
};

export default App;
