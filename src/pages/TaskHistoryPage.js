import React from "react";
import TaskCard from "../components/TaskCard";
import TaskHistoryCard from "../components/TaskHistoryCard";

const TaskHistoryPage = () => {
  return (
    <div className="pageContainer">
      <p className="titlePara">My Task History</p>

      <div className="taskHistoryPageHolder">
        <input
          onChange={(e) => {
            console.log(e.target.value);
          }}
          type="date"
          className="taskHistoryDatePicker"
        />
        <div className="tasksHolder">
          <TaskHistoryCard/>
          <TaskHistoryCard isCompleted={true}/>
          <TaskHistoryCard/>
        </div>
      </div>
    </div>
  );
};

export default TaskHistoryPage;
