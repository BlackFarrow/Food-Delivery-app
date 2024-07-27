import React, { useContext, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { Link, useNavigate } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";

function NavBar({ setShowLogin }) {
  const [menu, setMenu] = useState("home");
  //back end ekedi
  const { getTotal, token, setToken } = useContext(StoreContext);

  const navigate = useNavigate();
  const logOut = () => {
    localStorage.removeItem("token");
    setToken("");
    navigate("/");
  };

  function setActive() {}
  return (
    <div className="flex items-center justify-between p-2 m-auto rounded-b-[10px] py-5 px-3 bg-slate-300">
      <Link to="/">
        <img
          className="w-[150px] cursor-pointer"
          src={assets.logo}
          alt="logo"
        />
      </Link>
      {/* ul remove li tag after */}
      <ul className="flex gap-[20px] text-[18px]">
        <Link
          to="/"
          className={
            menu === "home"
              ? " pb-[2px] border-b-2 border-black cursor-pointer"
              : " cursor-pointer"
          }
          onClick={() => setMenu("home")}
        >
          Home
        </Link>
        <a
          href="#explore-menu"
          className={
            menu === "menu"
              ? "active cursor-pointer  pb-[2px] border-b-2 border-black"
              : " cursor-pointer"
          }
          onClick={() => setMenu("menu")}
        >
          Menu
        </a>
        <a
          href="#app-download"
          className={
            menu === "mobile-app"
              ? "active cursor-pointer  pb-[2px] border-b-2 border-black"
              : " cursor-pointer"
          }
          onClick={() => setMenu("mobile-app")}
        >
          Mobile app
        </a>
        <li
          className={
            menu === "contact-us"
              ? "active cursor-pointer  pb-[2px] border-b-2 border-black"
              : " cursor-pointer"
          }
          onClick={() => setMenu("contact-us")}
        >
          Contact Us
        </li>
      </ul>

      {/* navbar right */}
      <div className="flex items-center gap-8 ">
        <img
          className="cursor-pointer "
          src={assets.search_icon}
          alt="search icon"
        />
        <div className="relative ">
          <Link to="/cart">
            <img
              className="cursor-pointer "
              src={assets.basket_icon}
              alt="basket icon"
            />
          </Link>
          <div
            className={
              getTotal() === 0
                ? ""
                : " absolute min-h-2.5 min-w-2.5 bg-red-600 rounded-full top-[-8px] right-[-8px]"
            }
          ></div>
        </div>
        {/* button methana back end eka connect karaddi profile icon eka ena widiyata hadano */}
        {!token ? (
          <button
            onClick={() => setShowLogin(true)}
            className=" font-[16px] border border-black rounded-full px-5 py-2 cursor-pointe transition duration-300  hover:bg-orange-200  "
          >
            Sign in
          </button>
        ) : (
          <div className="relative group">
            <img
              className="cursor-pointer "
              src={assets.profile_icon}
              alt="profile"
            />
            <ul className="absolute right-0 z-10 flex-col hidden gap-2 p-2 pl-2 bg-white rounded pr-11 ptext-center group-hover:flex outline-orange-500 ">
              <li className="flex items-center gap-2 cursor-pointer " onClick={()=>{navigate("/myorders")}}>
                {" "}
                <img src={assets.bag_icon} alt="" />
                <p>Orders</p>
              </li>
              <hr />
              <li
                onClick={logOut}
                className="flex items-center gap-2 cursor-pointer "
              >
                {" "}
                <img src={assets.logout_icon} alt="" />
                <p>Logout</p>
              </li>
              <hr />
              <li className="flex items-center gap-3 pl-2 cursor-pointer ">
                {" "}
                <img className="" src={assets.profile_icon} alt="" />
                <p>Profile</p>
              </li>
              <hr />
            </ul>
          </div>
        )}
      </div>
    </div>
  );
}

export default NavBar;
