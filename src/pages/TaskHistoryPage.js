import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskHistoryCard from "../components/TaskHistoryCard";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAllTasksWithDate } from "../redux/actions/taskActions";
import store from "../redux/store";

const TaskHistoryPage = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  let todayDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(todayDate);
  console.log("Calemder=>", new Date(date).toISOString().slice(0, 10));

  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(getMyAllTasksWithDate(date)).then(() => {
      console.log("dateFromUI=>", date);
      setTasks(globalState.task.fetchedTasks);
    });
  }, [date]);
  console.log("Tasks History of ", todayDate, "=>", tasks);

  return (
    <div className="pageContainer">
      <p className="titlePara">My Task History</p>

      <div className="taskHistoryPageHolder">
        <input
          onChange={(e) => {
            console.log(e.target.value);
            setDate(e.target.value);
          }}
          type="date"
          className="taskHistoryDatePicker"
        />
        <div className="tasksHolder">
          {tasks?.noOfTasksFound > 0 ? (
            tasks.tasks.map((task) => {
              return (
                <TaskHistoryCard
                  key={task._id}
                  title={task.title}
                  description={task.description}
                  isCompleted={task.isCompleted}
                />
              );
            })
          ) : (
            <h1>No Tasks found</h1>
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskHistoryPage;
