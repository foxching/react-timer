import React, { useState, useEffect, useCallback } from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Main from "./Main";

const Countdown = () => {
  const [count, setCount] = useState(0);
  const [countdownStatus, setCountdownStatus] = useState("stopped");

  const onSetCountdown = seconds => {
    setCount(seconds);
    setCountdownStatus("started");
  };

  useEffect(() => {
    let interval;

    if (countdownStatus === "started") {
      interval = setInterval(() => {
        let newCount = count - 1;
        setCount(() => (newCount >= 0 ? newCount : 0));
      }, 1000);
    }

    return () => clearInterval(interval);
  }, [count, countdownStatus]);

  return (
    <Main>
      <Clock totalSeconds={count} />
      <CountdownForm onSetCountdown={onSetCountdown} />
    </Main>
  );
};

export default Countdown;
