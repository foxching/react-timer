import React, { useState, useEffect } from "react";
import Main from "./Main";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Controls from "./Controls";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [countdownStatus, setCountdownStatus] = useState("stopped");

  const onSetTimer = seconds => {
    setCount(seconds);
    setCountdownStatus("started");
  };

  useEffect(() => {
    let interval;

    if (countdownStatus === "started") {
      interval = setInterval(() => {
        let newCount = count + 1;
        setCount(() => (newCount >= 0 ? newCount : 0));
        if (newCount === 0) {
          setCountdownStatus("stopped");
        }
      }, 1000);
    } else if (countdownStatus === "stopped") {
      setCount(0);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, countdownStatus]);

  const handleStatusChange = newStatus => {
    setCountdownStatus(newStatus);
  };

  return (
    <Main>
      <h1 className="page-title">Timer</h1>
      <Clock totalSeconds={count} />
      <Controls
        countdownStatus={countdownStatus}
        onStatusChange={handleStatusChange}
      />
    </Main>
  );
};

export default Timer;
