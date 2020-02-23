import React, { useState, useEffect } from "react";
import Clock from "../components/Clock";
import CountdownForm from "../components/CountdownForm";
import Main from "../components/Main";
import Controls from "../components/Controls";

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

  const renderControlArea = () => {
    if (countdownStatus !== "stopped") {
      return (
        <Controls
          status={countdownStatus}
          onStatusChange={handleStatusChange}
        />
      );
    } else {
      return <CountdownForm onSetCountdown={onSetCountdown} />;
    }
  };

  return (
    <Main>
      <h1 className="page-title">Countdown App</h1>
      <Clock totalSeconds={count} />
      {renderControlArea()}
    </Main>
  );
};

export default Countdown;
