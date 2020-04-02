import React, { useState, useEffect } from "react";
import axios from "axios";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";

const App = () => {
  const url = "http://localhost:3001/persons";

  const [persons, setPersons] = useState([]);

  useEffect(() => {
    console.log("effect");
    axios.get(url).then(res => setPersons(res.data));
  }, []);

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
