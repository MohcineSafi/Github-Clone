import express from "express";
import dotenv from "dotenv";
import cors from "cors";

import userRoutes from "./routes/user.route.js";
import exploreRoutes from "./routes/explore.route.js";
import connectMongoDB from "./db/connectMongoDB.js"; // Import the connectMongoDB function

dotenv.config();

const app = express();
app.use(cors());

app.get("/", (req, res) => {
  res.send("Server is ready");
});

app.use("/api/users", userRoutes);
app.use("/api/explore", exploreRoutes);

app.listen(5000, async () => {
  // Make the callback function async to use await
  console.log("Server is running on port 5000");
  await connectMongoDB(); // Call the connectMongoDB function
});
