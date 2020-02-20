import React from "react";
import Person from "./Person/Person";

const Persons = props => {
  const { showPersons, persons, handleNameChange, handleDeletePersons } = props;
  return (
    <div>
      {showPersons &&
        persons.map(person => (
          <Person
            key={person.id}
            person={person}
            handleNameChange={handleNameChange}
            handleDeletePersons={handleDeletePersons}
          />
        ))}
    </div>
  );
};

export default Persons;
