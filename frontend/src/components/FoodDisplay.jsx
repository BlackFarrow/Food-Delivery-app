import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import FoodItem from "./FoodItem";

function FoodDisplay({ category }) {
  const { food_list } = useContext(StoreContext); //case
  return (
    <div id="mt-[30px]">
      <h2 className=" text-[24px] font-[600] ">Top dishes near you</h2>
      <div className="grid grid-cols-4 gap-3 mt-3">
        {food_list.map((item, index) => {

          if(category==="All" || category===item.category){
            return (
              <FoodItem
                key={index}
                id={item._id}
                name={item.name}
                description={item.description}
                price={item.price}
                image={item.image}
              />
            );
          }

        })}
      </div>
    </div>
  );
}

export default FoodDisplay;
