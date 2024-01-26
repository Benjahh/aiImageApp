import express from "express";
import * as dotenv from "dotenv";
import cors from "cors";

dotenv.config();

const app = express();

app.use(cors());
app.use(express.json({ limit: "50mb" }));

const startServer = async () => {
  try {
    app.listen(3001, () => console.log("Server started in port 3001"));
  } catch (error) {
    console.error(error.message);
  }
};

startServer();
