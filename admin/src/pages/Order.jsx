import React, { useEffect } from "react";
import { useState } from "react";
import { toast } from "react-toastify";
import { assets } from "../assets/assets";
import axios from "axios";

const Order = ({ url }) => {
  const [orders, setOrders] = useState([]);

  const fetchAllOrders = async () => {
    const response = await axios.get(url + "/api/order/list");
    if (response.data.data) {
      setOrders(response.data.data);
      console.log(response.data.data);
    } else {
      toast.error("Erroro");
    }
  };


  const statusHandler = async (event,orderId)=>{
   // console.log(event,orderId);
   const response = await axios.post(url+"/api/order/status",{orderId,status:event.target.value})
   if (response.data.success) {
    await fetchAllOrders();
    
   }else{
    
   }  }
  
  

  useEffect(() => {
    fetchAllOrders();
  }, []);

  return (
    <div>
      <h3>Order Page</h3>
      <div className="orderlist">
        {orders.map((order, index) => (
          <div key={index} className="grid items-center grid-cols-8 m-2 my-3 border">
            <img src={assets.parcel_icon} alt="fg" />

            <p>
              {order.items.map((item, index) => {
                if (index === order.items.length - 1) {
                  return item.name + " x " + item.quantity;
                } else {
                  return item.name + " x " + item.quantity + ", ";
                }
              })}
            </p>
            <p className="item name">
              {order.address.firstName + " " + order.address.lastName}
            </p>
            <div className="address">
              <p>{order.address.street + ","}</p>
              <p>
                {order.address.city +
                  ", " +
                  order.state +
                  ", " +
                  order.address.country +
                  ", " +
                  order.address.zipcode}
              </p>
            </div>
            <p className="phone">{order.address.phone}</p>
            <p>Items: {order.items.length}</p>
            <p>${order.amount}</p>
            <select onChange={(event)=>statusHandler(event,order._id)} value={order.status} name="" id="">
              <option value="Food Processing">Food Processing</option>
              <option value="Out for Delivery">Out for Delivery</option>
              <option value="Delivered">Delivered</option>
            </select>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Order;
