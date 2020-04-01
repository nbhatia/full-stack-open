import React, { useState } from "react";
import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const [persons, setPersons] = useState([
    { name: "Arto Hellas", phone: "040-123456" },
    { name: "Ada Lovelace", phone: "39-44-5323523" },
    { name: "Dan Abramov", phone: "12-43-234345" },
    { name: "Mary Poppendieck", phone: "39-23-6423122" }
  ]);

  const [filter, setFilter] = useState("");

  const doFilter = event => setFilter(event.target.value);

  return (
    <div>
      <h2>My Phonebook</h2>
      <Filter doFilter={doFilter} />

      <h3>Add a new</h3>
      <Form persons={persons} setPersons={setPersons} />

      <h3>Numbers</h3>
      <Persons persons={persons} filter={filter} />
      {/*<hr></hr>
      <h3>Debug Data</h3>
      <div>debug: {newName}</div>*/}
    </div>
  );
};

export default App;
