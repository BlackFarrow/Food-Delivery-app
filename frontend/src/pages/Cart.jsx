import React, { useContext } from "react";
import { StoreContext } from "../context/StoreContext";
import { Navigate, useNavigate } from "react-router-dom";

function Cart() {
  const { cartItems, food_list, removeFromCart, getTotal, url } =
    useContext(StoreContext);

  const navigate = useNavigate();
  return (
    <div className="mt-8">
      <div>
        <div className="grid items-center grid-cols-6 text-gray-500">
          <p>Items</p>
          <p>Title</p>
          <p>Price</p>
          <p>Quantity</p>
          <p>Total</p>
          <p>Remove</p>
        </div>
        <br />
        <hr />
        {food_list.map((item, index) => {
          if (cartItems[item._id] > 0) {
            return (
              <div>
                <div className="grid items-center grid-cols-6 m-2 text-black">
                  {" "}
                  <img className="lg:w-16 sm:w-10" src={url+"/images/"+item.image} alt="" /> {/*src={item.image} kalin thibbeka*/}
                  <p>{item.name}</p>
                  <p>{item.price}</p>
                  <p>{cartItems[item._id]}</p>
                  <p>${item.price * cartItems[item._id]}</p>
                  <button
                    onClick={() => removeFromCart(item._id)}
                    className="bg-red-400 rounded-full cursor-pointer w-[75%]"
                  >
                    Remove
                  </button>
                </div>
                <hr />
              </div>
            );
          }
        })}
      </div>

      <div className="mt-[80px] flex justify-between gap-3 ">
        <div className="flex-col flex-1 gap-5 ">
          <h2 className="text-lg font-bold">Cart Totals</h2>
          <div className="flex justify-between">
            <p>Sub total</p>
            <p>${getTotal()}</p>
          </div>
          <div className="flex justify-between">
            <p>Delivery Fee</p>
            <p>${getTotal()===0?0:2}</p>
          </div>
          <div className="flex justify-between">
            <b>Total</b>
            <b>${getTotal()===0?0:getTotal()+2}</b>
          </div>
          <button onClick={()=>navigate("/order")} className="w-full p-2 mt-2 font-bold text-white bg-red-500 rounded-lg">
            PROCEED TO CHECKOUT
          </button>
        </div>

        <div className="justify-center flex-1 pl-10 m-auto">
          <p>If you have a promo code please enter here</p>
          <div
            className=" w-[70%] mt-5 flex
          "
          >
            <input
              type="text"
              placeholder="Promo Code"
              className="px-3 rounded-l-full outline-none bg-slate-200"
            />
            <button className="px-4 py-2 text-white bg-black rounded-r-full pr">
              Submit
            </button>
          </div>
          ‍‍‍
        </div>
      </div>
    </div>
  );
}

export default Cart;
