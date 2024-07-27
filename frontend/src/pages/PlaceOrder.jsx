import React, { useContext, useEffect, useState } from "react";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function PlaceOrder() {
  const Navigate = useNavigate();
  const { getTotal, token, food_list, cartItems, url } =
    useContext(StoreContext);
  const [data, setData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    street: "",
    state: "",
    zipcode: "",
    city: "",
    country: "",
    phone: "",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const placeorder = async (event) => {
    event.preventDefault();
    let orderItems = [];
    food_list.map((item) => {
      if (cartItems[item._id] > 0) {
        let itemInfo = item;
        itemInfo["quantity"] = cartItems[item._id];
        orderItems.push(itemInfo);
      }
    });
    //console.log(orderItems);
    let orderData = {
      address: data,
      items: orderItems,
      amount: getTotal() + 2,
    };
    let response = await axios.post(url + "/api/order/place", orderData, {
      headers: { token },
    });
    if (response.data.success) {
      const { session_url } = response.data;
      window.location.replace(session_url);
    } else {
      alert("Error");
    }
  };

  // useEffect(()=>{
  //   console.log(data);
  // },[data])

 

  useEffect(() => {
    if (!token) {
      Navigate("/cart");
    } else if (getTotal() === 0) {
      Navigate("/cart");
    }
  }, [token]);

  return (
    <div>
      <form
        onSubmit={placeorder}
        className="flex items-start justify-between gap-2 mt-24"
      >
        {/* rigt */}
        <div className="w-1/2 ">
          <p className="text-[30px] mb-5 ">Delivery Information</p>

          <div className="flex gap-1">
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="first name"
              name="firstName"
              onChange={onChangeHandler}
              value={data.firstName}
            />
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="last name"
              name="lastName"
              onChange={onChangeHandler}
              value={data.lastName}
            />
          </div>

          <input
            className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
            type="text"
            placeholder="Email address"
            name="email"
            onChange={onChangeHandler}
            value={data.email}
          />
          <input
            className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
            type="text"
            placeholder="Street"
            name="street"
            onChange={onChangeHandler}
            value={data.street}
          />

          <div className="flex gap-1">
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="City"
              name="city"
              onChange={onChangeHandler}
              value={data.city}
            />
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="State"
              name="state"
              onChange={onChangeHandler}
              value={data.state}
            />
          </div>

          <div className="flex gap-1">
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="ZIP Code"
              name="zipcode"
              onChange={onChangeHandler}
              value={data.zipcode}
            />
            <input
              className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
              type="text"
              placeholder="Country"
              name="country"
              onChange={onChangeHandler}
              value={data.country}
            />
          </div>

          <input
            className="w-full px-2 py-2 mb-1 border rounded outline-none bg-slate-200"
            type="text"
            placeholder="Phone"
            name="phone"
            onChange={onChangeHandler}
            value={data.phone}
          />
        </div>
        {/* left */}
        <div className="w-1/2 mx-10">
          <div className="flex-col flex-1 gap-5 ">
            <h2 className="text-lg font-bold">Cart Totals</h2>
            <div className="flex justify-between">
              <p>Sub total</p>
              <p>${getTotal()}</p>
            </div>
            <div className="flex justify-between">
              <p>Delivery Fee</p>
              <p>${getTotal() === 0 ? 0 : 2}</p>
            </div>
            <div className="flex justify-between">
              <b>Total</b>
              <b>${getTotal() === 0 ? 0 : getTotal() + 2}</b>
            </div>
            <button
              type="submit"
              className="w-full p-2 mt-2 font-bold text-white bg-red-500 rounded-lg"
            >
              PROCEED TO PAYMENT
            </button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default PlaceOrder;
