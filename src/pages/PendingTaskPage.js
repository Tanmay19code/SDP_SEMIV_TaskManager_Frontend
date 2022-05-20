import React, { useState, useEffect } from "react";
import PendingTaskCard from "../components/PendingTaskCard";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAllTasksWithDateAndStatus } from "../redux/actions/taskActions";
import store from "../redux/store";

const PendingTaskPage = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  const dispatch = useDispatch(null);

  let todayDate = new Date().toISOString().slice(0, 10);
  let isCompleted = false;

  useEffect(() => {
    dispatch(getMyAllTasksWithDateAndStatus(todayDate, isCompleted)).then(
      () => {
        setTasks(globalState.task.fetchedTasks);
      }
    );
  }, [globalState.task.fetchedTasks.noOfTasksFound]);
  console.log("Pending Tasks=>",tasks);

  return (
    <div className="pageContainer">
      <p className="titlePara">Pending Tasks</p>
      <div className="tasksHolder">
        {tasks?.noOfTasksFound > 0 ? (
          tasks.tasks.map((task) => {
            return (
              <PendingTaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                description={task.description}
              />
            );
          })
        ) : (
          <h1>No Tasks found</h1>
        )}
      </div>
    </div>
  );
};

export default PendingTaskPage;
