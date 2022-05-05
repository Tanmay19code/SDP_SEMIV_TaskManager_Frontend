import React from "react";
import "../styles/task.css";

const PendingTaskCard = ({ title, description }) => {
  return (
    <div
      className="card taskCard"
      style={{
        width: "20rem",
        border: "1px solid black",
        marginBottom: "25px",
      }}
    >
      <div className="card-header taskCardTitle">{title}</div>
      <div className="card-body">
        <p className="card-text">{description}</p>
        <div className="buttonHolder">
          <button className="btn buttonCross">
            <b>❌</b>
          </button>

          <button className="btn buttonTick">
            <b>✔</b>
          </button>
        </div>
      </div>
    </div>
  );
};

PendingTaskCard.defaultProps = {
  title: "Enter Title",
  description: "Please Enter Description in this description box",
};

export default PendingTaskCard;
