import React from "react";

const Controls = ({ status, onStatusChange }) => {
  const onControlStatusChange = newStatus => {
    return () => {
      onStatusChange(newStatus);
    };
  };

  const renderStartStopButton = () => {
    if (status === "started") {
      return (
        <button
          className="button secondary"
          onClick={onControlStatusChange("paused")}
        >
          Pause
        </button>
      );
    } else {
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
