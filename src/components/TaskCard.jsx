import React from "react";
import "../styles/task.css";
import completedImg from "../assets/images/completedImgHorizontal.png";
import editIcon from "../assets/images/editIconGrey.svg";
import undoIcon from "../assets/images/undoIconWhite.png";

const TaskCard = ({ title, description, isCompleted }) => {
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
      <img
        src={isCompleted ? undoIcon : editIcon}
        alt="EditIcon"
        className="editIcon"
      />
      <div className="card-body">
        <p className="card-text">{description}</p>
        {isCompleted ? (
          <img src={completedImg} className="completedImg"></img>
        ) : (
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
        )}
      </div>
    </div>
  );
};

TaskCard.defaultProps = {
  title: "Enter Title",
  description: "Please Enter Description in this description box",
  isCompleted: false,
};

export default TaskCard;
