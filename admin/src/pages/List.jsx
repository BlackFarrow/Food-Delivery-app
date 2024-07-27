import React, { useEffect, useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import { url } from "../assets/assets";

const List = ({ url }) => {
  // ro=emoved url variable and add props

  const [list, setList] = useState([]);

  const fetchList = async () => {
    const response = await axios.get(`${url}/api/food/list`);
    console.log(response.data);

    if (response.data.success) {
      setList(response.data.data);
    } else {
      toast.error("error");
    }
  };

  //remove food

  const removeFood = async (foodId) => {
    //console.log(foodId);
    const response = await axios.post(`${url}/api/food/remove`, { id: foodId });
    fetchList();
    if (response.data.success) {
      toast.success("Food Removed");
    } else {
      toast.error("error");
    }
  };
  useEffect(() => {
    fetchList();
  }, []);

  return (
    <div className="w-full m-10 list add">
      <p>All Food List</p>
      <div className="">
        <div className="grid items-center grid-cols-5 gap-2.5 p-5 border  border-black/10 bg-slate-300 max-md:hidden">
          <b>Image</b>
          <b>Name</b>
          <b>Category</b>
          <b>Price</b>
          <b>Action</b>
        </div>
        {list.map((item, index) => {
          return (
            <div
              key={index}
              className="grid items-center grid-cols-5 gap-2.5 p-5 border  border-black/10 max-md:grid-cols-3 "
            >
              <img
                src={`${url}/images/` + item.image}
                alt="image"
                className="w-16 "
              />
              <p>{item.name}</p>
              <p>{item.category}</p>
              <p>${item.price}</p>
              <button
                onClick={() => removeFood(item._id)}
                className="px-2 bg-red-400 cursor-pointer brounded-full py-0.5 rounded-lg"
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default List;
