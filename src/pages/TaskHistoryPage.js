import React, { useState, useEffect } from "react";
import TaskCard from "../components/TaskCard";
import TaskHistoryCard from "../components/TaskHistoryCard";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { getMyAllTasksWithDate } from "../redux/actions/taskActions";
import store from "../redux/store";
import taskNotFound from "../assets/images/taskNotFoundImg3.png";

const TaskHistoryPage = () => {
  let globalState = store.getState();

  const [tasks, setTasks] = useState({});

  let todayDate = new Date().toISOString().slice(0, 10);
  const [date, setDate] = useState(todayDate);
  let tempDate;

  const [effectVar, setEffectVar] = useState(false);

  const [year, setYear] = useState();
  const [month, setMonth] = useState();
  const [day, setDay] = useState();

  console.log("Calender=>", new Date(date).toISOString().slice(0, 10));

  const dispatch = useDispatch(null);

  useEffect(() => {
    dispatch(getMyAllTasksWithDate(date)).then(() => {
      console.log("dateFromUI=>", date);
      setTasks(globalState.task.fetchedTasks);
      setEffectVar(false);
    });
  }, [date, effectVar]);
  console.log("Tasks History of ", todayDate, "=>", tasks);

  const updateDate = () => {
    tempDate = year + "-" + month + "-" + day;
    setDate(tempDate);
    setEffectVar(true);
    console.log(month)
    console.log(tempDate)
  };

  return (
    <div className="pageContainer">
      <p className="titlePara">My Task History</p>

      <div className="taskHistoryPageHolder">
        {/* <input
          onChange={(e) => {
            console.log(e.target.value);
            setDate(e.target.value);
          }}
          type="date"
          className="taskHistoryDatePicker"
        /> */}
        <div className="taskHistoryPageInputContainer">
          <div className="taskHistoryInputsHolder">
            <input
              type="number"
              id="taskYear"
              placeholder="YYYY"
              className="taskHistoryInput"
              onChange={(e) => {
                setYear(e.target.value);
              }}
            />
            <input
              type="number"
              id="taskMonth"
              placeholder="MM"
              className="taskHistoryInput"
              onChange={(e) => {
                setMonth(e.target.value);
              }}
            />
            <input
              type="number"
              id="taskDay"
              placeholder="DD"
              className="taskHistoryInput"
              onChange={(e) => {
                setDay(e.target.value);
              }}
            />
            <input
              type="button"
              value="GO"
              className="updateButton"
              onClick={updateDate}
            />
          </div>
        </div>
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
            // <h1>No Tasks found</h1>
            <img
              className="taskNotFoundImg"
              src={taskNotFound}
              alt="not task found"
            />
          )}
        </div>
      </div>
    </div>
  );
};

export default TaskHistoryPage;
