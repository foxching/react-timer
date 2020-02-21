import React, { useState } from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Main from "./Main";

const Countdown = () => {
  const [count, setCount] = useState(0);

  const onSetCountdown = seconds => {
    setCount(seconds);
  };

  return (
    <Main>
      <Clock totalSeconds={count} />
      <CountdownForm onSetCountdown={onSetCountdown} />
    </Main>
  );
};

export default Countdown;
