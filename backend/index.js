import express from "express";
import dotenv from "dotenv";
import authRoutes from "./routes/authRoutes.js";
import sessionRoutes from "./routes/sessionRoutes.js";
import actionRoutes from "./routes/actionRoutes.js";
import dashboardRoutes from "./routes/dashboardRoutes.js";
import cors from "cors";

dotenv.config();

const app = express();

const port = process.env.PORT || 5000;

const corsOptions = {
  origin: "*",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
};

app.use(cors(corsOptions));
app.use(express.json());

app.use("/auth", authRoutes);
app.use("/session", sessionRoutes);
app.use("/action", actionRoutes);
app.use("/dashboard", dashboardRoutes);

app.listen(port, (err) => {
  if (err) {
    console.log(`error starting the server: ${err.message}`);
    process.exit(1);
  }
  console.log(`server running at ${port}`);
});
