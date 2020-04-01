import React, { useState } from "react";

const Form = ({ persons, setPersons }) => {
  const blankPhoneNumber = "00-00-00000";
  const [newName, setNewName] = useState("Enter Name");
  const [newPhone, setNewPhone] = useState(blankPhoneNumber);

  const handleNewName = event => {
    setNewName(event.target.value);
  };

  const handleNewPhone = event => {
    setNewPhone(event.target.value);
  };

  const addPerson = event => {
    event.preventDefault();
    console.log(typeof persons);

    if (persons.filter(person => person.name === newName).length > 0) {
      window.alert(`${newName} is already added to phonebook`);
      return;
    }
    setPersons(
      persons.concat({
        name: newName,
        phone: newPhone
      })
    );
    setNewName("");
    setNewPhone(blankPhoneNumber);
  };

  return (
    <form onSubmit={addPerson}>
      <div>
        name: <input value={newName} onChange={handleNewName} />
        <div>
          phone: <input value={newPhone} onChange={handleNewPhone} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
