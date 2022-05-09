import React from "react";
import PendingTaskCard from "../components/PendingTaskCard";

const PendingTaskPage = () => {
  return (
    <div className="pageContainer">
      <p className="titlePara">Pending Tasks</p>
        <div className="tasksHolder">
      <PendingTaskCard />
      </div>
    </div>
  );
};

export default PendingTaskPage;
