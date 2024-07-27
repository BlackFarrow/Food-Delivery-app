import foodModal from "../models/foodModel.js";

import fs from "fs";

//add food item

const addFood = async (req, res) => {
  let image_filename = `${req.file.filename}`;

  const food = new foodModal({
    name: req.body.name,
    description: req.body.description,
    price: req.body.price,
    name: req.body.name,
    category: req.body.category,
    name: req.body.name,
    image: image_filename,
  });
  try {
    await food.save();
    res.json({ success: true, message: "Food Added" });
  } catch (error) {
    console.log("ERROR");
    res.json({ success: false, message: "Error" });
  }
};

//list food
const listfood = async (req, res) => {
  try {
    const foods = await foodModal.find({});
    res.json({ success: true, data: foods });
  } catch (error) {
    console.log("ERROR");
    res.json({ success: false, message: "error" });
  }
};

//removefood
const removeFood = async (req, res) => {
  try {
    //image remove
    const food = await foodModal.findById(req.body.id);
    fs.unlink(`uploads/${food.image}`,()=>{});

    //others remove
    await foodModal.findByIdAndDelete(req.body.id);
    res.json({ success: true, message: "Food Deleted" });
  } catch (error) {
    console.log("ERROR");
    res.json({ success: false, message: "error" });
  }
};

export { addFood, listfood, removeFood };
