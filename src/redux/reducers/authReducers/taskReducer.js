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
} from "../../constants/taskTypes.js";

const initialState = {
  taskDetail: {},
  fetchedTasks: [],
  loading: false,
  message: "",
};

export default function (state = initialState, action) {
  const { type, payload } = action;
  switch (type) {
    case CREATE_TASK_SUCCESS:
      return {
        ...state,
        taskDetail: payload,
        message: "",
      };
    case CREATE_TASK_FAILURE:
      return {
        ...state,
        message: payload,
      };
    case GET_MY_ALL_TASKS_SUCCESS:
      return {
        ...state,
        fetchedTasks: payload,
        message: "",
      };
    case GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_SUCCESS:
      return {
        ...state,
        fetchedTasks: payload,
        message: "",
      };
    case GET_MY_ALL_TASKS_WITH_DATE_AND_STATUS_FAILURE:
      return {
        ...state,
        message: payload,
      };
    case GET_MY_ALL_TASKS_WITH_DATE_SUCCESS:
      return {
        ...state,
        fetchedTasks: payload,
        message: "",
      };
    case GET_MY_ALL_TASKS_WITH_DATE_FAILURE:
      return {
        ...state,
        message: payload,
      };
    case UPDATE_TASK_SUCCESS:
      return {
        ...state,
        fetchedTasks: payload,
        message: "",
      }
    case UPDATE_TASK_FAILURE:
      return {
        ...state,
        message: payload,
      }
    default:
      return state;
  }
}
