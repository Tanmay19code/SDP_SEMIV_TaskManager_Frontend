import React from "react";
import "../styles/task.css";
import completedImg from "../assets/images/completedImgHorizontal.png";
import incompletedImg from "../assets/images/incompleteImgHorizontal.png";

const TaskHistoryCard = ({ title, description, isCompleted }) => {
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
        {isCompleted ? (
          <img src={completedImg} className="completedImg"></img>
        ) : (
          <img src={incompletedImg} className="completedImg"></img>
        )}
      </div>
    </div>
  );
};

TaskHistoryCard.defaultProps = {
  title: "Enter Title",
  description: "Please Enter Description in this description box",
  isCompleted: false,
};

export default TaskHistoryCard;
