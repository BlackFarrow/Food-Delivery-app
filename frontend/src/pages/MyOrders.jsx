import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { assets } from "../assets/frontend_assets/assets";

function MyOrders() {
  const { url, token } = useContext(StoreContext);
  const [data, setData] = useState([]);
  const fetchOrders = async () => {
    const response = await axios.post(
      url + "/api/order/userorders",
      {},
      { headers: { token } }
    );
    setData(response.data.data);
    //console.log(response.data.data);
  };

  useEffect(() => {
    if (token) {
      fetchOrders();
    }
  }, [token]);

  return (
    <div className=" m-[50px]">
      <h2>My orders</h2>
      <div className="flex flex-col gap-5 mt-5 ">
        {data.map((order, index) => {
          return (
            <div key={index}  className="grid items-center grid-cols-6 px-2 border border-orange-400">
              <img src={assets.parcel_icon} alt="" className="w-[50px]" />
              <p>
                {order.items.map((item, index) => {
                  if (index === order.items.length - 1) {
                    return item.name + " x " + item.quantity;
                  } else {
                    return item.name + " x " + item.quantity + ",";
                  }
                })}
              </p>
              <p>{order.amount}.00</p>
              <p>Items:{order.items.length}</p>
              <p>
                <span className="text-red-600">&#x25cf;</span>
                <b className="text-red-800">{order.status}</b>
              </p>
              <button onClick={fetchOrders()} className="p-1 bg-red-400 border rounded">Track Order</button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default MyOrders;
