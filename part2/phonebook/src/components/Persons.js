import React from "react";

const Persons = ({ persons, filter }) => {
  const rows = () => {
    console.log("searching ", filter);
    const rowsToShow = filter.length
      ? persons.filter(
          person =>
            person.name.toLowerCase().indexOf(filter.toLowerCase()) !== -1
        )
      : persons;

    return rowsToShow
      .map(p => (
        <p key={p.name}>
          {p.name} {p.phone}
        </p>
      ))
      .reverse();
  };

  return (
    <div>
      <div>{rows()}</div>
    </div>
  );
};

export default Persons;
