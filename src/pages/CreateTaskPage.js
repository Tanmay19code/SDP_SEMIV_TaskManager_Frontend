import React, { useState } from "react";

import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createTask } from "../redux/actions/taskActions";

const CreateTaskPage = () => {
  const [formData, setFormData] = useState({
    title: "",
    description: "",
  });
  const dispatch = useDispatch(null);
  const navigate = useNavigate();

  const onChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
    console.log(formData);
  };

  const onSubmit = async (e) => {
    e.preventDefault();
    dispatch(createTask(formData)).then(() => {
      // navigate("/");
      // setTimeout(() => {
      //   window.location.reload(false);
      // }, 3);
      // dispatch(loadUser());
      setFormData({ ...formData, title: "", description: "" });
      // setFormData({...formData, description: ""});
      document.getElementById("title").value = "";
      document.getElementById("description").value = "";
    });
  };
  return (
    <div className="pageContainer">
      <p className="titlePara">Create Task</p>
      <form className="createTaskHolder">
        <div className="mb-3">
          <input
            type="text"
            className="createTaskTitleInput"
            placeholder="Enter title here..."
            name="title"
            id="title"
            onChange={(e) => onChange(e)}
          />
        </div>
        <div className="mb-3">
          <textarea
            className="createTaskDecriptionInput"
            placeholder="Enter description here..."
            rows="4"
            name="description"
            id="description"
            onChange={(e) => onChange(e)}
          ></textarea>
        </div>
        <div className="formButtonHolder">
          <button
            onClick={() => {
              setFormData({ ...formData, title: "", description: "" });
              // setFormData({...formData, description: ""});
              document.getElementById("title").value = "";
              document.getElementById("description").value = "";
            }}
            type="button"
            className="btn formCancelButton"
          >
            Cancel
          </button>
          <button
            onClick={(e) => onSubmit(e)}
            type="button"
            className="btn formAddTaskButton"
          >
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;
