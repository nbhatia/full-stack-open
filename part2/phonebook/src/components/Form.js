import React, { useState } from "react";
// import PersonDB from "../services/persondb";

const Form = ({ addNewPerson }) => {
  const BLANK_PHONE_NUMBER = "00-00-00000";
  const formDataInit = {
    name: "",
    number: BLANK_PHONE_NUMBER
  };

  const [formData, setFormData] = useState(formDataInit);

  const formNameChange = event => {
    const newPerson = { ...formData, name: event.target.value };
    setFormData(newPerson);
  };

  const formPhoneChange = event => {
    const newPerson = { ...formData, number: event.target.value };
    setFormData(newPerson);
  };

  return (
    <form
      onSubmit={event => {
        event.preventDefault();
        addNewPerson(formData);
        setFormData(formDataInit);
        console.log("cleared the form");
      }}
    >
      <div>
        name: <input value={formData.name} onChange={formNameChange} />
        <div>
          phone: <input value={formData.number} onChange={formPhoneChange} />
        </div>
      </div>
      <div>
        <button type="submit">add</button>
      </div>
    </form>
  );
};

export default Form;
