const { Client } = require('pg');
import { v2 as cloudinary } from 'cloudinary';
import * as dotenv from 'dotenv';

dotenv.config();

cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_KEY,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

const client = new Client(process.env.DATABASE_URL);

export const postQuery = async ({ body }) => {
  const { name, prompt, photo } = body;
  await client.connect();
  try {
    const result = await client.query('SELECT * FROM');
    return result.rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.end();
  }
};

export const getAllQuery = async () => {
  await client.connect();
  try {
    const result = await pool.query('SELECT * FROM');
    return result.rows;
  } catch (error) {
    console.log(error.message);
  } finally {
    client.end();
  }
};
