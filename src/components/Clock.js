import React from "react";

const Clock = ({ totalSeconds = 0 }) => {
  const formatSeconds = totalSeconds => {
    let seconds = totalSeconds % 60;
    let minutes = Math.floor(totalSeconds / 60);

    if (seconds < 10) {
      seconds = "0" + seconds;
    }

    if (minutes < 10) {
      minutes = "0" + minutes;
    }

    return minutes + ":" + seconds;
  };

  return (
    <div className="clock">
      <div className="clock-text">
        <span>{formatSeconds(totalSeconds)}</span>
      </div>
    </div>
  );
};

export default Clock;
