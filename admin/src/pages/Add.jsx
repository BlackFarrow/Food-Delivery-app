import React, { useEffect, useState } from "react";
import { assets } from "../assets/assets";
import axios from "axios";
import { toast } from "react-toastify";

const Add = ({url}) => {
  
  const [image, setImage] = useState(false);

  const [data, setData] = useState({
    name: "",
    description: "",
    price: "",
    category: "Rolls",
  });

  const onChangeHandler = (event) => {
    const name = event.target.name;
    const value = event.target.value;
    setData((data) => ({ ...data, [name]: value }));
  };

  const onSubmitHandler = async (event) => {
    event.preventDefault();
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("description", data.description);
    formData.append("price", Number(data.price));
    formData.append("category", data.category);
    formData.append("image", image);

    //api call
    const response = await axios.post(`${url}/api/food/add`, formData);
    if (response.data.success) {
      setData({
        name: "",
        description: "",
        price: "",
        category: "Rolls",
      });

      setImage(false);
      toast.success(response.data.message)
    } else { 
        toast.error(response.data.message)
    }
  };

  //   useEffect(()=>{
  //     console.log(data);
  //   },[data])

  return (
    <div className="W-[70%] ml-[max(5vw,25px)] mt-10 text-[16px] ">
      <form onSubmit={onSubmitHandler} className="gap-4">
        <div className="flex flex-col gap-3">
          <div className="flex-col justify-center text-center addimage">
            <p>Upload Image</p>
            <label htmlFor="image" className="flex justify-center mt-3">
              <img
                className="w-48"
                src={image ? URL.createObjectURL(image) : assets.upload_area}
                alt=""
              />
            </label>
            <input
              type="file"
              id="image"
              onChange={(e) => setImage(e.target.files[0])}
              hidden
              
            />
          </div>

          <div className="addproduct-name ">
            <p>Product Name</p>
            <input
              className=" p-2.5 bg-slate-100 w-full rounded"
              type="text"
              placeholder="Type Here"
              name="name"
              onChange={onChangeHandler}
              value={data.name}
              required
            />
          </div>

          <div className="">
            <p>Product Description</p>
            <textarea
              className=" p-2.5 bg-slate-100 w-full rounded"
              name="description"
              rows="6"
              placeholder="Write content Here"
              onChange={onChangeHandler}
              value={data.description}
              required
            ></textarea>
          </div>

          <div className="flex gap-3 add cat price">
            <div className="flex flex-col flex-1 addCategory">
              <p>Product Category</p>
              <select
                name="category"
                className=" p-2.5 bg-slate-100 w-full rounded box-border"
                onChange={onChangeHandler}
                value={data.category}
                required
              >
                <option value="Salad">Salad</option>
                <option value="Rolls">Rolls</option>
                <option value="Desert">Deserts</option>
                <option value="Sandwitch">Sandwitch</option>
                <option value="Cake">Cake</option>
                <option value="Pure Veg">Pure Veg</option>
                <option value="Pasta">Pasta</option>
                <option value="Noodles">Noodles</option>
              </select>
            </div>

            <div className="flex flex-col flex-1 bg-blue">
              <p>Product Price</p>
              <input
                type="Number"
                name="price"
                placeholder="$20"
                className=" p-2.5 bg-slate-100  rounded"
                onChange={onChangeHandler}
                value={data.price}
                required
              />
            </div>
          </div>

          <button
            type="submit"
            className="bg-orange-500 p-2.5 rounded text-white font-bold"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};

export default Add;
