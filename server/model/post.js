import pg from "pg";
const { Client } = pg;
import { v2 as cloudinary } from "cloudinary";
import * as dotenv from "dotenv";

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_KEY,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const client = new Client(process.env.DATABASE_URL);

client
  .connect()
  .then(() => console.log("Connected to PostgreSQL"))
  .catch((err) => console.error("Error connecting to PostgreSQL", err));

export const postQuery = async ({ body }) => {
  const { name, prompt, photo } = body;

  try {
    await client.query(
      "INSERT INTO posts (name, prompt, photo) VALUES ($1, $2, $3); ",
      [name, prompt, photo]
    );
  } catch (error) {
    console.error(error);
  }
};

export const getAllQuery = async () => {
  try {
    const result = await client.query("SELECT * FROM posts");

    return result.rows;
  } catch (error) {
    console.error(error);
  }
};
