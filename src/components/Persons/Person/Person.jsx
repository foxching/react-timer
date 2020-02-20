import React from "react";
import styles from "./../Person.module.css";
const Person = props => {
  return (
    <div className={styles.Person}>
      <p onClick={() => props.handleDeletePersons(props.person.id)}>
        Im {props.person.name} and I'm {props.person.age}
      </p>
      <p>{props.children}</p>
      <input
        type="text"
        value={props.person.name}
        onChange={e => props.handleNameChange(e, props.person)}
      />
    </div>
  );
};

export default Person;
