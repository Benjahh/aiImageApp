import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";
import { createPostRouter } from "./routes/posts.js";
import { createDalleRouter } from "./routes/dalle.js";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

app.use("/api/v1/post", createPostRouter);
app.use("/api/v1/dalle", createDalleRouter);

const startServer = async () => {
  try {
    app.listen(3001, () => console.log("Server started in port 3001"));
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
