import React from "react";

const CreateTaskPage = () => {
  return (
    
    <div className="pageContainer">
     <p className="titlePara">Create Task</p>
      <form className="createTaskHolder">
        <div className="mb-3">
          <input
            type="text"
            className="createTaskTitleInput"
            placeholder="Enter title here..."
          />
        </div>
        <div className="mb-3">
          <textarea
            className="createTaskDecriptionInput"
            placeholder="Enter description here..."
            rows="4"
          ></textarea>
        </div>
        <div className="formButtonHolder">
          <button type="button" className="btn formCancelButton">
            Cancel
          </button>
          <button type="button" className="btn formAddTaskButton">
            Add Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default CreateTaskPage;
