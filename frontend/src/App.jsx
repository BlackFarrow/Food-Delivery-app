import React, { useState } from "react";
import NavBar from "./components/NavBar";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import PlaceOrder from "./pages/PlaceOrder";
import Cart from "./pages/Cart";
import LoginPopup from "./components/LoginPopup";
import Verify from "./pages/Verify";
import MyOrders from "./pages/MyOrders";

function App() {
  const [showLogin,setShowLogin]=useState(false)
  return (
    <>
    {showLogin?<LoginPopup setShowLogin={setShowLogin}/>:<></>}
    <div className=" w-[80%] m-auto">
      <NavBar setShowLogin
      ={setShowLogin} />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/order" element={<PlaceOrder />} />
        <Route path="/verify" element={<Verify />} />
        <Route path="/myorders" element={<MyOrders />} />
      </Routes>
    </div>
    </>
  );
}

export default App;
