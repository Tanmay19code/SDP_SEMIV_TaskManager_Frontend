import React from "react";
import TaskCard from "../components/TaskCard";
import "../styles/task.css";

const MyTasks = () => {
  return (
    <div className="pageContainer">
      <p className="titlePara">My Tasks</p>
      <div className="tasksHolder">
        <TaskCard
          title={`My first task`}
          description={`This is the first task`}
        />
        <TaskCard
          title={`My first task`}
          description={`This is the first task This is the first task This is the first task This is the first task This is the first task This is the first taskThis is the first taskThis is the first taskThis is the first taskThis is the first task`}
          isCompleted={true}
        />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
        <TaskCard />
      </div>
    </div>
  );
};

export default MyTasks;
