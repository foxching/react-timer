import React, { useRef } from "react";

const CountdownForm = props => {
  let strSeconds = useRef(null);

  const onSubmit = e => {
    e.preventDefault();
    let strSeconds1 = strSeconds.current.value;

    if (strSeconds1.match(/^[0-9]*$/) && strSeconds1 !== "") {
      strSeconds.current.value = "";
      props.onSetCountdown(parseInt(strSeconds1, 10));
    }
  };

  return (
    <div>
      <form onSubmit={onSubmit} className="countdown-form">
        <input
          type="text"
          ref={strSeconds}
          placeholder="Enter time in seconds"
        />
        <button className="button expanded">Start</button>
      </form>
    </div>
  );
};

export default CountdownForm;
