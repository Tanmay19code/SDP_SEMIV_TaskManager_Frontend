import React from "react";
import "../styles/task.css";
import editIcon from "../assets/images/editIconGrey.svg";

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
      <img src={editIcon} alt="EditIcon" className="editIcon" />
      <div className="card-body">
        <p className="card-text">{description}</p>
        <div className="buttonHolder">
            <button className="btn buttonCross">
              <b>❌</b>
              <span className="crossButtonSpan">Discard</span>
            </button>
            <button className="btn buttonTick">
              <b>✔</b>
              <span className="tickButtonSpan">Completed</span>
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
