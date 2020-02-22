import React from "react";

const Controls = ({ countdownStatus, onStatusChange }) => {
  const onControlStatusChange = newStatus => {
    return () => {
      onStatusChange(newStatus);
    };
  };

  const renderStartStopButton = () => {
    if (countdownStatus === "started") {
      return (
        <button
          className="button secondary"
          onClick={onControlStatusChange("paused")}
        >
          Pause
        </button>
      );
    } else if (countdownStatus === "paused") {
      return (
        <button
          className="button primary"
          onClick={onControlStatusChange("started")}
        >
          Start
        </button>
      );
    }
  };

  return (
    <div className="controls">
      {renderStartStopButton()}
      <button
        className="button alert hollow"
        onClick={onControlStatusChange("stopped")}
      >
        Clear
      </button>
    </div>
  );
};

export default Controls;
