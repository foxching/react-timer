import React from "react";
import styles from "../../containers/App.module.css";

const Cockpit = props => {
  const classes = [];
  let btnClass = "";

  if (props.showPersons) {
    btnClass = styles.Red;
  }

  if (props.persons.length <= 2) {
    classes.push(styles.red);
  }
  if (props.persons.length <= 1) {
    classes.push(styles.bold);
  }

  return (
    <div>
      <h1>Hi, Im React App</h1>
      <p className={classes.join(" ")}>This is really working</p>
      <button className={btnClass} onClick={props.handleTogglePersons}>
        {" "}
        Toogle Persons
      </button>
    </div>
  );
};

export default Cockpit;
