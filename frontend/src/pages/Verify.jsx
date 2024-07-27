import React, { useContext, useEffect } from "react";
import { useNavigate, useSearchParams } from "react-router-dom";
import { StoreContext } from "../context/StoreContext";
import axios from "axios";

function Verify() {
  const { url } = useContext(StoreContext);

  const [searchParams, setSearchParams] = useSearchParams();
  const success = searchParams.get("success");
  const orderId = searchParams.get("orderId");
  console.log(success, orderId);
  const navigate = useNavigate();

  const verifyPayment = async () => {
    const response = await axios.post(url + "/api/order/verify", {
      success,
      orderId,
    });
    if (response.data.success) {
      navigate("/myorders");
    } else {
      navigate("/");
    }
  };

  useEffect(() => {
    verifyPayment();
  }, []);

  return (
    <div className="spinner min-h-[60vh] grid">
      <div className="w-[100px] h-[100px]  self-center border rounded-[50%] animate-spin border-t-red-700 "></div>
    </div>
  );
}

export default Verify;
