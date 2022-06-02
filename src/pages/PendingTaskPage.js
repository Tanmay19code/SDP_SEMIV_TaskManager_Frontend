import React, { useState, useEffect } from "react";
import PendingTaskCard from "../components/PendingTaskCard";

import { useDispatch } from "react-redux";
import { getMyAllTasksWithDateAndStatus } from "../redux/actions/taskActions";
import store from "../redux/store";

import Loader from "../components/Loader";



const PendingTaskPage = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  const [loading, setLoading] = useState(false);

  const [effectVar, setEffectVar] = useState(false);

  const dispatch = useDispatch(null);

  let todayDate = new Date().toISOString().slice(0, 10);
  let isCompleted = false;

  useEffect(() => {
    setLoading(true);
    setEffectVar(false);
    dispatch(getMyAllTasksWithDateAndStatus(todayDate, isCompleted))
      .then(() => {
        setTasks(globalState.task.fetchedTasks);
        setLoading(false);
      })
      .catch((e) => {
        console.error(e);
      });
  }, [globalState.task.fetchedTasks.noOfTasksFound, effectVar]);
  console.log("Pending Tasks=>", tasks);

  return (
    <>
    {loading && <Loader />}
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
                setEffectVar={setEffectVar}
              />
            );
          })
        ) : (
          <h1>No Tasks found</h1>
        )}
      </div>
    </div>
    </>
  );
};

export default PendingTaskPage;
