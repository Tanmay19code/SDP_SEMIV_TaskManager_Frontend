import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import "../styles/task.css";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAllTasks } from "../redux/actions/taskActions";
import store from "../redux/store";

import Loader from "../components/Loader";

import taskNotFound from '../assets/images/taskNotFoundImg3.png'

const MyTasks = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  const [loading, setLoading] = useState(false);

  const [effectVar, setEffectVar] = useState(false);

  const dispatch = useDispatch(null);

  useEffect(() => {
    setLoading(true);
    setEffectVar(false);
    dispatch(getMyAllTasks())
      .then(() => {
        setTasks(globalState.task.fetchedTasks);
        // console.log("UseEffect");
        setLoading(false);
      })
      .catch((e) => {
        console.log(e);
      });
  }, [globalState.task.fetchedTasks.noOfTasksFound, effectVar]);
  console.log(tasks);

  return (
    <>
      {loading && <Loader />}
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
                  setEffectVar={setEffectVar}
                />
              );
            })
          ) : (
            // <h1>No Tasks found</h1>
            <img className="taskNotFoundImg" src={taskNotFound} alt="not task found" />
          )}
        </div>
      </div>
    </>
  );
};

export default MyTasks;
