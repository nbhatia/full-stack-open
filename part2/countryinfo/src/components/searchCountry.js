import React from "react";

const SearchCountry = ({ handleChange }) => {
  return (
    <form>
      <div>
        find countries <input onChange={handleChange} />
      </div>
    </form>
  );
};

export default SearchCountry;
