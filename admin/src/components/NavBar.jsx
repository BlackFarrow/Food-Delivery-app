import React from "react";
import {assets} from "../assets/assets"

function NavBar() {
  return (
    <div className="flex items-center justify-between p-4">
      <img className="w-[max(10%,80px)]" src={assets.logo} alt="logo" />
      <img className="w-[40px]" src={assets.profile_image} alt="profile image" />
    </div>
  );
}

export default NavBar;
