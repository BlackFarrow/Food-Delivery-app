import express from "express";
import cors from "cors";
import { connectDB } from "./config/db.js";
import foodRouter from "./routes/foodRoute.js";
import userRouter from "./routes/userRoute.js";
import "dotenv/config";
import cartRouter from "./routes/cartRoute.js";
import orderRouter from "./routes/orderRoute.js";

//appconfig
const app = express();
const port = 4000;

//middlware
app.use(express.json());
app.use(cors());

//app.get
app.get("/", (req, res) => {
  res.send("API WORKING");
});

//DB connection
connectDB();

//API endpoint
app.use("/api/food", foodRouter);
app.use("/images", express.static("uploads"));
//login wena ekata adalai
app.use("/api/user", userRouter);
app.use("/api/cart", cartRouter);
app.use("/api/order",orderRouter);

app.listen(port, () => {
  console.log(`Server Started on http://localhost:${port}`);
});

//mongodb+srv://salithagayan:salitha@cluster0.o93voth.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0
