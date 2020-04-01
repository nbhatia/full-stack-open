import React from "react";

const Filter = ({ doFilter }) => {
  return (
    <div>
      Search.. <input onChange={doFilter} />
    </div>
  );
};

export default Filter;
