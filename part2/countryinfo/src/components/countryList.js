import React from "react";

const CountryList = ({ filteredList, handleClick }) => {
  if (filteredList.length > 10) {
    return <div>Too many matches, please specify another filter</div>;
  } else if (filteredList.length === 0) {
    return "No such country";
  }

  if (filteredList.length === 1) {
    return <div>{filteredList[0].name}</div>;
  }

  //else
  return filteredList.map((country, idx) => {
    return (
      <>
        <div key={country.alpha3Code}>
          {country.name}
          <button onClick={() => handleClick(country)}>show</button>
        </div>
      </>
    );
  });
};

export default CountryList;
