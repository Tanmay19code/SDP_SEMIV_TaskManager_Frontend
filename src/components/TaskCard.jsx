import React from "react";
import '../styles/task.css'

const TaskCard = () => {
  return (
    <div className="card taskCard" style={{ width: "18rem", border: "1px solid black"}}>
      <div className="card-header taskCardTitle">Task Title</div>
      <div className="card-body">
        <p className="card-text">
          With supporting text below as a natural lead-in to additional content.
        </p>
        <a href="#" className="btn btn-primary">
          Go somewhere
        </a>
      </div>
    </div>
  );
};

export default TaskCard;
