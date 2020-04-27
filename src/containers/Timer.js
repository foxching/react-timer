import React, { useState, useEffect } from "react";
import Main from "../components/Main";
import Clock from "../components/Clock";
import Controls from "../components/Controls";

const Timer = () => {
  const [count, setCount] = useState(0);
  const [timerStatus, setTimerStatus] = useState("stopped");

  useEffect(() => {
    let interval;

    if (timerStatus === "started") {
      interval = setInterval(() => {
        let newCount = count + 1;
        setCount(() => (newCount >= 0 ? newCount : 0));
      }, 1000);
    } else if (timerStatus === "stopped") {
      setCount(0);
    } else {
      clearInterval(interval);
    }

    return () => clearInterval(interval);
  }, [count, timerStatus]);

  const handleStatusChange = newStatus => {
    setTimerStatus(newStatus);
  };

  return (
    <Main>
      <h1 className="page-title">Timer</h1>
      <Clock totalSeconds={count} />
      <Controls status={timerStatus} onStatusChange={handleStatusChange} />
    </Main>
  );
};

export default Timer;
