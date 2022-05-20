import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import "../styles/task.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAllTasks } from "../redux/actions/taskActions";
import store from "../redux/store";

const MyTasks = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(getMyAllTasks()).then(() => {
      setTasks(globalState.task.fetchedTasks);
    });
  }, [globalState.task.fetchedTasks.noOfTasksFound]);
  console.log(tasks);

  return (
    <div className="pageContainer">
      <p className="titlePara">My Tasks</p>
      <div className="tasksHolder">
        {tasks?.noOfTasksFound > 0 ? (
          tasks.tasks.map((task) => {
            return (
              <TaskCard
                key={task._id}
                id={task._id}
                title={task.title}
                description={task.description}
                isCompleted={task.isCompleted}
              />
            );
          })
        ) : (
          <h1>No Tasks found</h1>
        )}
        {/* <TaskCard
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
        <TaskCard /> */}
      </div>
    </div>
  );
};

export default MyTasks;
