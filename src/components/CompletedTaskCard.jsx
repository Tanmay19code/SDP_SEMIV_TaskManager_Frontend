import React from "react";
import "../styles/task.css";
import completedImg from '../assets/images/completedImgHorizontal.png'

const CompletedTaskCard = ({ title, description }) => {
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
        <img src={completedImg} className="completedImg"></img>
      </div>
    </div>
  );
};

CompletedTaskCard.defaultProps = {
  title: "Enter Title",
  description: "Please Enter Description in this description box",
};

export default CompletedTaskCard;
