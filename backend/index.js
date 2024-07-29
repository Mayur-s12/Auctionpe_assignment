import express from "express";
import dotenv from "dotenv";
import cors from "cors";
import authRoutes from "./routes/authRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import actionRoutes from "./routes/actionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

app.use(
  cors({
    origin:
      "https://auctionpe-assignmentbacend-apr3ty4ea-mayur-s12s-projects.vercel.app",
  })
);

app.use(express.json());

app.use("/auth", authRoutes);
app.use("/session", sessionRoutes);
app.use("/action", actionRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(`Error starting the server: ${err.message}`);
    process.exit(1);
  }
  console.log(`Server running at ${port}`);
});
