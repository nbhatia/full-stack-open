import React from "react";
// import personDB from "../services/persondb";

const Persons = ({ persons, deletePerson, filter }) => {
  const rows = () => {
    const rowsToShow = filter.length
      ? persons.filter(
          person =>
            person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        )
      : persons;

    return rowsToShow
      .map(p => {
        return (
          <div key={p.id}>
            {p.name} {p.number}{" "}
            <button onClick={() => deletePerson(p)}>delete</button>
          </div>
        );
      })
      .reverse();
  };

  return (
    <div>
      <div>{rows()}</div>
    </div>
  );
};

export default Persons;
