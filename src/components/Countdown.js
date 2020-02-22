import React, { useState, useEffect, useCallback } from "react";
import Clock from "./Clock";
import CountdownForm from "./CountdownForm";
import Main from "./Main";
import Controls from "./Controls";

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

  const renderControlArea = () => {
    if (countdownStatus !== "stopped") {
      return (
        <Controls
          countdownStatus={countdownStatus}
          onStatusChange={handleStatusChange}
        />
      );
    } else {
      return <CountdownForm onSetCountdown={onSetCountdown} />;
    }
  };

  return (
    <Main>
      <Clock totalSeconds={count} />
      {renderControlArea()}
    </Main>
  );
};

export default Countdown;
