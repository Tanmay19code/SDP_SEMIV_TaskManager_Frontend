import React from "react";
import TaskCard from "../components/TaskCard";
import '../styles/task.css'

const MyTasks = () => {
  return (
    <>
      <div>MyTasks</div>
      <div className="tasksHolder">
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </>
  );
};

export default MyTasks;
