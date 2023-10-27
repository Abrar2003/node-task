const express = require("express");
const mongoose = require("mongoose");
require("dotenv").config();
const productRoutes = require("./routes/productRoutes");
const reviewRoutes = require("./routes/reviewRoutes");

const app = express();
const PORT = process.env.PORT || 3000;

// Connect to MongoDB
async function connectDb() {
  await mongoose
    .connect(process.env.MONGO_URI)
    .then(() => console.log("db connected"));
}

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Use routes
app.use("/api/products", productRoutes);
app.use("/api/reviews", reviewRoutes);

app.get("/", (req, res) => res.send("hello"));

app.listen(PORT, () => {
  connectDb();
  console.log(`Server is running on port ${PORT}`);
});
