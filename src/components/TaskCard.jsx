import React from "react";
import "../styles/task.css";
import completedImg from "../assets/images/completedImgHorizontal.png";
import editIcon from "../assets/images/editIconGrey.svg";
import undoIcon from "../assets/images/undoIconWhite.png";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { updateStatus, deleteTask } from "../redux/actions/taskActions";

import Loader from "../components/Loader";

const TaskCard = ({ id, title, description, isCompleted, setEffectVar }) => {
  const dispatch = useDispatch(null);

  const handleTask = (status) => {
    dispatch(updateStatus(status, id))
      .then(() => {
        setEffectVar(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // setEffectVar(true)
  };

  const handleDeleteTask = () => {
    dispatch(deleteTask(id)).then(() => {
      setEffectVar(true);
    });
  };

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
        onClick={() => {
          handleTask(false);
        }}
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
            <button
              onClick={() => {
                handleDeleteTask();
              }}
              className="btn buttonCross"
            >
              <b>❌</b>
              <span className="crossButtonSpan">Discard</span>
            </button>
            <button
              onClick={() => {
                handleTask(true);
              }}
              className="btn buttonTick"
            >
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
