import React, { useState } from "react";
import Cockpit from "../components/Cockpit/Cockpit";
import Persons from "../components/Persons/Persons";
import Aux from "../hoc/Aux";
import withClass from "../hoc/withClass";
import styles from "./App.module.css";

const App = () => {
  const [persons, setPersons] = useState([
    {
      id: "das2121",
      name: "Ching",
      age: 32
    },
    {
      id: "sfas334434",
      name: "Rechie",
      age: 31
    },
    {
      id: "chin121212",
      name: "Mae",
      age: 31
    }
  ]);
  const [showPersons, setShowPersons] = useState(false);

  const handleNameChange = (e, person) => {
    const tempPersons = [...persons];
    const index = tempPersons.indexOf(person);
    tempPersons[index] = { ...person };
    tempPersons[index].name = e.target.value;
    setPersons(tempPersons);
  };

  const handleDeletePersons = id => {
    let tempPersons = persons.filter(p => p.id !== id);
    setPersons(tempPersons);
  };

  const handleTogglePersons = () => {
    setShowPersons(!showPersons);
  };

  return (
    <Aux>
      <Cockpit
        persons={persons}
        showPersons={showPersons}
        handleTogglePersons={handleTogglePersons}
      />
      <Persons
        persons={persons}
        showPersons={showPersons}
        handleNameChange={handleNameChange}
        handleDeletePersons={handleDeletePersons}
      />
    </Aux>
  );
};

export default withClass(App, styles.App);
