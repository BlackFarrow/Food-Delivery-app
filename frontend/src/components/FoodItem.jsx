import { assets } from "../assets/frontend_assets/assets";
import React, { useContext, useState } from "react";
import { StoreContext } from "../context/StoreContext";

const FoodItem = ({ id, name, price, description, image }) => {
  //const [itemCount, setCount] = useState(0);
  const { cartItems, removeFromCart, addToCart,url } =
    useContext(StoreContext);

  return (
    <div className="w-full m-auto border-2 rounded-[15px] shadow-lg animate-fade cursor-pointer ">
      <div className="relative ">
        <img className="w-full rounded-t-[15px]" src={url+"/images/"+image} alt="" />

        {!cartItems[id] ? (
          <img
            className="absolute bottom-3 right-3"
            onClick={() => addToCart(id)}
            src={assets.add_icon_white}
            alt=""
          />
        ) : (
          <div className="absolute flex items-center justify-between gap-2 p-1 rounded-full bg-slate-200 img bottom-3 right-3">
            <img
              className=""
              onClick={() => removeFromCart(id)}
              src={assets.remove_icon_red}
              alt=""
            />
            <p>{cartItems[id]}</p>
            <img
              onClick={() => addToCart(id)}
              src={assets.add_icon_green}
              alt=""
            />
          </div>
        )}
      </div>

      <div className="p-4 fooditem info">
        <div className="flex items-center justify-between">
          <p>{name}</p>
          <img className="" src={assets.rating_starts} alt="" />
        </div>
        <p>{description}</p>
        <p>${price}</p>
      </div>
    </div>
  );
};

export default FoodItem;
