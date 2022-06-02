import React from "react";
import "../styles/task.css";
import editIcon from "../assets/images/editIconGrey.svg";
import EditCard from "../components/EditCard";

import { useDispatch } from "react-redux";
import { updateStatus, deleteTask } from "../redux/actions/taskActions";

const PendingTaskCard = ({ id, title, description, setEffectVar }) => {
  const dispatch = useDispatch(null);

  const handleTask = (status) => {
    dispatch(updateStatus(status, id))
      .then(() => {
        setEffectVar(true);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const handleDeleteTask = () => {
    // console.log("hello");
    dispatch(deleteTask(id))
      .then(() => {
        setEffectVar(true);
      })
      .catch((err) => {
        console.log(err);
      });
    // console.log("dispatch log here");
  };
  return (
    <>
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
        </div>
      </div>
    </>
  );
};

PendingTaskCard.defaultProps = {
  title: "Enter Title",
  description: "Please Enter Description in this description box",
};

export default PendingTaskCard;
