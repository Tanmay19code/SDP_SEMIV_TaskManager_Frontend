import React from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation,
} from "react-router-dom";
import Navbar from "./components/Navbar";

import Homepage from "./pages/Homepage.js";
import MyTasks from "./pages/MyTasks";
import PendingTaskPage from "./pages/PendingTaskPage";
import Modal from "./components/Modal";
import CompletedTaskPage from "./pages/CompletedTaskPage";
import TaskHistoryPage from "./pages/TaskHistoryPage";

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar pathName={location.pathname} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/mytasks" element={<MyTasks />} />
        <Route exact path="/pendingtasks" element={<PendingTaskPage />} />
        <Route exact path="/completedtasks" element={<CompletedTaskPage />} />
        <Route exact path="/taskhistory" element={<TaskHistoryPage />} />

        {/*  */}
        {/* <Route exact path="/trial" element={<Modal />} /> */}
        {/*  */}
      </Routes>
    </>
  );
};
export default App;
