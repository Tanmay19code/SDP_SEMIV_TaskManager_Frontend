import axios from "axios";
import {
  CREATE_TASK_SUCCESS,
  CREATE_TASK_FAILURE,
  GET_MY_TASK_SUCCESS,
  GET_MY_TASK_FAILURE,
  GET_MY_ALL_TASKS_SUCCESS,
  GET_MY_ALL_TASKS_FAILURE,
  GET_MY_ALL_TASKS_WITH_DATE_SUCCESS,
  GET_MY_ALL_TASKS_WITH_DATE_FAILURE,
  GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_SUCCESS,
  GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_FAILURE,
  UPDATE_TASK_SUCCESS,
  UPDATE_TASK_FAILURE,
  DELETE_TASK_SUCCESS,
  DELETE_TASK_FAILURE,
} from "../constants/taskTypes.js";

// Create a new task
export const createTask = (formData) => async (dispatch) => {
  const { title, description } = formData;
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {
    title,
    description,
  };
  console.log(config, body);
  try {
    const res = await axios.post(
      "https://task-manager-backend-app.herokuapp.com/api/task/createtask",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: CREATE_TASK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: CREATE_TASK_FAILURE,
      payload: error,
    });
  }
};

export const getMyAllTasks = () => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {};
  try {
    const res = await axios.post(
      "https://task-manager-backend-app.herokuapp.com/api/task/getmyalltasks",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: GET_MY_ALL_TASKS_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MY_ALL_TASKS_FAILURE,
      payload: error,
    });
  }
};

export const getMyAllTasksWithDate = (date) => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {
    date: date,
  };
  try {
    const res = await axios.post(
      "https://task-manager-backend-app.herokuapp.com/api/task/getmyalltaskswithdate",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: GET_MY_ALL_TASKS_WITH_DATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MY_ALL_TASKS_WITH_DATE_FAILURE,
      payload: error,
    });
  }
};

export const updateTask = (date) => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {
    date: date,
  };
  try {
    const res = await axios.post(
      "https://task-manager-backend-app.herokuapp.com/api/task/getmyalltaskswithdate",
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: GET_MY_ALL_TASKS_WITH_DATE_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: GET_MY_ALL_TASKS_WITH_DATE_FAILURE,
      payload: error,
    });
  }
};

export const getMyAllTasksWithDateAndStatus =
  (date, isCompleted) => async (dispatch) => {
    const state = localStorage.getItem("state");
    const stateObj = JSON.parse(state);
    // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
    const authtoken = stateObj.auth.auth.authtoken;
    // console.log(authtoken);
    const config = {
      headers: {
        "Content-Type": "application/json",
        authtoken: authtoken,
        "Access-Control-Allow-Origin": '*',
        "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
        "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
      },
    };
    const body = {
      date: date,
      isCompleted: isCompleted,
    };
    try {
      const res = await axios.post(
        "https://task-manager-backend-app.herokuapp.com/api/task/getmyalltaskswithdateandstatus",
        body,
        config
      );
      console.log("RES=>", res.data);
      dispatch({
        type: GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_SUCCESS,
        payload: res.data,
      });
    } catch (error) {
      console.log(error);
      dispatch({
        type: GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_FAILURE,
        payload: error,
      });
    }
  };

export const updateStatus = (isCompleted, id) => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {
    isCompleted: isCompleted,
  };
  try {
    const res = await axios.put(
      `https://task-manager-backend-app.herokuapp.com/api/task/updatemytask/${id}`,
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: UPDATE_TASK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: UPDATE_TASK_FAILURE,
      payload: error,
    });
  }
};

export const deleteTask = (id) => async (dispatch) => {
  const state = localStorage.getItem("state");
  const stateObj = JSON.parse(state);
  // const authtoken = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoiNjFjNDViODhjMTZhYmFkOWUyNmExMmIwIn0sImlhdCI6MTY0MTU3NzI0NH0.d9jZycUi8GkPwizo3Qepf4jadxIItPOmRz9qBY8NtKs"
  const authtoken = stateObj.auth.auth.authtoken;
  // console.log(authtoken);
  const config = {
    headers: {
      "Content-Type": "application/json",
      authtoken: authtoken,
      "Access-Control-Allow-Origin": '*',
      "Access-Control-Allow-Methods": 'GET,PUT,POST,DELETE,PATCH,OPTIONS',
      "Access-Control-Allow-Headers": 'Content-Type, Authorization, Content-Length, X-Requested-With',
    },
  };
  const body = {};
  try {
    const res = await axios.post(
      `https://task-manager-backend-app.herokuapp.com/api/task/deletemytask/${id}`,
      body,
      config
    );
    console.log("RES=>", res.data);
    dispatch({
      type: DELETE_TASK_SUCCESS,
      payload: res.data,
    });
  } catch (error) {
    console.log(error);
    dispatch({
      type: DELETE_TASK_FAILURE,
      payload: error,
    });
  }
};
