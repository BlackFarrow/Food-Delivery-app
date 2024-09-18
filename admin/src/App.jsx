import React from "react";
import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import { Route, Routes } from "react-router-dom";
import Add from "./pages/Add";
import List from "./pages/List";
import Order from "./pages/Order";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const App = () => {

  const url ="https://zero2-todo-app-backend.onrender.com" //localhostserever
  return (
    <div>
      <ToastContainer/>
      <NavBar />
      <hr />
      <div className="flex">
        <SideBar />
        <Routes>
          <Route path="/add" element={<Add url={url}/>}></Route>
          <Route path="/list" element={<List url={url}/>}></Route>
          <Route path="/orders" element={<Order url={url}/>}></Route>
        </Routes>
      </div>
    </div>
  );
};

export default App;
