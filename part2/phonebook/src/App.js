import React, { useState, useEffect } from "react";

import Filter from "./components/Filter";
import Form from "./components/Form";
import Persons from "./components/Persons";
import PersonDB from "./services/persondb";

const App = () => {
  const [persons, setPersons] = useState([]);

  useEffect(() => {
    PersonDB.getAll()
      .then(persons => setPersons(persons))
      .catch(err => alert("failed to connect to server. ", err));
  }, []);

  const [filter, setFilter] = useState("");

  const doFilter = event => setFilter(event.target.value);

  const addPerson = formData => {
    const existingPerson = persons.filter(
      person => person.name === formData.name
    );

    if (existingPerson.length > 0) {
      console.log("Existing person: ", existingPerson[0]);
      // Ask user's permission to update
      if (
        window.confirm(
          `${formData.name} is already added to phonebook. Do you want to replace the old number with a new one?`
        )
      ) {
        console.log("updating person: ", existingPerson.id);
        PersonDB.updatePerson(existingPerson[0].id, {
          ...existingPerson[0],
          number: formData.number
        }).then(res => {
          setPersons(persons.filter(p => p.id !== res.id).concat(res));
        });
      } else {
        console.log("Person add cancelled");
      }
    } else {
      // it's a new person..add it to the DB
      PersonDB.addPerson(formData).then(person => {
        setPersons(persons.concat(person));
      });
      console.log("Person added..ok");
    }
  };

  const deletePerson = person => {
    PersonDB.deletePerson(person.id).then(res => {
      console.log(`${person.name} entry deleted...${res}`);
      setPersons(persons.filter(p => p.id !== person.id));
    });
  };

  return (
    <div>
      <h2>My Phonebook</h2>
      <Filter doFilter={doFilter} />

      <h3>Add a new</h3>
      <Form addNewPerson={addPerson} />

      <h3>Numbers</h3>
      <Persons persons={persons} deletePerson={deletePerson} filter={filter} />
    </div>
  );
};

export default App;
