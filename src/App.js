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
import Loader from "./components/Loader";
import CompletedTaskPage from "./pages/CompletedTaskPage";
import TaskHistoryPage from "./pages/TaskHistoryPage";
import CreateTaskPage from "./pages/CreateTaskPage";
import LoginPage from "./pages/LoginPage";
import RegisterPage from "./pages/RegisterPage";

import store from "./redux/store";

const App = () => {
  const location = useLocation();
  let globalState = store.getState();
  // console.log(state.auth.auth.name)
  /***********/
  // let isAuthenticated = false;
  let isAuthenticated = globalState.auth.isAuthenticated;
  // let userName = globalState.auth.auth.name;
  /***********/

  // console.log(store.getState().auth.isAuthenticated);
  return (
    <>
      <Navbar
        pathName={location.pathname}
        isAunthenticated={isAuthenticated}
      />
      {/* <Loader /> */}
      {isAuthenticated ? (
        <Routes>
          <Route exact path="/" element={<MyTasks />} />
          <Route exact path="/pendingtasks" element={<PendingTaskPage />} />
          <Route exact path="/completedtasks" element={<CompletedTaskPage />} />
          <Route exact path="/taskhistory" element={<TaskHistoryPage />} />
          <Route exact path="/createtask" element={<CreateTaskPage />} />

          {/*  */}
          {/* <Route exact path="/trial" element={<Modal />} /> */}
          {/*  */}
        </Routes>
      ) : (
        <Routes>
          <Route exact path="/" element={<Homepage />} />
          <Route exact path="/login" element={<LoginPage />} />
          <Route exact path="/register" element={<RegisterPage />} />
        </Routes>
      )}
    </>
  );
};
export default App;
