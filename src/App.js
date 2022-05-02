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

const App = () => {
  const location = useLocation();
  return (
    <>
      <Navbar pathName={location.pathname} />
      <Routes>
        <Route exact path="/" element={<Homepage />} />
        <Route exact path="/mytasks" element={<MyTasks/>} />
        <Route exact path="/" element={<Homepage />} />
      </Routes>
    </>
  );
};
export default App;
