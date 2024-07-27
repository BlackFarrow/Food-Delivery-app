import React, { useContext, useEffect, useState } from "react";
import { assets } from "../assets/frontend_assets/assets";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

function LoginPopup({ setShowLogin }) {
  const [currentState, setState] = useState("Login");
  //back end eka hadalai hadanne
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const { url, setToken } = useContext(StoreContext);

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  //login
  const onLogin = async (event) => {
    event.preventDefault();
    console.log(data);
    let newUrl = url;
    if (currentState === "Login") {
      newUrl += "/api/user/login";
    } else {
      newUrl += "/api/user/register";
    }

    const response = await axios.post(newUrl, data);
    if (response.data.success) {
      setToken(response.data.token);
      localStorage.setItem("token", response.data.token);
      setShowLogin(false);
    } else {
      aleart(response.data.message);
    }
  };

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

  return (
    <div className="absolute grid h-full bg-black/50 backdrop-blur-lg shadow-lg z-[1] w-full ">
      <form
        onSubmit={onLogin}
        className=" place-self-center w-[330px] bg-slate-100 flex flex-col gap-4 p-[25px] rounded-xl text-[14px]  animate-fade"
      >
        <div className="flex items-center justify-between font-bold">
          <h2>{currentState}</h2>
          <img
            className="cursor-pointer "
            onClick={() => setShowLogin(false)}
            src={assets.cross_icon}
            alt=""
          />
        </div>

        <div className="flex flex-col gap-4">
          {currentState === "Login" ? (
            <></>
          ) : (
            <input
              className="p-2 rounded shadow-sm outline-none border-noneutline-purrounded-lg"
              type="text"
              placeholder="Your name"
              //   mewa add karanne back end hadaddi
              name="name"
              onChange={onChangeHandler}
              value={data.name}
            />
          )}

          <input
            className="p-2 rounded shadow-sm outline-none border-noutline-purrounded-lg"
            type="email"
            placeholder="e-mail"
            //   mewa add karanne back end hadaddi
            name="email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            className="p-2 rounded shadow-sm outline-none border-noutline-purrounded-lg"
            type="password"
            placeholder="password"
            //   mewa add karanne back end hadaddi
            name="password"
            onChange={onChangeHandler}
            value={data.password}
          />
        </div>

        <button
          type="submit"
          className="bottom-0 p-2 font-bold text-white bg-orange-500 rounded shadow-sm outline-none border-noutline-purrounded-console.log();"
        >
          {currentState === "Sign up" ? "create account" : "Login"}
        </button>
        <div className="flex gap-1">
          <input type="checkbox" className="mt-[3px] cursor-pointer" required />
          <p>by continuing, i agree to the conditions</p>
        </div>
        {currentState === "Sign up" ? (
          <p>
            Already have an account?{" "}
            <span
              className="font-bold text-orange-700 cursor-pointer"
              onClick={() => setState("Login")}
            >
              Login here!
            </span>
          </p>
        ) : (
          <p>
            create a new account?{" "}
            <span
              className="font-bold text-orange-700 cursor-pointer"
              onClick={() => setState("Sign up")}
            >
              click here!
            </span>
          </p>
        )}
      </form>
    </div>
  );
}

export default LoginPopup;
