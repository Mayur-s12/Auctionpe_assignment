import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(express.json());

app.use("/auth", authRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(`error starting the server: ${err.message}`);
    process.exit(1);
  }
  console.log(`server running at ${port}`);
});
