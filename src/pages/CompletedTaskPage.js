import React from "react";
import CompletedTaskCard from "../components/CompletedTaskCard";

const CompletedTaskPage = () => {
  return (
    <div className="pageContainer">
      <p className="titlePara">Completed Tasks</p>
      <div className="tasksHolder">
        <CompletedTaskCard />
      </div>
    </div>
  );
};

export default CompletedTaskPage;
